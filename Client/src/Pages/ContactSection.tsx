import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Calendar, MessageSquare, ShoppingBag } from 'lucide-react';

const ContactSection: React.FC = () => {
  // Toggle state now supports three forms
  const [formType, setFormType] = useState<'contact' | 'appointment' | 'booking'>('contact');

  const contactDetails = [
    { 
      icon: <MapPin size={24} />, 
      label: "Address", 
      text: "3680 Schamberger Pass, North Catalina", 
      sub: "Coimbatore, India", 
      color: "bg-[var(--brand-primary)] text-white" 
    },
    { 
      icon: <Phone size={24} />, 
      label: "Contact", 
      text: "1800-14-0147", 
      sub: "Mon-Sat, 9am-6pm", 
      color: "bg-emerald-50 text-slate-700" 
    },
    { 
      icon: <Mail size={24} />, 
      label: "Email", 
      text: "care@britevision.com", 
      sub: "24/7 online support", 
      color: "bg-emerald-50 text-slate-700" 
    },
    { 
      icon: <Clock size={24} />, 
      label: "Working Hours", 
      text: "10 AM to 7 PM", 
      sub: "Sunday: 11 AM to 5 PM", 
      color: "bg-emerald-50 text-slate-700" 
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Side: Form Container */}
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 md:p-12 shadow-sm border border-slate-100">
            
            {/* Header & 3-Way Switcher */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-10 gap-6">
              <div>
                <h2 className="text-3xl font-extrabold text-slate-900 font-heading">
                  {formType === 'contact' && 'Get in Touch'}
                  {formType === 'appointment' && 'Book an Eye Test'}
                  {formType === 'booking' && 'Reserve Your Frames'}
                </h2>
                <p className="text-slate-500 mt-2 font-medium">
                  {formType === 'contact' && 'We are here to help you.'}
                  {formType === 'appointment' && 'Schedule your professional exam.'}
                  {formType === 'booking' && 'Reserve frames for an in-store trial.'}
                </p>
              </div>

              {/* Enhanced Switcher for 3 options */}
              <div className="flex bg-slate-100 p-1 rounded-2xl self-start">
                <button 
                  onClick={() => setFormType('contact')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${formType === 'contact' ? 'bg-white text-[var(--brand-primary)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <MessageSquare className="w-4 h-4" /> Contact
                </button>
                <button 
                  onClick={() => setFormType('appointment')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${formType === 'appointment' ? 'bg-white text-[var(--brand-primary)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <Calendar className="w-4 h-4" /> Eye Test
                </button>
                <button 
                  onClick={() => setFormType('booking')}
                  className={`px-4 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${formType === 'booking' ? 'bg-white text-[var(--brand-primary)] shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
                >
                  <ShoppingBag className="w-4 h-4" /> Book Glass
                </button>
              </div>
            </div>

            {/* Dynamic Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                  <input type="text" placeholder="Gayathri Devi" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input type="email" placeholder="example@gmail.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none" />
                </div>
              </div>

              {/* Conditional Fields for Eye Test */}
              {formType === 'appointment' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Appointment Date</label>
                    <input type="date" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Preferred Slot</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none appearance-none">
                      <option>Morning Slot</option>
                      <option>Afternoon Slot</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Conditional Fields for Glass Booking */}
              {formType === 'booking' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Frame Model / ID</label>
                    <input type="text" placeholder="e.g. Aviator-X20" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Lens Type Preference</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none appearance-none">
                      <option>Blue Light Filter</option>
                      <option>Anti-Glare / Premium</option>
                      <option>Photochromic (Transition)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  {formType === 'contact' ? 'Message' : 'Additional Requests'}
                </label>
                <textarea rows={4} placeholder="Describe your requirements..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[var(--brand-primary)] transition-all outline-none resize-none"></textarea>
              </div>

              <button className="w-full py-5 bg-[var(--brand-primary)] text-white font-bold rounded-2xl hover:brightness-110 shadow-lg shadow-[var(--brand-primary)]/20 transition-all transform active:scale-[0.98]">
                {formType === 'contact' && 'Send Message'}
                {formType === 'appointment' && 'Confirm My Appointment'}
                {formType === 'booking' && 'Reserve These Frames'}
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info */}
          <div className="space-y-4">
            {contactDetails.map((detail, idx) => (
              <div 
                key={idx} 
                className={`p-8 rounded-[32px] flex items-start gap-6 transition-all border border-transparent hover:border-[var(--brand-primary)]/20 cursor-default ${detail.color.includes('var(--brand-primary)') ? detail.color + ' shadow-xl shadow-[var(--brand-primary)]/20' : 'bg-white shadow-sm'}`}
              >
                <div className={`mt-1 p-2 rounded-lg ${detail.color.includes('white') ? 'bg-white/20 text-white' : 'text-[var(--brand-primary)] bg-emerald-50'}`}>
                  {detail.icon}
                </div>
                <div>
                  <p className={`text-xs font-bold uppercase tracking-widest ${detail.color.includes('white') ? 'text-white/70' : 'text-slate-400'}`}>
                    {detail.label}
                  </p>
                  <h4 className="font-bold text-lg mt-1 tracking-tight">{detail.text}</h4>
                  <p className={`text-sm mt-1 ${detail.color.includes('white') ? 'text-white/80' : 'text-slate-500'}`}>
                    {detail.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;