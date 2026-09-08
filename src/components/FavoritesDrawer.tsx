import React from 'react';
import { X, Trash2, Calendar, ArrowRight, Building } from 'lucide-react';
import { Property } from '../types';
import { formatPrice } from '../utils/format';

interface FavoritesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedProperties: Property[];
  onRemoveFavorite: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onScheduleInspection: (property: Property) => void;
  currency: 'NGN' | 'USD';
}

export const FavoritesDrawer: React.FC<FavoritesDrawerProps> = ({
  isOpen,
  onClose,
  savedProperties,
  onRemoveFavorite,
  onSelectProperty,
  onScheduleInspection,
  currency,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/50 backdrop-blur-xs">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="font-bold text-base text-slate-900">
              Shortlisted Gated Homes
            </h3>
            <p className="text-xs text-slate-500">
              {savedProperties.length} {savedProperties.length === 1 ? 'property' : 'properties'} saved
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {savedProperties.length > 0 ? (
            savedProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-xl border border-slate-200 p-3 flex gap-3 hover:border-slate-300 transition-all shadow-2xs"
              >
                <div 
                  className="w-20 h-20 rounded-lg overflow-hidden shrink-0 cursor-pointer bg-slate-100"
                  onClick={() => {
                    onClose();
                    onSelectProperty(property);
                  }}
                >
                  <img
                    src={property.mainImage}
                    alt={property.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <span className="text-xs font-mono font-bold text-slate-900">
                        {formatPrice(property.priceNaira, currency)}
                      </span>
                      <button
                        onClick={() => onRemoveFavorite(property.id)}
                        className="text-slate-400 hover:text-red-600 p-0.5"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 
                      onClick={() => {
                        onClose();
                        onSelectProperty(property);
                      }}
                      className="text-xs font-semibold text-slate-800 line-clamp-1 cursor-pointer hover:text-blue-700"
                    >
                      {property.title}
                    </h4>

                    <span className="text-[10px] text-slate-500 block truncate">
                      {property.estateName}, Ibadan
                    </span>
                  </div>

                  <div className="flex items-center gap-2 pt-1 border-t border-slate-100">
                    <button
                      onClick={() => {
                        onClose();
                        onSelectProperty(property);
                      }}
                      className="text-[11px] font-semibold text-blue-700 hover:underline"
                    >
                      View Specs
                    </button>
                    <span className="text-slate-300 text-[10px]">•</span>
                    <button
                      onClick={() => {
                        onClose();
                        onScheduleInspection(property);
                      }}
                      className="text-[11px] font-semibold text-slate-900 hover:text-blue-800 flex items-center gap-1"
                    >
                      <Calendar className="w-3 h-3 text-blue-600" />
                      Book Tour
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 text-slate-400 space-y-2">
              <Building className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs font-medium text-slate-600">No properties shortlisted yet</p>
              <p className="text-[11px] text-slate-400 max-w-xs mx-auto">
                Click the heart icon on any property card to save and compare verified homes in Ibadan.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        {savedProperties.length > 0 && (
          <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2">
            <button
              onClick={() => {
                onClose();
                onScheduleInspection(savedProperties[0]);
              }}
              className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-blue-900 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2"
            >
              <span>Schedule Inspection for Saved Homes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
