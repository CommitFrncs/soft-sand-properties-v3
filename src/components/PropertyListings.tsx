import React from 'react';
import { 
  ArrowUpDown, 
  LayoutGrid, 
  List, 
  MapPin, 
  X, 
  ShieldCheck, 
  SlidersHorizontal 
} from 'lucide-react';
import { Property, FilterState, EstateLocation } from '../types';
import { PropertyCard } from './PropertyCard';

interface PropertyListingsProps {
  properties: Property[];
  allProperties: Property[];
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  currency: 'NGN' | 'USD';
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onSelectProperty: (property: Property) => void;
  onScheduleInspection: (property: Property) => void;
  viewMode: 'grid' | 'list';
  onToggleViewMode: (mode: 'grid' | 'list') => void;
}

const QUICK_ESTATE_TABS: { label: string; value: EstateLocation }[] = [
  { label: 'All Estates', value: 'All' },
  { label: 'Alalubosa GRA', value: 'Alalubosa GRA' },
  { label: 'Kolapo Ishola / Akobo', value: 'Kolapo Ishola Estate' },
  { label: 'Jericho GRA', value: 'Jericho GRA' },
  { label: 'Bodija Estate', value: 'Bodija Estate' },
  { label: 'Aerodrome Estate', value: 'Aerodrome Estate' },
];

export const PropertyListings: React.FC<PropertyListingsProps> = ({
  properties,
  allProperties,
  filters,
  onFilterChange,
  onResetFilters,
  currency,
  savedIds,
  onToggleSave,
  onSelectProperty,
  onScheduleInspection,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <section id="properties-section" className="py-6 sm:py-8 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Quick Estate Filter Chips Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
          <span className="text-xs font-semibold text-slate-500 shrink-0 uppercase tracking-wider">
            Quick Select:
          </span>
          {QUICK_ESTATE_TABS.map((tab) => {
            const isSelected = filters.location === tab.value;
            const count = tab.value === 'All' 
              ? allProperties.length 
              : allProperties.filter(p => p.locationArea === tab.value).length;

            return (
              <button
                key={tab.value}
                type="button"
                onClick={() => onFilterChange({ ...filters, location: tab.value })}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors border ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-slate-800 text-blue-300' : 'bg-slate-100 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Controls Header Above Grid: Results count, Active Filters, Sort & View Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-200">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>Verified Estate Properties</span>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                {properties.length} Available
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Strictly secured gated residential estates with audited land titles in Ibadan.
            </p>
          </div>

          {/* Right Controls: Sort + View Mode */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400 font-medium">Sort:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => onFilterChange({ ...filters, sortBy: e.target.value as FilterState['sortBy'] })}
                className="bg-transparent font-semibold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="size-desc">Largest Floor Area</option>
                <option value="newest">Latest Added</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center border border-slate-200 rounded-lg bg-white p-0.5">
              <button
                type="button"
                onClick={() => onToggleViewMode('grid')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid View (3 columns)"
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onToggleViewMode('list')}
                className={`p-1.5 rounded text-xs transition-colors ${
                  viewMode === 'list' ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="List View"
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Active Filters Tag Pills */}
        {(filters.location !== 'All' || 
          filters.propertyType !== 'All' || 
          filters.bedrooms !== 'any' || 
          filters.minPrice > 0 || 
          filters.maxPrice < 1000000000 || 
          filters.searchQuery) && (
          <div className="flex items-center gap-2 flex-wrap mb-4 text-xs">
            <span className="text-slate-400 font-medium">Applied Filters:</span>
            {filters.location !== 'All' && (
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-medium">
                Location: {filters.location}
                <button onClick={() => onFilterChange({ ...filters, location: 'All' })} className="text-slate-400 hover:text-slate-700">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.propertyType !== 'All' && (
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-medium">
                Type: {filters.propertyType}
                <button onClick={() => onFilterChange({ ...filters, propertyType: 'All' })} className="text-slate-400 hover:text-slate-700">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.bedrooms !== 'any' && (
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-medium">
                {filters.bedrooms}+ Bedrooms
                <button onClick={() => onFilterChange({ ...filters, bedrooms: 'any' })} className="text-slate-400 hover:text-slate-700">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.searchQuery && (
              <span className="inline-flex items-center gap-1 bg-white border border-slate-200 text-slate-800 px-2 py-0.5 rounded-md font-medium">
                "{filters.searchQuery}"
                <button onClick={() => onFilterChange({ ...filters, searchQuery: '' })} className="text-slate-400 hover:text-slate-700">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            <button
              type="button"
              onClick={onResetFilters}
              className="text-blue-700 hover:underline font-semibold text-xs ml-1"
            >
              Reset all
            </button>
          </div>
        )}

        {/* Property Grid: 3 columns on desktop, tighter spacing, information dense */}
        {properties.length > 0 ? (
          <div 
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5'
                : 'flex flex-col gap-4'
            }
          >
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                currency={currency}
                isSaved={savedIds.includes(property.id)}
                onToggleSave={onToggleSave}
                onSelectProperty={onSelectProperty}
                onScheduleInspection={onScheduleInspection}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-white rounded-xl border border-slate-200 p-10 text-center max-w-md mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-3 text-slate-500">
              <SlidersHorizontal className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900 mb-1">No Matching Gated Properties</h3>
            <p className="text-xs text-slate-500 mb-4 leading-relaxed">
              We couldn't find properties matching your current criteria. Try adjusting your price range, estate location, or bedroom count.
            </p>
            <button
              type="button"
              onClick={onResetFilters}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-blue-900 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
