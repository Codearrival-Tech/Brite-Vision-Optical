import React from 'react';

const steps = [
  {
    number: "01",
    title: "Browse Collection",
    description: "Explore our curated range of premium frames and designer sunglasses from the comfort of your home.",
    image: "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "Virtual Try-On",
    description: "Use our AI-powered tool to see exactly how each frame fits your face shape in real-time.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "Book Eye Test",
    description: "Schedule a comprehensive eye exam with our expert optometrists at your nearest boutique.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1000&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "Custom Fitting",
    description: "Receive your perfectly adjusted glasses with our signature 2-year quality guarantee.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1000&auto=format&fit=crop"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 font-heading">
            Effortless style. <span className="text-[var(--brand-primary)]">Tailored for you.</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Discover how we combine clinical expertise with premium fashion to redefine your vision experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              {/* Step Label */}
              <div className="mb-6 inline-flex items-center justify-center px-4 py-1 rounded-full bg-emerald-50 border border-[var(--brand-primary)]/20">
                <span className="text-xs font-bold text-[var(--brand-primary)] tracking-widest uppercase">
                  Step {step.number}
                </span>
              </div>

              {/* Text Content */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[var(--brand-primary)] transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>

              {/* Image Container with Bento-style Rounded Corners */}
              <div className="relative h-64 w-full overflow-hidden rounded-[var(--radius)] bg-slate-50 border border-slate-100 group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={step.image} 
                  alt={step.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Subtle light green overlay on hover */}
                <div className="absolute inset-0 bg-[var(--brand-primary)]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;