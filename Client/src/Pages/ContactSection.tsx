import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  ShoppingBag,
  Eye,
} from "lucide-react";

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
  {
    key: "contact",
    icon: <MessageSquare className="w-3.5 h-3.5" />,
    label: "Contact",
  },
  {
    key: "appointment",
    icon: <Calendar className="w-3.5 h-3.5" />,
    label: "Eye test",
  },
  {
    key: "booking",
    icon: <ShoppingBag className="w-3.5 h-3.5" />,
    label: "Book frames",
  },
];

const inputCls =
  "w-full px-4 py-3 rounded-xl text-sm " +
  "bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 " +
  "focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 " +
  "transition-colors duration-150";

const ContactSection: React.FC = () => {
  const [formType, setFormType] = useState<FormType>("contact");
  const cfg = FORM_CONFIG[formType];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_4fr] gap-6 items-stretch">
          {/* ── LEFT: Form ── */}
          <div className="bg-white border border-slate-100 rounded-[28px] p-8 md:p-12">
            {/* Tab switcher */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl w-fit mb-8">
              {TABS.map(({ key, icon, label }) => (
                <button
                  key={key}
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

            {/* Title */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
                {cfg.title}
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">{cfg.sub}</p>
            </div>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Base fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Gayathri Devi"
                    className={inputCls}
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className={inputCls}
                  />
                </div>
              </div>

              {/* Eye test extras */}
              {formType === "appointment" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Appointment date
                    </label>
                    <input type="date" className={inputCls} />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Preferred slot
                    </label>
                    <select className={inputCls + " appearance-none"}>
                      <option>Morning slot</option>
                      <option>Afternoon slot</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Frame booking extras */}
              {formType === "booking" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Frame model / ID
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Aviator-X20"
                      className={inputCls}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                      Lens preference
                    </label>
                    <select className={inputCls + " appearance-none"}>
                      <option>Blue light filter</option>
                      <option>Anti-glare / premium</option>
                      <option>Photochromic (transition)</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-[11px] font-medium text-slate-500 uppercase tracking-widest">
                  {cfg.msgLabel}
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your requirements..."
                  className={inputCls + " resize-none"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white text-sm font-semibold rounded-2xl shadow-md shadow-green-600/20 transition-all duration-150"
              >
                {cfg.btn}
              </button>
            </form>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="bg-green-600 rounded-[28px] p-8 md:p-10 flex flex-col">
            {/* Brand mark */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-base font-semibold text-white leading-none">
                  Brite Vision
                </p>
                <p className="text-xs text-white/60 mt-1">
                  Optical care centre
                </p>
              </div>
            </div>

            {/* Info rows */}
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
                    <p className="text-[11px] font-medium text-white/55 uppercase tracking-widest mb-1.5">
                      {row.label}
                    </p>
                    <p className="text-sm font-semibold text-white leading-snug">
                      {row.text}
                    </p>
                    <p className="text-xs text-white/65 mt-1">{row.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
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