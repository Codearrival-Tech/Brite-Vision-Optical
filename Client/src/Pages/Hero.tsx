import React from 'react';
import Image from '../assets/Glass.jpg';

const Hero: React.FC = () => {
  // Array for marquee items to keep the code clean
  const marqueeItems = [
    "New Summer Collection",
    "Anti-Blue Light Lenses",
    "Premium Titanium Frames",
    "Free Shipping on Orders Over $100",
    "2-Year Warranty",
  ];

  return (
    <section id="home" className="scroll-mt-28 relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={Image} 
          alt="Couple wearing glasses" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent md:bg-gradient-to-b md:from-black/50 md:to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-100 mb-6 leading-tight font-heading">
          Find <span className="text-[var(--brand-primary)]">Your Perfect </span>  
          Pair of Glasses
        </h1>
        
        <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-2xl mx-auto font-medium">
          Book an eye test or get frame recommendations in minutes. 
          Quality care for your unique vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button className="w-full sm:w-auto px-10 py-4 bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-dark)] text-white font-bold rounded-[var(--radius)] transition-all shadow-lg shadow-[var(--brand-primary)]/20 transform hover:-translate-y-1">
            Book Eye Test
          </button>
          
          <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white font-bold rounded-[var(--radius)] hover:bg-white hover:text-black transition-all">
            Explore Frames
          </button>
        </div>
      </div>

      {/* --- MARQUEE SECTION --- */}
      <div className="absolute bottom-0 w-full bg-white/10 backdrop-blur-md border-t border-white/10 py-4 overflow-hidden z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* We duplicate the content to ensure a seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
              {marqueeItems.map((text, index) => (
                <div key={index} className="flex items-center mx-8">
                  <img 
                    src={Image} 
                    alt="icon" 
                    className="w-8 h-8 object-cover rounded-full border border-[var(--brand-primary)] mr-4" 
                  />
                  <span className="text-white font-bold uppercase tracking-widest text-sm">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Blur Element */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[var(--brand-primary)]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Hero;