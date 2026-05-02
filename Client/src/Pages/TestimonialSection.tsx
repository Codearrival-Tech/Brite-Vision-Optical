import React, { useState } from 'react';
import axios from 'axios';
import { Star, MessageSquarePlus, Loader2, X } from 'lucide-react';
import { API } from "../api/axios";

const TestimonialSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: "5",
    text: ""
  });

  const testimonials = [
    {
      name: "Jenny Wilson",
      role: "Grower.io",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      rating: 5
    },
    {
      name: "Devon Lane",
      role: "DLDesign.co",
      text: "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      rating: 5
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ROOT KEY MUST MATCH SHEET TAB NAME: "feedback"
    const payload = {
      feedback: {
        ...formData,
        rating: parseInt(formData.rating)
      }
    };

    try {
      await axios.post(API.FEEDBACK, payload);
      alert("Thank you for your feedback!");
      setFormData({ name: "", role: "", rating: "5", text: "" });
      setShowForm(false);
    } catch (err: any) {
      console.error("Feedback error:", err);
      alert("Failed to submit. Please check your connection or Sheety permissions.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[var(--brand-primary)] font-bold tracking-widest uppercase text-sm mb-4">
            3940+ Happy Users
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Don't just take our <br />
            <span className="text-[var(--brand-primary)]">words</span>
          </h2>
          
          <button 
            onClick={() => setShowForm(true)}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-primary)] text-white font-bold rounded-2xl hover:bg-[var(--brand-primary-dark)] transition-all shadow-lg shadow-[var(--brand-primary)]/20 active:scale-95"
          >
            <MessageSquarePlus size={20} />
            Share your feedback
          </button>
        </div>

        {/* Feedback Modal Form */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white w-full max-w-xl rounded-[32px] p-8 md:p-10 shadow-2xl relative">
              <button 
                onClick={() => setShowForm(false)}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-black text-slate-900 mb-2">Write a testimonial</h3>
              <p className="text-slate-500 mb-8">Your experience helps others make the right choice.</p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Role / Company"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all"
                  />
                </div>
                
                <select
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all bg-white"
                >
                  <option value="5">5 Stars - Excellent</option>
                  <option value="4">4 Stars - Very Good</option>
                  <option value="3">3 Stars - Average</option>
                </select>

                <textarea
                  name="text"
                  placeholder="Tell us what you loved..."
                  required
                  rows={4}
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all resize-none"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[var(--brand-primary)] text-white font-black rounded-2xl hover:bg-[var(--brand-primary-dark)] transition-all flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {loading ? <Loader2 className="animate-spin" /> : "Submit My Testimonial"}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
              <div className="relative shrink-0">
                <div className="w-48 h-56 rounded-[32px] overflow-hidden shadow-2xl shadow-[var(--brand-primary)]/10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-[var(--brand-primary)]/10 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>

              <div className="flex flex-col pt-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-[var(--brand-primary)] text-[var(--brand-primary)]  " />
                  ))}
                </div>
                <blockquote className="text-xl font-bold text-slate-800 leading-relaxed mb-8">
                  "{item.text}"
                </blockquote>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h4 className="text-lg font-black text-slate-900">{item.name}</h4>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)]" />
                  <p className="text-slate-400 font-bold text-sm tracking-wide">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;