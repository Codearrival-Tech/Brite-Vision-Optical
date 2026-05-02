import React from 'react';
import { Eye, Glasses, Headphones, Truck, Smartphone, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: "Advanced Lens Technology",
    description: "Precision-engineered for clarity, durability, and ultimate visual comfort across all lighting conditions.",
    icon: <Eye className="w-10 h-10" />,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    title: "Fashion-Forward Designs",
    description: "Explore thousands of hand-picked frames from elite international designers and boutique brands.",
    icon: <Glasses className="w-10 h-10" />,
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    title: "Exceptional Support",
    description: "Enjoy 24/7 expert assistance, effortless returns, and style recommendations tailored to you.",
    icon: <Headphones className="w-10 h-10" />,
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  }
];

const trustItems = [
  {
    icon: <Truck className="w-6 h-6" />,
    label: "Free Shipping",
    description: "On all nationwide orders"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    label: "Virtual Try-On",
    description: "Try any frame instantly"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    label: "Lifetime Warranty",
    description: "Quality care for life"
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-10 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why <span className="text-[var(--brand-primary)]">Choose Us</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We combine clinical precision with high-end fashion to give you a vision experience that's as clear as it is stylish.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-center text-center p-8 lg:p-12 rounded-[32px] bg-white border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <div className={feature.iconColor}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Signals Row */}
        <div className="pt-10 border-t border-slate-200/60">
          <div className="flex flex-wrap justify-center md:justify-around gap-y-12 gap-x-8">
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-5 group cursor-default"
              >
                {/* Minimalist Icon Container */}
                <div className="w-14 h-14 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 transition-all duration-300 group-hover:bg-[var(--brand-primary)] group-hover:text-white group-hover:border-[var(--brand-primary)] group-hover:scale-110">
                  {item.icon}
                </div>

                <div className="flex flex-col text-left">
                  <h4 className="text-lg font-bold text-slate-900 tracking-tight transition-colors group-hover:text-[var(--brand-primary)]">
                    {item.label}
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">
                    {item.description}
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

export default WhyChooseUs;