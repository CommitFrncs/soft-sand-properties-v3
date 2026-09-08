import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Zap } from 'lucide-react';
import { HERO_IMAGE } from '../data/properties';
import { FilterBar } from './FilterBar';
import { FilterState } from '../types';

interface HeroProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  totalMatches: number;
}

export const Hero: React.FC<HeroProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalMatches,
}) => {
  return (
    <section className="relative pt-4 pb-8 sm:pt-6 sm:pb-10 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Compact Hero Banner with Real Photo */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-300 bg-slate-900 shadow-sm min-h-[300px] sm:min-h-[360px] flex items-center">
          {/* Real High-Quality Photo Background */}
          <img
            src={HERO_IMAGE}
            alt="Modern gated estate residence in Ibadan Nigeria"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover object-center brightness-[0.42] contrast-[1.08]"
          />

          {/* Subtle gradient vignette for sharp text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-900/40" />

          {/* Hero Content */}
          <div className="relative z-10 max-w-3xl p-6 sm:p-10 lg:p-12 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-4 backdrop-blur-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>GATED ESTATES PROPERTY PLATFORM • IBADAN</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight leading-tight mb-3">
              Buy Verified Homes in Ibadan’s Most Secure Gated Estates.
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-6 font-normal">
              Direct access to contemporary duplexes, modern bungalows, and serviced land in Alalubosa GRA, Kolapo Ishola, Jericho, and Aerodrome. 100% verified legal titles with zero customary disputes.
            </p>

            {/* Quick trust pill badges */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                C of O / Gov. Consent Titles
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                24/7 Armed Guard Security
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Zero Omonile Encroachment
              </span>
            </div>
          </div>
        </div>

        {/* Prominent Search / Filter Bar positioned overlapping/directly below */}
        <div className="-mt-6 sm:-mt-8 relative z-20 px-2 sm:px-4">
          <FilterBar
            filters={filters}
            onFilterChange={onFilterChange}
            onResetFilters={onResetFilters}
            totalMatches={totalMatches}
          />
        </div>
      </div>
    </section>
  );
};
