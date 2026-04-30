import React from 'react';
import { Star } from 'lucide-react';

const TestimonialSection: React.FC = () => {
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

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-emerald-600 font-bold tracking-widest uppercase text-sm mb-4">
            3940+ Happy Users
          </p>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Don't just take our <br />
            <span className="text-emerald-600">words</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-8 group">
              
              {/* Image Container */}
              <div className="relative shrink-0">
                <div className="w-48 h-56 rounded-[32px] overflow-hidden shadow-2xl shadow-emerald-900/10 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element matching the light green theme */}
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-50 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
              </div>

              {/* Content Container */}
              <div className="flex flex-col pt-2 text-center md:text-left">
                {/* Star Rating - Changed to emerald/light green */}
                <div className="flex items-center justify-center md:justify-start gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-emerald-500 text-emerald-500" />
                  ))}
                </div>

                <blockquote className="text-xl font-bold text-slate-800 leading-relaxed mb-8">
                  "{item.text}"
                </blockquote>

                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <h4 className="text-lg font-black text-slate-900">{item.name}</h4>
                  <span className="hidden md:block w-1.5 h-1.5 rounded-full bg-emerald-200" />
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