import React from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';

interface FooterProps {
  onOpenSchedule: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSchedule }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800">
      {/* Top Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 border-b border-slate-800">
        <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-blue-400 font-semibold mb-2 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>TRANSPARENT PROPTECH VERIFICATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to acquire verified property in an Ibadan gated estate?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Speak directly with our legal advisory & estate acquisition team. No intermediaries, no inflated markups, and guaranteed clear titles.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/2348038924100?text=Hello%20Soft%20Sands%20Properties,%20I%20would%20like%20to%20inquire%20about%20available%20gated%20estate%20properties%20in%20Ibadan."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>

            <button
              onClick={onOpenSchedule}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold transition-colors shadow-xs"
            >
              <span>Schedule Inspection</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
                <Building2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-white">SOFT SANDS</span>
                <span className="text-[10px] ml-1.5 font-semibold px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  PROPERTIES
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The tech-forward property platform specializing exclusively in vetted, perimeter-secured gated residential estates across Ibadan, Oyo State, Nigeria. 
            </p>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CAC Registered Entity: RC 1894022</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>REDAN Accredited Member (Oyo State Chapter)</span>
              </div>
            </div>
          </div>

          {/* Featured Estates */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Ibadan Estates
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#properties-section" className="hover:text-white transition-colors">Alalubosa GRA</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Kolapo Ishola / Akobo</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Jericho GRA Enclaves</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Aerodrome Estate, Samonda</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Old Bodija Extension</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Oluyole Parkland Estate</a></li>
              <li><a href="#properties-section" className="hover:text-white transition-colors">Carlton Gate Phase 1 & 2</a></li>
            </ul>
          </div>

          {/* Legal Due Diligence */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Verification & Titles
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Governor's Consent Audits</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">C of O Document Authentication</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Cadastral Survey Charting</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Diaspora Escrow Protocol</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Zero Omonile Indemnity</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-200">
              Ibadan Office & Contact
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Plot 14, Commercial Avenue, Ring Road / Secretariat Road, Bodija, Ibadan, Oyo State, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="font-mono text-slate-200">+234 803 892 4100</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>info@softsandsproperties.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM WAT</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & social */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Soft Sands Properties Limited. All rights reserved. RC 1894022.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/2348038924100" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              WhatsApp
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              YouTube
            </a>
            <span className="text-slate-700">•</span>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-slate-400 hover:text-blue-300 transition-colors"
            >
              X / Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
