import React from 'react';
import { 
  Bed, 
  Bath, 
  Maximize2, 
  ShieldCheck, 
  MapPin, 
  Heart, 
  Calendar, 
  CheckCircle,
  Eye,
  Building
} from 'lucide-react';
import { Property } from '../types';
import { formatPrice } from '../utils/format';

interface PropertyCardProps {
  property: Property;
  currency: 'NGN' | 'USD';
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onScheduleInspection: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  currency,
  isSaved,
  onToggleSave,
  onSelectProperty,
  onScheduleInspection,
}) => {
  return (
    <article 
      id={`property-card-${property.id}`}
      className="group bg-white rounded-xl border border-slate-200 hover:border-slate-400 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden text-slate-800"
    >
      {/* Real Exterior Photo Container */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer" onClick={() => onSelectProperty(property)}>
        <img
          src={property.mainImage}
          alt={property.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-xs text-white text-[11px] font-semibold tracking-wide shadow-xs">
              <Building className="w-3 h-3 text-blue-400" />
              <span>{property.estateName}</span>
            </span>

            {property.verified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-950/85 backdrop-blur-xs text-emerald-300 text-[11px] font-semibold tracking-wide border border-emerald-500/30">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>Verified</span>
              </span>
            )}
          </div>

          {/* Favorite Toggle Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(property.id);
            }}
            className={`pointer-events-auto p-1.5 rounded-full backdrop-blur-xs transition-colors shadow-xs ${
              isSaved
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-slate-900/60 text-white hover:bg-slate-900'
            }`}
            title={isSaved ? 'Remove from saved' : 'Save property'}
            aria-label="Save property to favorites"
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Bottom image overlay stats */}
        <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-xs text-slate-200">
            {property.deliveryStatus}
          </span>
          <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900/80 backdrop-blur-xs text-slate-200">
            {property.galleryImages.length} Photos
          </span>
        </div>
      </div>

      {/* Card Body with Dense, Organized Specifications */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Price Header */}
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="text-xl font-bold tracking-tight text-slate-900 font-mono">
              {formatPrice(property.priceNaira, currency)}
            </span>
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
              {property.propertyType}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProperty(property)}
            className="text-sm font-semibold text-slate-900 hover:text-blue-700 transition-colors line-clamp-1 cursor-pointer mb-1.5"
            title={property.title}
          >
            {property.title}
          </h3>

          {/* Location with Pin */}
          <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{property.estateName}, {property.locationArea}, Ibadan</span>
          </div>

          {/* Key Specs Grid - Information Dense */}
          <div className="grid grid-cols-3 gap-1.5 py-2 px-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 mb-3">
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="font-semibold text-slate-900">{property.bedrooms > 0 ? property.bedrooms : 'Plot'}</span>
              <span className="text-slate-500 text-[11px]">{property.bedrooms > 0 ? 'Beds' : 'Land'}</span>
            </div>
            <div className="flex items-center gap-1.5 border-x border-slate-200 px-1.5">
              <Bath className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="font-semibold text-slate-900">{property.bathrooms}</span>
              <span className="text-slate-500 text-[11px]">Baths</span>
            </div>
            <div className="flex items-center gap-1.5 pl-1">
              <Maximize2 className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span className="font-semibold text-slate-900">{property.sizeSqm}</span>
              <span className="text-slate-500 text-[11px]">m²</span>
            </div>
          </div>

          {/* Title & Security Micro-Tags */}
          <div className="flex items-center justify-between text-[11px] text-slate-600 mb-3 px-0.5">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-3 h-3 text-emerald-600" />
              <span className="font-medium text-slate-700 truncate max-w-[170px]" title={property.titleType}>
                {property.titleType}
              </span>
            </div>
            <span className="text-slate-400 text-[10px]">
              Plot: {property.plotSizeSqm}m²
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="pt-2 border-t border-slate-100 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onSelectProperty(property)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Full Specs</span>
          </button>

          <button
            type="button"
            onClick={() => onScheduleInspection(property)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-xs font-semibold transition-colors shadow-2xs"
          >
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            <span>Inspect</span>
          </button>
        </div>
      </div>
    </article>
  );
};
