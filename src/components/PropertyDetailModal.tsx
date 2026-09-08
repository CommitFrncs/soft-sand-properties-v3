import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  MapPin, 
  Bed, 
  Bath, 
  Maximize2, 
  Calendar, 
  CheckCircle2, 
  Phone, 
  MessageSquare, 
  FileCheck, 
  Building,
  Heart,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Property } from '../types';
import { formatPrice } from '../utils/format';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  currency: 'NGN' | 'USD';
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onScheduleInspection: (property: Property) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  currency,
  isSaved,
  onToggleSave,
  onScheduleInspection,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const currentImage = property.galleryImages[activeImageIndex] || property.mainImage;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-xs p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded">
              REF: {property.id.toUpperCase()}
            </span>
            <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
              {property.estateName}
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">• Ibadan, Nigeria</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-1.5 rounded-lg border transition-colors ${
                isSaved 
                  ? 'bg-red-50 border-red-200 text-red-600' 
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
              title={isSaved ? 'Remove from saved' : 'Save property'}
            >
              <Heart className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Gallery with Real High-Resolution Photos */}
          <div className="space-y-2">
            <div className="relative aspect-[16/9] sm:aspect-[16/9] bg-slate-900 rounded-xl overflow-hidden">
              <img
                src={currentImage}
                alt={`${property.title} view ${activeImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />

              {/* Navigation arrows */}
              {property.galleryImages.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : property.galleryImages.length - 1))}
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
                    aria-label="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIndex((prev) => (prev < property.galleryImages.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white transition-colors"
                    aria-label="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-slate-900/80 text-white text-xs font-mono font-medium">
                {activeImageIndex + 1} / {property.galleryImages.length}
              </div>
            </div>

            {/* Thumbnail Row */}
            {property.galleryImages.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {property.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      activeImageIndex === idx ? 'border-blue-600 scale-98' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt="thumbnail"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pricing & Primary Title */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {property.deliveryStatus}
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {property.propertyType}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {property.title}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{property.estateName}, {property.locationArea}, Ibadan, Oyo State</span>
              </div>
            </div>

            <div className="sm:text-right shrink-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                {formatPrice(property.priceNaira, currency)}
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Annual Service Charge: {formatPrice(property.serviceChargeAnnualNaira, currency)}
              </p>
            </div>
          </div>

          {/* Core Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Bedrooms</span>
              <span className="text-base font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Bed className="w-4 h-4 text-blue-600" />
                {property.bedrooms > 0 ? `${property.bedrooms} Ensuite` : 'N/A (Land)'}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Bathrooms</span>
              <span className="text-base font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Bath className="w-4 h-4 text-blue-600" />
                {property.bathrooms} Baths
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Building Area</span>
              <span className="text-base font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Maximize2 className="w-4 h-4 text-blue-600" />
                {property.sizeSqm} m²
              </span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Plot Land Size</span>
              <span className="text-base font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Building className="w-4 h-4 text-blue-600" />
                {property.plotSizeSqm} m²
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-bold text-sm text-slate-900 mb-1.5">Overview</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Legal Due Diligence Box */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-4 h-4 text-blue-700" />
              <h4 className="font-bold text-xs sm:text-sm text-blue-950">
                Verified Title & Legal Sovereign Verification
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-900">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Primary Document: <strong>{property.titleType}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Registered Survey Plan Charted at Ministry</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Zero Customary or Communal Claims (No Omonile)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>Immediate Conveyance & Deed of Assignment</span>
              </div>
            </div>
          </div>

          {/* Two-column features & estate security */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                Property Amenities & Specifications
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {property.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 mb-2">
                Estate Gated Security & Infrastructure
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {property.estateSecurity.map((sec, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Assigned Agent Contact Card */}
          <div className="bg-slate-900 text-white p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm">
                {property.agentContact.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-sm text-white">{property.agentContact.name}</p>
                <p className="text-xs text-slate-300">{property.agentContact.role} • Soft Sands Properties</p>
                <p className="text-xs font-mono text-blue-300">{property.agentContact.phone}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/${property.agentContact.whatsapp}?text=Hello%20Soft%20Sands%20Properties,%20I%20am%20interested%20in%20inspecting%20${encodeURIComponent(property.title)}%20(${property.id})%20in%20${encodeURIComponent(property.estateName)}.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${property.agentContact.phone}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors border border-slate-700"
              >
                <Phone className="w-4 h-4" />
                <span>Call Agent</span>
              </a>

              <button
                onClick={() => {
                  onClose();
                  onScheduleInspection(property);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Inspection</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
