import React from 'react';
import { TRUST_STATS, IBADAN_ESTATE_ZONES } from '../data/properties';
import { Shield, CheckCircle, ExternalLink, MapPin } from 'lucide-react';

interface TrustStatsProps {
  onSelectEstateLocation: (estateName: string) => void;
}

export const TrustStats: React.FC<TrustStatsProps> = ({ onSelectEstateLocation }) => {
  return (
    <section id="trust-stats" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main 4 Stats Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 mb-12">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
              VERIFIED TRACK RECORD • IBADAN RESIDENTIAL
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2">
              Trusted by 380+ Homeowners & Diaspora Buyers
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {TRUST_STATS.map((stat, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 sm:px-4 text-center first:pt-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-mono tracking-tight text-blue-950">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-blue-700" />
              Real Estate Developers Association of Nigeria (REDAN)
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              CAC Registered (RC: 1894022)
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              Oyo State Ministry of Lands Vetted
            </span>
          </div>
        </div>

        {/* Ibadan Estate Zones Quick Directory */}
        <div id="estate-zones" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                LOCAL MARKET INTELLIGENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Premier Gated Estate Corridors in Ibadan
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Overview of security protocols, pricing benchmarks, and infrastructure maturity.
              </p>
            </div>
            <p className="text-xs text-slate-400 mt-2 sm:mt-0">
              Click any zone to filter available properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {IBADAN_ESTATE_ZONES.map((zone, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectEstateLocation(zone.name.includes('Alalubosa') ? 'Alalubosa GRA' : 
                                        zone.name.includes('Kolapo') ? 'Kolapo Ishola Estate' :
                                        zone.name.includes('Jericho') ? 'Jericho GRA' :
                                        zone.name.includes('Bodija') ? 'Bodija Estate' :
                                        zone.name.includes('Aerodrome') ? 'Aerodrome Estate' : 'All');
                  const el = document.getElementById('properties-section');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-400 p-4 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-700 transition-colors flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600" />
                      {zone.name}
                    </h4>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                      {zone.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {zone.description}
                  </p>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Avg. Range</span>
                    <span className="font-bold text-slate-900 font-mono text-[11px]">{zone.avgPrice}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-medium">Security</span>
                    <span className="font-semibold text-emerald-700 text-[11px]">{zone.securityLevel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
