import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I book an eye test at home?",
      answer: "You can easily schedule a professional eye check-up through our 'Eye Test' toggle in the contact section. Our certified optometrists will visit your home with advanced equipment to ensure an accurate prescription."
    },
    {
      question: "What is your return policy for prescription glasses?",
      answer: "We offer a 14-day 'No Questions Asked' return policy. If you aren't satisfied with the fit or the vision clarity, we will provide a full refund or a free frame replacement."
    },
    {
      question: "How long does it take for my glasses to be delivered?",
      answer: "Standard prescription glasses usually take 3-5 business days. Premium lenses or complex prescriptions may take up to 7-10 days as they undergo rigorous quality checks in our lab."
    },
    {
      question: "Do you provide a warranty on frames and lenses?",
      answer: "Yes, all our frames and lenses come with a 1-year limited warranty against manufacturing defects. This includes coating peels or frame breakage under normal usage conditions."
    },
    {
      question: "Can I try frames virtually before buying?",
      answer: "Absolutely! Use our 'Virtual Try-On' feature on any product page. It uses your camera to map your face and show you exactly how the frames will look on you in real-time."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 mb-6">
            <HelpCircle size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-[var(--brand-primary)]">Questions</span>
          </h2>
          <p className="text-slate-500 font-bold max-w-lg mx-auto leading-relaxed">
            Everything you need to know about our eyewear, eye tests, and professional services.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group border rounded-[32px] transition-all duration-300 ${
                  isOpen 
                  ? 'bg-white border-[var(--brand-primary)] shadow-xl shadow-emerald-900/5' 
                  : 'bg-slate-50 border-transparent hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-8 text-left outline-none"
                >
                  <span className={`text-lg font-bold tracking-tight transition-colors ${isOpen ? 'text-[var(--brand-primary)]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 ml-4 p-2 rounded-xl transition-all ${isOpen ? 'bg-[var(--brand-primary)] text-white rotate-0' : 'bg-white text-slate-400 rotate-90'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8">
                    <div className="h-[2px] w-12 bg-emerald-100 mb-6" />
                    <p className="text-slate-500 font-medium leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact CTA */}
        <div className="mt-16 p-8 rounded-[40px] bg-[var(--brand-primary)] text-center text-white shadow">
          <h4 className="text-xl font-bold mb-2">Still have questions?</h4>
          <p className="text-emerald-50 mb-6 font-medium">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-black hover:bg-emerald-50 transition-colors">
            Get In Touch
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;