import React from 'react';

// Replace these with your actual image paths
// Suggestion: Use clean, high-resolution lifestyle shots of eyewear
const GlassImage1 = "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=2070&auto=format&fit=crop"; 
const GlassImage2 = "https://images.unsplash.com/photo-1511499767350-a1590fdb7307?q=80&w=2080&auto=format&fit=crop";

const LatestProducts: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading">
            Our Latest <span className="text-[var(--brand-primary)]">Products</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Browse our product categories for easy discovery.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[650px]">
          
          {/* Main Large Featured Card */}
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-[var(--radius)] bg-slate-100 border border-slate-200 transition-all hover:shadow-2xl hover:shadow-[var(--brand-primary)]/10">
            <img 
              src={GlassImage1} 
              alt="Premium Eyewear" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <span className="bg-[var(--brand-primary)] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase mb-4 inline-block tracking-widest">
                Trending Now
              </span>
              <h3 className="text-4xl font-bold mb-2">Luxury Collection</h3>
              <p className="text-white/80 max-w-xs">Experience the perfect blend of fashion and clinical precision.</p>
            </div>
          </div>

          {/* Landscape Secondary Card */}
          <div className="md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-[var(--radius)] bg-white border border-slate-200 transition-all hover:shadow-lg">
             <img 
              src={GlassImage2} 
              alt="Sunglasses Collection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-[var(--brand-primary)]/10 group-hover:bg-transparent transition-colors" />
             <div className="relative z-10 p-10 flex flex-col h-full justify-center">
                <h3 className="text-2xl font-bold text-slate-900 bg-white/80 backdrop-blur-sm self-start px-4 py-2 rounded-lg">
                  Designer Sunnies
                </h3>
                <p className="text-slate-700 mt-2 font-semibold">UVA/UVB Protection</p>
             </div>
          </div>

          {/* Interactive Feature Card */}
          <div className="md:col-span-1 md:row-span-1 bg-emerald-50 p-8 rounded-[var(--radius)] border border-[var(--brand-primary)]/20 flex flex-col justify-between hover:bg-[var(--brand-primary)] transition-all group cursor-pointer">
            <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[var(--brand-primary)] shadow-sm group-hover:scale-110 transition-transform">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 group-hover:text-white transition-colors">Precision Lenses</h3>
              <p className="text-sm text-slate-500 group-hover:text-white/80 transition-colors">Tailored to your prescription.</p>
            </div>
          </div>

          {/* CTA Bento Card */}
          <div className="md:col-span-1 md:row-span-1 bg-[var(--brand-primary)] p-8 rounded-[var(--radius)] text-white flex flex-col justify-between hover:brightness-110 transition-all cursor-pointer relative overflow-hidden">
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            
            <h3 className="text-xl font-bold leading-tight relative z-10">
              Virtual Frame Finder
            </h3>
            <p className="text-white/90 text-sm relative z-10">
              Upload a photo to find the best match for your face shape.
            </p>
            <div className="flex items-center gap-2 font-bold text-sm underline mt-4 relative z-10">
              Try it Now 
              <span>→</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestProducts;