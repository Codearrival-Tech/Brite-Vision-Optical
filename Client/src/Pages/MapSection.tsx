import React from "react";
import { Navigation, Compass, Eye, ExternalLink } from "lucide-react";

const MapSection: React.FC = () => {
  return (
    <section className="pb-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider">
                Location
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Find us here
            </h2>
            <p className="text-slate-500 mt-2 max-w-md">
              Visit our showroom in Coimbatore for a personalized fitting
              session and professional eye consultation.
            </p>
          </div>

          <a
            href="https://maps.app.goo.gl/DWG5WfgYNb9Ji5CV7"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all shadow-sm"
          >
            <Navigation className="w-4 h-4 text-green-600" />
            Open in GPRS
          </a>
        </div>

        {/* Map Container */}
        <div className="relative group">
          {/* Decorative elements to give it a "Tech" feel */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-[25px] blur opacity-10 group-hover:opacity-20 transition duration-500"></div>

          <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-xl h-[550px]">
            {/* Map UI Overlays */}
            <div className="absolute top-6 right-6 z-10 hidden md:flex flex-col gap-3">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 w-64">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <Eye className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-slate-900 text-sm">
                    Brite Vision Optical
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <Compass className="w-3.5 h-3.5 mt-0.5 text-green-600" />
                    <span>Panruti, Cuddalore</span>
                  </div>
                  <div className="pt-2 flex gap-2 items-center">
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] text-green-700 font-medium uppercase">
                      Store Open Now
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Actual Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.8706945615313!2d79.54722467584635!3d11.774154039997217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54af5acf87333d%3A0x3213bbc8ff03ab67!2sR.K%20Bright%20Vision%20Optician!5e0!3m2!1sen!2sin!4v1777780398948!5m2!1sen!2sin"
              allowFullScreen
              className="w-full h-full border-0 grayscale-[0.2] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* Mobile "View Full Map" Trigger */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden">
              <button className="bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold flex items-center gap-2 shadow-2xl">
                <ExternalLink className="w-3.5 h-3.5" />
                View Full Map
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
