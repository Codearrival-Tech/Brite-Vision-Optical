import React from "react";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  phone: string;
  message: string;
  rating: number;
}

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const maskPhone = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  const visiblePart = digits.slice(0, -5);
  const maskedDigits = visiblePart + "*****";

  let result = "";
  let digitIndex = 0;

  for (const char of phone) {
    if (/\d/.test(char)) {
      result += maskedDigits[digitIndex] ?? "*";
      digitIndex++;
    } else {
      result += char;
    }
  }

  return result;
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial: t,
}) => (
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
        <p className="text-sm font-medium text-stone-900">{t.name}</p>
        <p className="text-xs text-stone-400 tracking-wide">
          {maskPhone(t.phone)}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
