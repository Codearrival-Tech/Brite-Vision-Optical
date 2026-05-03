import React, { useState } from "react";
import axios from "axios";
import { Star, Plus, Loader2, X } from "lucide-react";
import { API } from "../api/axios";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    name: "Jenny Wilson",
    phone: "+1 (555) 000-1234",
    message:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    rating: 5,
  },
  {
    name: "Devon Lane",
    phone: "+1 (555) 000-5678",
    message:
      "We love Landingfolio! Our designers were using it for their projects, so we already knew what kind of design they want.",
    rating: 5,
  },
  {
    name: "Babu",
    phone: "+91 98765 43210",
    message: "Good",
    rating: 5,
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const maskPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, ""); // "919876543210"
  const visiblePart = digits.slice(0, -5); // "9198765"
  const maskedDigits = visiblePart + "*****"; // "9198765*****"

  let result = "";
  let digitIndex = 0;

  for (const char of phone) {
    if (/\d/.test(char)) {
      result += maskedDigits[digitIndex] ?? "*";
      digitIndex++;
    } else {
      result += char; // keep +, spaces, dashes, ()
    }
  }

  return result;
};

const TestimonialSection: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    rating: 5,
  });

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true }),
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRating = (value: number) =>
    setFormData({ ...formData, rating: value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(API.FEEDBACK, { feedback: formData });
      alert("Thank you for your feedback!");
      setFormData({ name: "", phone: "", message: "", rating: 5 });
      setShowForm(false);
    } catch {
      alert("Failed to submit. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-stone-50 relative overflow-hidden">
      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1c1917_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative">
        {/* ── Header ── */}
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] uppercase text-green-600 mb-3">
              <span className="w-6 h-px bg-green-600 inline-block" />
              What people say
            </p>
            <h2 className="font-serif text-5xl md:text-6xl font-black text-stone-900 leading-[1.05] tracking-tight">
              Don't just take
              <br />
              our <em className="italic text-green-600">words</em>
            </h2>
          </div>
          <span className="shrink-0 bg-stone-900 text-stone-50 text-xs font-medium px-5 py-2.5 rounded-full tracking-wide whitespace-nowrap">
            3,940+ happy users
          </span>
        </div>

        {/* ── Carousel ── */}
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2">
                <div className="h-full bg-white rounded-2xl border border-stone-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between relative overflow-hidden min-h-[220px]">
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-green-50 to-transparent rounded-bl-3xl pointer-events-none" />

                  {/* Giant quote mark */}
                  <span className="absolute top-4 left-7 font-serif text-7xl leading-none text-green-600 opacity-10 select-none">
                    "
                  </span>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, s) => (
                        <Star
                          key={s}
                          size={14}
                          className={
                            s < t.rating
                              ? "fill-green-600 text-green-600"
                              : "fill-stone-200 text-stone-200"
                          }
                        />
                      ))}
                    </div>
                    <blockquote className="font-serif text-lg font-bold italic text-stone-800 leading-relaxed mb-7">
                      "{t.message}"
                    </blockquote>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center text-white text-sm font-bold shrink-0">
                      {getInitials(t.name)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-stone-900">
                        {t.name}
                      </p>
                      <p className="text-xs text-stone-400 tracking-wide">
                        {maskPhone(t.phone)}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all rounded-full" />
            <CarouselNext className="static translate-y-0 border-stone-300 hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all rounded-full" />
          </div>
        </Carousel>

        {/* ── CTA ── */}
        <div className="mt-10">
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2 px-6 py-3 border-[1.5px] border-stone-900 text-stone-900 text-xs font-medium tracking-[0.08em] uppercase rounded-full hover:bg-stone-900 hover:text-white transition-all group"
          >
            <Plus
              size={14}
              className="group-hover:rotate-90 transition-transform duration-300"
            />
            Share your feedback
          </button>
        </div>
      </div>

      {/* ── Feedback Modal ── */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-700 transition-colors"
            >
              <X size={20} />
            </button>

            <p className="text-xs font-medium tracking-[0.2em] uppercase text-green-600 mb-2">
              New testimonial
            </p>
            <h3 className="font-serif text-3xl font-black text-stone-900 mb-1">
              Your experience
            </h3>
            <p className="text-stone-400 text-sm mb-7">
              Helps others make the right choice.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-sm"
              />

              {/* Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all text-sm"
              />

              {/* Star Rating */}
              <div>
                <p className="text-xs font-medium text-stone-500 uppercase tracking-widest mb-2">
                  Rating
                </p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => handleRating(v)}
                      className="focus:outline-none transition-transform hover:scale-110"
                    >
                      <Star
                        size={28}
                        className={
                          v <= formData.rating
                            ? "fill-green-600 text-green-600"
                            : "fill-stone-200 text-stone-200"
                        }
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="What did you love?"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/10 outline-none transition-all resize-none text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-stone-900 text-white font-medium text-sm tracking-wide rounded-2xl hover:bg-stone-800 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  "Submit testimonial →"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialSection;
