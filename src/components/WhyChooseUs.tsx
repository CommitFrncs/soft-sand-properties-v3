import React from 'react';
import { Shield, Lock, Layers, Cpu, ArrowRight } from 'lucide-react';
import { VALUE_PROPS } from '../data/properties';

interface WhyChooseUsProps {
  onOpenSchedule: () => void;
}

const ICONS = [Shield, Lock, Layers, Cpu];

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenSchedule }) => {
  return (
    <section id="why-choose-us" className="py-12 sm:py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-800 text-xs font-semibold mb-2 border border-blue-200">
            <Shield className="w-3.5 h-3.5 text-blue-600" />
            <span>INSTITUTIONAL DUE DILIGENCE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Engineered for Security, Transparency, and Zero Land Disputes.
          </h2>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Real estate in Ibadan can be plagued by unverified communal claims and unpaved roads. Soft Sands Properties operates strictly within master-planned, perimeter-secured gated estates with 100% verified legal sovereignty.
          </p>
        </div>

        {/* 4 Value Props Grid - each paired with a real photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PROPS.map((vp, index) => {
            const IconComponent = ICONS[index % ICONS.length];
            return (
              <div
                key={vp.id}
                className="rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300 transition-all duration-200 flex flex-col overflow-hidden group"
              >
                {/* Real Photo Header */}
                <div className="relative aspect-[16/10] bg-slate-200 overflow-hidden">
                  <img
                    src={vp.image}
                    alt={vp.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Category Badge & Icon */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-900/90 text-white backdrop-blur-xs">
                      {vp.badge}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shadow-xs">
                      <IconComponent className="w-3.5 h-3.5 text-blue-700" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1 leading-snug">
                      {vp.title}
                    </h3>
                    <p className="text-xs font-semibold text-blue-700 mb-2">
                      {vp.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {vp.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Fast Action */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm sm:text-base text-white">
              Planning to purchase from the diaspora or relocate to Ibadan?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Request title documentation verification reports or book an accompanied physical or live-video inspection.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenSchedule}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors shrink-0"
          >
            <span>Request Estate Inspection</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
