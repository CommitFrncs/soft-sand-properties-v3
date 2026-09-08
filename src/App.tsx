import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PropertyListings } from './components/PropertyListings';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustStats } from './components/TrustStats';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { ScheduleInspectionModal } from './components/ScheduleInspectionModal';
import { FavoritesDrawer } from './components/FavoritesDrawer';
import { Footer } from './components/Footer';
import { PROPERTIES_DATA } from './data/properties';
import { Property, FilterState, EstateLocation } from './types';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  location: 'All',
  propertyType: 'All',
  minPrice: 0,
  maxPrice: 1000000000,
  bedrooms: 'any',
  sortBy: 'recommended',
};

export default function App() {
  const [currency, setCurrency] = useState<'NGN' | 'USD'>('NGN');
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Selected Property for Modal
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Saved Properties state (persisted in localStorage)
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('soft_sands_saved_ids');
      return stored ? JSON.parse(stored) : ['ssp-001'];
    } catch {
      return ['ssp-001'];
    }
  });

  // Modal controls
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [scheduleProperty, setScheduleProperty] = useState<Property | null>(null);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

  // Sync savedIds to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('soft_sands_saved_ids', JSON.stringify(savedIds));
    } catch {
      // ignore
    }
  }, [savedIds]);

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenSchedule = (property?: Property) => {
    if (property) {
      setScheduleProperty(property);
    } else {
      setScheduleProperty(null);
    }
    setIsScheduleOpen(true);
  };

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    return PROPERTIES_DATA.filter((item) => {
      // Search query filter
      if (filters.searchQuery.trim()) {
        const query = filters.searchQuery.toLowerCase();
        const matchesQuery = 
          item.title.toLowerCase().includes(query) ||
          item.estateName.toLowerCase().includes(query) ||
          item.locationArea.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.titleType.toLowerCase().includes(query) ||
          item.features.some(f => f.toLowerCase().includes(query));
        if (!matchesQuery) return false;
      }

      // Location filter
      if (filters.location !== 'All') {
        if (item.locationArea !== filters.location) return false;
      }

      // Property type filter
      if (filters.propertyType !== 'All') {
        if (item.propertyType !== filters.propertyType) return false;
      }

      // Price filter
      if (item.priceNaira < filters.minPrice || item.priceNaira > filters.maxPrice) {
        return false;
      }

      // Bedroom filter
      if (filters.bedrooms !== 'any') {
        if (item.bedrooms < filters.bedrooms) return false;
      }

      return true;
    }).sort((a, b) => {
      if (filters.sortBy === 'price-asc') {
        return a.priceNaira - b.priceNaira;
      }
      if (filters.sortBy === 'price-desc') {
        return b.priceNaira - a.priceNaira;
      }
      if (filters.sortBy === 'size-desc') {
        return b.sizeSqm - a.sizeSqm;
      }
      if (filters.sortBy === 'newest') {
        return b.id.localeCompare(a.id);
      }
      // 'recommended' default: featured first, then price
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [filters]);

  const savedPropertiesList = useMemo(() => {
    return PROPERTIES_DATA.filter((p) => savedIds.includes(p.id));
  }, [savedIds]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <Header
        currency={currency}
        onToggleCurrency={() => setCurrency((c) => (c === 'NGN' ? 'USD' : 'NGN'))}
        savedCount={savedIds.length}
        onOpenFavorites={() => setIsFavoritesOpen(true)}
        onOpenSchedule={() => handleOpenSchedule()}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Compact Hero with prominent search filter bar */}
        <Hero
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={() => setFilters(INITIAL_FILTERS)}
          totalMatches={filteredProperties.length}
        />

        {/* Property Listings Grid directly below the hero */}
        <PropertyListings
          properties={filteredProperties}
          allProperties={PROPERTIES_DATA}
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={() => setFilters(INITIAL_FILTERS)}
          currency={currency}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onScheduleInspection={(prop) => handleOpenSchedule(prop)}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
        />

        {/* Why Choose Us Section with real photos */}
        <WhyChooseUs onOpenSchedule={() => handleOpenSchedule()} />

        {/* Trust Stats & Estate Corridor Guides */}
        <TrustStats
          onSelectEstateLocation={(estateLoc) => {
            setFilters((prev) => ({
              ...prev,
              location: estateLoc as EstateLocation,
            }));
          }}
        />
      </main>

      {/* Footer */}
      <Footer onOpenSchedule={() => handleOpenSchedule()} />

      {/* Property Details Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        currency={currency}
        isSaved={selectedProperty ? savedIds.includes(selectedProperty.id) : false}
        onToggleSave={handleToggleSave}
        onScheduleInspection={(prop) => {
          setSelectedProperty(null);
          handleOpenSchedule(prop);
        }}
      />

      {/* Schedule Inspection Modal */}
      <ScheduleInspectionModal
        isOpen={isScheduleOpen}
        onClose={() => {
          setIsScheduleOpen(false);
          setScheduleProperty(null);
        }}
        selectedProperty={scheduleProperty}
        allProperties={PROPERTIES_DATA}
      />

      {/* Shortlisted Favorites Drawer */}
      <FavoritesDrawer
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        savedProperties={savedPropertiesList}
        onRemoveFavorite={handleToggleSave}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onScheduleInspection={(prop) => {
          setIsFavoritesOpen(false);
          handleOpenSchedule(prop);
        }}
        currency={currency}
      />
    </div>
  );
}
