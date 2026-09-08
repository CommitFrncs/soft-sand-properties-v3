import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Heart, 
  Menu, 
  X, 
  ShieldCheck, 
  MapPin, 
  ArrowRight 
} from 'lucide-react';

interface HeaderProps {
  currency: 'NGN' | 'USD';
  onToggleCurrency: () => void;
  savedCount: number;
  onOpenFavorites: () => void;
  onOpenSchedule: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onToggleCurrency,
  savedCount,
  onOpenFavorites,
  onOpenSchedule,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top micro-bar for trust & location */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Ibadan, Oyo State, Nigeria
            </span>
            <span className="hidden sm:inline-block text-slate-500">•</span>
            <span className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Verified Gated Estates Only
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href="tel:+2348038924100" 
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-blue-400" />
              <span className="font-mono text-slate-200">+234 803 892 4100</span>
            </a>
            <div className="flex items-center border border-slate-700 rounded px-1.5 py-0.5 bg-slate-800/80">
              <button
                onClick={onToggleCurrency}
                className="text-[11px] font-semibold text-slate-200 hover:text-blue-400 transition-colors flex items-center gap-1"
                title="Switch displayed currency"
              >
                <span className="text-slate-400">CURRENCY:</span>
                <span className="text-blue-400 font-mono">{currency}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold shadow-sm group-hover:bg-blue-900 transition-colors">
            <Building2 className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-lg tracking-tight text-slate-900">SOFT SANDS</span>
              <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-200">
                PROPERTIES
              </span>
            </div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
              Gated Estates • Ibadan
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
          <a href="#properties-section" className="hover:text-slate-900 transition-colors">
            Available Properties
          </a>
          <a href="#why-choose-us" className="hover:text-slate-900 transition-colors">
            Why Choose Us
          </a>
          <a href="#estate-zones" className="hover:text-slate-900 transition-colors">
            Ibadan Estate Zones
          </a>
          <a href="#trust-stats" className="hover:text-slate-900 transition-colors">
            Performance & Trust
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Saved properties button */}
          <button
            onClick={onOpenFavorites}
            className="relative p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors"
            title="Saved properties"
            aria-label="View saved properties"
          >
            <Heart className="w-4 h-4 text-slate-700" />
            {savedCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-blue-700 text-white text-[10px] font-bold flex items-center justify-center">
                {savedCount}
              </span>
            )}
          </button>

          {/* Schedule Inspection Button */}
          <button
            onClick={onOpenSchedule}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-sm font-semibold shadow-sm transition-all active:scale-98"
          >
            <span>Book Inspection</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a 
            href="#properties-section" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-slate-800 font-medium hover:bg-slate-50"
          >
            Available Properties
          </a>
          <a 
            href="#why-choose-us" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-slate-800 font-medium hover:bg-slate-50"
          >
            Why Choose Us
          </a>
          <a 
            href="#estate-zones" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-slate-800 font-medium hover:bg-slate-50"
          >
            Ibadan Estate Zones
          </a>
          <a 
            href="#trust-stats" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-slate-800 font-medium hover:bg-slate-50"
          >
            Performance & Trust
          </a>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 text-white text-center font-medium text-sm"
            >
              Book Estate Inspection
            </button>
            <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-1">
              <span>Currency:</span>
              <button 
                onClick={onToggleCurrency}
                className="font-bold text-blue-700 border border-slate-200 px-2 py-1 rounded"
              >
                {currency} (Click to switch)
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
