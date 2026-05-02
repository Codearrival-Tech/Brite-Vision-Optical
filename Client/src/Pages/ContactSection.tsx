import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  ShoppingBag,
  Eye,
  Loader2,
} from "lucide-react";

// Assuming your axios.ts exports: export const API = { CONTACT: '...', EYE_TEST: '...', BOOK_FRAME: '...' }
import { API } from "../api/axios"; 

type FormType = "contact" | "appointment" | "booking";

const FORM_CONFIG = {
  contact: {
    title: "Get in touch",
    sub: "We're here to help you.",
    btn: "Send message",
    msgLabel: "Message",
  },
  appointment: {
    title: "Book an eye test",
    sub: "Schedule your professional exam.",
    btn: "Confirm appointment",
    msgLabel: "Additional requests",
  },
  booking: {
    title: "Reserve your frames",
    sub: "Reserve frames for an in-store trial.",
    btn: "Reserve frames",
    msgLabel: "Additional requests",
  },
} as const;

const INFO_ROWS = [
  {
    icon: <MapPin className="w-[18px] h-[18px] text-white" />,
    label: "Address",
    text: "Schamberger Pass",
    sub: "Coimbatore, India",
  },
  {
    icon: <Phone className="w-[18px] h-[18px] text-white" />,
    label: "Phone",
    text: "1800-14-0147",
    sub: "Mon–Sat, 9am–6pm",
  },
  {
    icon: <Mail className="w-[18px] h-[18px] text-white" />,
    label: "Email",
    text: "care@britevision.com",
    sub: "24/7 online support",
  },
  {
    icon: <Clock className="w-[18px] h-[18px] text-white" />,
    label: "Hours",
    text: "10 AM – 7 PM",
    sub: "Sun: 11 AM – 5 PM",
  },
];

const TABS: { key: FormType; icon: React.ReactNode; label: string }[] = [
  { key: "contact", icon: <MessageSquare className="w-3.5 h-3.5" />, label: "Contact" },
  { key: "appointment", icon: <Calendar className="w-3.5 h-3.5" />, label: "Eye test" },
  { key: "booking", icon: <ShoppingBag className="w-3.5 h-3.5" />, label: "Book frames" },
];

const inputCls =
  "w-full px-4 py-3 rounded-xl text-sm " +
  "bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 " +
  "focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 " +
  "transition-colors duration-150";

const ContactSection: React.FC = () => {
  const [formType, setFormType] = useState<FormType>("contact");
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: "",
    slot: "Morning slot",
    frameModel: "",
    lens: "Blue light filter",
  });

  useEffect(() => {
    const syncFormType = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === "#contact-booking") {
        setFormType("booking");
      } else if (hash === "#contact-appointment") {
        setFormType("appointment");
      } else if (hash === "#contact") {
        setFormType("contact");
      }
    };

    syncFormType();
    window.addEventListener("hashchange", syncFormType);
    return () => window.removeEventListener("hashchange", syncFormType);
  }, []);

  const cfg = FORM_CONFIG[formType];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Dynamic mapping for Sheety Root Keys
    // 'appointment' maps to 'eyeTest' to match your "Eye Test" sheet tab
    const sheetKeyMap: Record<FormType, string> = {
      contact: "contact",
      appointment: "eyeTest", 
      booking: "bookFrame",
    };

    const endpointMap: Record<FormType, string> = {
      contact: API.CONTACT,
      appointment: API.EYE_TEST,
      booking: API.BOOK_FRAME,
    };

    // Construct the payload according to your Google Sheet headers
    const payload = {
      [sheetKeyMap[formType]]: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        ...(formType === "appointment" && {
          date: formData.date,
          slot: formData.slot,
        }),
        ...(formType === "booking" && {
          frameModel: formData.frameModel,
          lens: formData.lens,
        }),
      }
    };

    try {
      await axios.post(endpointMap[formType], payload);
      alert("Submission successful! We will get back to you shortly.");
      
      // Reset form
      setFormData({
        name: "", email: "", message: "", 
        date: "", slot: "Morning slot", 
        frameModel: "", lens: "Blue light filter"
      });
    } catch (err: any) {
      console.error("Submission error:", err.response?.data || err.message);
      // Helpful alert for the common 403 error
      if (err.response?.status === 403) {
        alert("Access Denied (403): Please ensure POST permissions are enabled in your Sheety dashboard settings for this sheet.");
      } else {
        alert("Failed to send your request. Please check your connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-28 py-24 bg-slate-50">
      <span id="contact-appointment" className="block scroll-mt-28 h-0" />
      <span id="contact-booking" className="block scroll-mt-28 h-0" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-6 items-stretch">
          
          <div className="bg-white border border-slate-100 rounded-[28px] p-8 md:p-12">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl w-fit mb-8">
              {TABS.map(({ key, icon, label }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFormType(key)}
                  className={[
                    "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                    formType === key
                      ? "bg-green-600 text-white shadow-sm"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200",
                  ].join(" ")}
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                {cfg.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">{cfg.sub}</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputCls}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className={inputCls}
                  />
                </div>
              </div>

              {formType === "appointment" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Appointment date
                    </label>
                    <input 
                      type="date" 
                      name="date" 
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className={inputCls} 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Preferred slot
                    </label>
                    <select 
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      className={inputCls + " appearance-none"}
                    >
                      <option value="Morning slot">Morning slot</option>
                      <option value="Afternoon slot">Afternoon slot</option>
                    </select>
                  </div>
                </div>
              )}

              {formType === "booking" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Frame model / ID
                    </label>
                    <input
                      type="text"
                      name="frameModel"
                      required
                      value={formData.frameModel}
                      onChange={handleChange}
                      placeholder="e.g. Aviator-X20"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Lens preference
                    </label>
                    <select 
                      name="lens"
                      value={formData.lens}
                      onChange={handleChange}
                      className={inputCls + " appearance-none"}
                    >
                      <option value="Blue light filter">Blue light filter</option>
                      <option value="Anti-glare / premium">Anti-glare / premium</option>
                      <option value="Photochromic (transition)">Photochromic (transition)</option>
                    </select>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                  {cfg.msgLabel}
                </label>
                <textarea
                  rows={5}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirements..."
                  className={inputCls + " resize-none"}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-green-600 hover:bg-green-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-2xl shadow-md shadow-green-600/20 transition-all duration-150 flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? "Sending..." : cfg.btn}
              </button>
            </form>
          </div>

          <div className="bg-green-600 rounded-[28px] p-8 md:p-10 flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-white leading-none">Brite Vision</p>
                <p className="text-xs text-white/60 mt-1">Optical care centre</p>
              </div>
            </div>

            <div className="flex flex-col flex-1">
              {INFO_ROWS.map((row, i) => (
                <div
                  key={row.label}
                  className={[
                    "flex items-start gap-4 py-5",
                    i < INFO_ROWS.length - 1 ? "border-b border-white/15" : "",
                  ].join(" ")}
                >
                  <div className="w-11 h-11 bg-white/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {row.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-white/55 uppercase tracking-widest mb-1.5">{row.label}</p>
                    <p className="text-sm font-semibold text-white leading-snug">{row.text}</p>
                    <p className="text-xs text-white/65 mt-1">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/15">
              <p className="text-xs text-white/50 leading-relaxed">
                We usually respond within a few hours on working days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;