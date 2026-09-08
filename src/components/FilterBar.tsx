import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Home, 
  SlidersHorizontal, 
  X, 
  RotateCcw,
  Check
} from 'lucide-react';
import { FilterState, EstateLocation, PropertyType } from '../types';

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (newFilters: FilterState) => void;
  onResetFilters: () => void;
  totalMatches: number;
}

const LOCATIONS: { label: string; value: EstateLocation }[] = [
  { label: 'All Estates in Ibadan', value: 'All' },
  { label: 'Alalubosa GRA', value: 'Alalubosa GRA' },
  { label: 'Kolapo Ishola / Akobo', value: 'Kolapo Ishola Estate' },
  { label: 'Jericho GRA', value: 'Jericho GRA' },
  { label: 'Bodija Estate', value: 'Bodija Estate' },
  { label: 'Aerodrome Estate / Samonda', value: 'Aerodrome Estate' },
  { label: 'Oluyole Estate', value: 'Oluyole Estate' },
  { label: 'Carlton Gate Estate', value: 'Carlton Gate Estate' },
];

const PROPERTY_TYPES: { label: string; value: PropertyType }[] = [
  { label: 'All Property Types', value: 'All' },
  { label: 'Detached Duplex', value: 'Detached Duplex' },
  { label: 'Terrace Duplex', value: 'Terrace Duplex' },
  { label: 'Semi-Detached', value: 'Semi-Detached' },
  { label: 'Luxury Bungalow', value: 'Luxury Bungalow' },
  { label: 'Serviced Land', value: 'Serviced Land' },
];

const PRICE_RANGES = [
  { label: 'Any Price', min: 0, max: 1000000000 },
  { label: 'Under ₦80 Million', min: 0, max: 80000000 },
  { label: '₦80M – ₦120 Million', min: 80000000, max: 120000000 },
  { label: '₦120M – ₦180 Million', min: 120000000, max: 180000000 },
  { label: '₦180 Million & Above', min: 180000000, max: 1000000000 },
];

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  totalMatches,
}) => {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  // Count active non-default filters
  const activeFiltersCount = 
    (filters.location !== 'All' ? 1 : 0) +
    (filters.propertyType !== 'All' ? 1 : 0) +
    (filters.minPrice > 0 || filters.maxPrice < 1000000000 ? 1 : 0) +
    (filters.bedrooms !== 'any' ? 1 : 0) +
    (filters.searchQuery.trim() !== '' ? 1 : 0);

  const currentPriceRangeIndex = PRICE_RANGES.findIndex(
    (p) => p.min === filters.minPrice && p.max === filters.maxPrice
  );

  return (
    <>
      {/* Desktop & Tablet Search Bar */}
      <div 
        id="search-filter-bar"
        className="w-full bg-white rounded-xl border border-slate-300 shadow-lg shadow-slate-900/5 p-3 sm:p-4 text-slate-800"
      >
        {/* Mobile quick trigger button */}
        <div className="flex md:hidden items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search estate, bedrooms, features..."
              value={filters.searchQuery}
              onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
              className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMobileModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold shrink-0"
            aria-label="Open filter options"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {activeFiltersCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>

        {/* Desktop full inline filter layout */}
        <div className="hidden md:flex flex-col gap-3">
          <div className="grid grid-cols-12 gap-3 items-center">
            {/* Search Keyword */}
            <div className="col-span-4 relative">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Keyword or Estate
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="e.g. Alalubosa, Pool, 5 Bed, C of O"
                  value={filters.searchQuery}
                  onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 hover:bg-slate-100/70 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
                />
              </div>
            </div>

            {/* Estate Location */}
            <div className="col-span-3">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Gated Estate Location
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={filters.location}
                  onChange={(e) => onFilterChange({ ...filters, location: e.target.value as EstateLocation })}
                  className="w-full pl-9 pr-8 py-2 text-sm bg-slate-50 hover:bg-slate-100/70 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800 font-medium transition-colors appearance-none cursor-pointer"
                >
                  {LOCATIONS.map((loc) => (
                    <option key={loc.value} value={loc.value}>
                      {loc.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Property Type */}
            <div className="col-span-3">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Property Type
              </label>
              <div className="relative">
                <Home className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={filters.propertyType}
                  onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value as PropertyType })}
                  className="w-full pl-9 pr-8 py-2 text-sm bg-slate-50 hover:bg-slate-100/70 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800 font-medium transition-colors appearance-none cursor-pointer"
                >
                  {PROPERTY_TYPES.map((pt) => (
                    <option key={pt.value} value={pt.value}>
                      {pt.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div className="col-span-2">
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Price Budget
              </label>
              <select
                value={currentPriceRangeIndex !== -1 ? currentPriceRangeIndex : 0}
                onChange={(e) => {
                  const selected = PRICE_RANGES[Number(e.target.value)];
                  onFilterChange({
                    ...filters,
                    minPrice: selected.min,
                    maxPrice: selected.max,
                  });
                }}
                className="w-full px-3 py-2 text-sm bg-slate-50 hover:bg-slate-100/70 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800 font-medium transition-colors cursor-pointer"
              >
                {PRICE_RANGES.map((pr, idx) => (
                  <option key={idx} value={idx}>
                    {pr.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Sub-row: Bedrooms & Reset */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-500 font-medium">Bedrooms:</span>
              {(['any', 3, 4, 5] as const).map((b) => {
                const isSelected = filters.bedrooms === b;
                return (
                  <button
                    key={b}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, bedrooms: b })}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-colors ${
                      isSelected
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {b === 'any' ? 'Any' : `${b}+ Beds`}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-slate-600 font-medium">
                <span className="font-bold text-slate-900">{totalMatches}</span> verified estate {totalMatches === 1 ? 'home' : 'homes'}
              </span>

              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={onResetFilters}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-900 font-medium transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Clear filters</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Filters Slide-over / Modal */}
      {isMobileModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-0 sm:p-4">
          <div className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-xl shadow-2xl p-5 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4 text-slate-800" />
                <h3 className="font-bold text-base text-slate-900">Filter Gated Properties</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Keyword */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Search Keywords</label>
              <input
                type="text"
                placeholder="e.g. Alalubosa, swimming pool, C of O"
                value={filters.searchQuery}
                onChange={(e) => onFilterChange({ ...filters, searchQuery: e.target.value })}
                className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Estate Location</label>
              <select
                value={filters.location}
                onChange={(e) => onFilterChange({ ...filters, location: e.target.value as EstateLocation })}
                className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200"
              >
                {LOCATIONS.map((l) => (
                  <option key={l.value} value={l.value}>{l.label}</option>
                ))}
              </select>
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Property Type</label>
              <select
                value={filters.propertyType}
                onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value as PropertyType })}
                className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt.value} value={pt.value}>{pt.label}</option>
                ))}
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Price Range</label>
              <select
                value={currentPriceRangeIndex !== -1 ? currentPriceRangeIndex : 0}
                onChange={(e) => {
                  const selected = PRICE_RANGES[Number(e.target.value)];
                  onFilterChange({
                    ...filters,
                    minPrice: selected.min,
                    maxPrice: selected.max,
                  });
                }}
                className="w-full px-3 py-2.5 text-sm bg-slate-50 rounded-lg border border-slate-200"
              >
                {PRICE_RANGES.map((pr, idx) => (
                  <option key={idx} value={idx}>{pr.label}</option>
                ))}
              </select>
            </div>

            {/* Bedrooms */}
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-2">Bedrooms</label>
              <div className="grid grid-cols-4 gap-2">
                {(['any', 3, 4, 5] as const).map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => onFilterChange({ ...filters, bedrooms: b })}
                    className={`py-2 rounded-lg text-xs font-bold text-center border ${
                      filters.bedrooms === b
                        ? 'bg-slate-900 text-white border-slate-900'
                        : 'bg-white text-slate-700 border-slate-200'
                    }`}
                  >
                    {b === 'any' ? 'Any' : `${b}+ Beds`}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-3 border-t border-slate-200 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  onResetFilters();
                  setIsMobileModalOpen(false);
                }}
                className="flex-1 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-xs"
              >
                Reset All
              </button>
              <button
                type="button"
                onClick={() => setIsMobileModalOpen(false)}
                className="flex-1 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs flex items-center justify-center gap-1"
              >
                <Check className="w-4 h-4 text-blue-400" />
                <span>Show {totalMatches} Results</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
