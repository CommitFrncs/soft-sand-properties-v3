export type PropertyType = 
  | 'All' 
  | 'Detached Duplex' 
  | 'Semi-Detached' 
  | 'Terrace Duplex' 
  | 'Luxury Bungalow' 
  | 'Penthouse'
  | 'Serviced Land';

export type EstateLocation = 
  | 'All' 
  | 'Alalubosa GRA' 
  | 'Kolapo Ishola Estate' 
  | 'Jericho GRA' 
  | 'Bodija Estate' 
  | 'Aerodrome Estate' 
  | 'Oluyole Estate'
  | 'Carlton Gate Estate';

export type TitleType = 
  | 'Governor\'s Consent' 
  | 'Certificate of Occupancy (C of O)' 
  | 'Registered Conveyance' 
  | 'Gazette & Deed';

export interface Property {
  id: string;
  title: string;
  estateName: string;
  locationArea: EstateLocation;
  priceNaira: number;
  propertyType: PropertyType;
  bedrooms: number;
  bathrooms: number;
  sizeSqm: number;
  plotSizeSqm: number;
  titleType: TitleType;
  verified: boolean;
  featured?: boolean;
  mainImage: string;
  galleryImages: string[];
  features: string[];
  estateSecurity: string[];
  description: string;
  inspectionSlots: string[];
  agentContact: {
    name: string;
    role: string;
    phone: string;
    whatsapp: string;
  };
  deliveryStatus: 'Ready to Move In' | 'Under Construction (85%)' | 'Brand New';
  serviceChargeAnnualNaira: number;
}

export interface FilterState {
  searchQuery: string;
  location: EstateLocation;
  propertyType: PropertyType;
  minPrice: number;
  maxPrice: number;
  bedrooms: number | 'any';
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'newest' | 'size-desc';
}

export interface ValueProp {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export interface TrustStat {
  label: string;
  value: string;
  subtext: string;
}
