import { Property, ValueProp, TrustStat } from '../types';

// Locally generated high-definition realistic photos
import heroImg from '../assets/images/ibadan_estate_hero_1788861603118.jpg';
import gateImg from '../assets/images/ibadan_estate_gate_1788861627283.jpg';
import villaImg from '../assets/images/ibadan_estate_villa_1788861643973.jpg';
import interiorImg from '../assets/images/ibadan_interior_living_1788861669123.jpg';
import mansionImg from '../assets/images/ibadan_jericho_mansion_1788861760093.jpg';
import bungalowImg from '../assets/images/ibadan_smart_bungalow_1788861735368.jpg';
import terraceImg from '../assets/images/ibadan_terrace_homes_1788861688923.jpg';

export const HERO_IMAGE = heroImg;
export const GATE_IMAGE = gateImg;
export const INTERIOR_IMAGE = interiorImg;

export const PROPERTIES_DATA: Property[] = [
  {
    id: 'ssp-001',
    title: '5-Bedroom Contemporary Detached Villa & Penthouse',
    estateName: 'Aerodrome Heritage Estate',
    locationArea: 'Aerodrome Estate',
    priceNaira: 145000000, // ₦145M
    propertyType: 'Detached Duplex',
    bedrooms: 5,
    bathrooms: 6,
    sizeSqm: 420,
    plotSizeSqm: 650,
    titleType: 'Governor\'s Consent',
    verified: true,
    featured: true,
    mainImage: heroImg,
    galleryImages: [
      heroImg,
      interiorImg,
      gateImg,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Smart Home Automation',
      'Fitted Italian Kitchen with Quartz Island',
      'Private 10kVA Hybrid Solar Inverter',
      'Ensuite Maid Quarters (BQ)',
      'Underground Drainage Connection',
      'Stamped Concrete Driveway'
    ],
    estateSecurity: [
      '24/7 Armed Response Mobile Police',
      'RFID & Biometric Visitor Gate Access',
      'High-Definition Perimeter CCTV Coverage',
      'Central Estate Solar Streetlighting'
    ],
    description: 'An exquisitely engineered 5-bedroom luxury residence situated along the prime boulevard of Aerodrome Heritage Estate, Samonda, Ibadan. Features double-volume ceiling living area, automated security doors, dedicated cinema lounge, and fully paved dual road access.',
    inspectionSlots: ['Today at 2:00 PM', 'Tomorrow at 10:00 AM', 'Saturday at 11:30 AM'],
    agentContact: {
      name: 'Adewale Balogun',
      role: 'Head of Gated Estates Acquisitions',
      phone: '+234 803 892 4100',
      whatsapp: '2348038924100'
    },
    deliveryStatus: 'Brand New',
    serviceChargeAnnualNaira: 450000
  },
  {
    id: 'ssp-002',
    title: '4-Bedroom Detached Duplex with Private Pool',
    estateName: 'Alalubosa Prime Heights Estate',
    locationArea: 'Alalubosa GRA',
    priceNaira: 185000000, // ₦185M
    propertyType: 'Detached Duplex',
    bedrooms: 4,
    bathrooms: 5,
    sizeSqm: 380,
    plotSizeSqm: 580,
    titleType: 'Certificate of Occupancy (C of O)',
    verified: true,
    featured: true,
    mainImage: villaImg,
    galleryImages: [
      villaImg,
      interiorImg,
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Heated Plunge Swimming Pool',
      'Solid Hardwood Internal Doors',
      'Fully Equipped Bosch Kitchen',
      'Walk-in Wardrobe in Master Wing',
      'Treated Central Water Plant',
      'Pre-installed 15kVA Battery Bank'
    ],
    estateSecurity: [
      'Dual Security Checkpoints',
      'Underground Fiber Optic Intercom',
      'Motorized Patrol Vehicles',
      'Zero Unauthorized Pedestrian Access'
    ],
    description: 'Located in the most sought-after corridor of Alalubosa GRA, this 4-bedroom detached duplex combines tropical minimalism with uncompromising structural integrity. Features reinforced concrete pile foundations, floor-to-ceiling soundproof glazing, and private swimming pool.',
    inspectionSlots: ['Tomorrow at 1:00 PM', 'Friday at 3:00 PM', 'Saturday at 9:00 AM'],
    agentContact: {
      name: 'Folashade Adeleke',
      role: 'Senior Property Advisor',
      phone: '+234 814 620 7891',
      whatsapp: '2348146207891'
    },
    deliveryStatus: 'Brand New',
    serviceChargeAnnualNaira: 520000
  },
  {
    id: 'ssp-003',
    title: '5-Bedroom Governor\'s Grade Estate Mansion',
    estateName: 'Jericho Crown Crest Estate',
    locationArea: 'Jericho GRA',
    priceNaira: 275000000, // ₦275M
    propertyType: 'Detached Duplex',
    bedrooms: 5,
    bathrooms: 6,
    sizeSqm: 560,
    plotSizeSqm: 900,
    titleType: 'Governor\'s Consent',
    verified: true,
    featured: true,
    mainImage: mansionImg,
    galleryImages: [
      mansionImg,
      interiorImg,
      gateImg,
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Olympic-Style Lap Pool & Gazebo',
      'Executive Home Office Suite',
      'Commercial Grade 3-Phase Solar Grid',
      'Separate 2-Bedroom Guest Chalet',
      'Covered Parking for 6 Vehicles',
      'Reinforced Panic Room & Safe'
    ],
    estateSecurity: [
      '24-Hour Armed Military Liaison Patrol',
      'Infrared Night-Vision Perimeter Sensors',
      'Automatic License Plate Recognition (ALPR)',
      'Dedicated Resident Mobile App Clearance'
    ],
    description: 'A stately executive mansion in Jericho GRA, Ibadan\'s diplomatic and legacy enclave. Crafted with imported Spanish porcelain, German sanitary fittings, private gym studio, and an expansive landscaped grounds ideal for dignitaries and high-net-worth families.',
    inspectionSlots: ['Confidential Viewing by Appointment', 'Thursday at 11:00 AM', 'Saturday at 2:00 PM'],
    agentContact: {
      name: 'Adewale Balogun',
      role: 'Head of Gated Estates Acquisitions',
      phone: '+234 803 892 4100',
      whatsapp: '2348038924100'
    },
    deliveryStatus: 'Ready to Move In',
    serviceChargeAnnualNaira: 750000
  },
  {
    id: 'ssp-004',
    title: '4-Bedroom Contemporary Smart Bungalow',
    estateName: 'Carlton Gate Luxury Enclave',
    locationArea: 'Bodija Estate',
    priceNaira: 98000000, // ₦98M
    propertyType: 'Luxury Bungalow',
    bedrooms: 4,
    bathrooms: 4,
    sizeSqm: 310,
    plotSizeSqm: 500,
    titleType: 'Certificate of Occupancy (C of O)',
    verified: true,
    mainImage: bungalowImg,
    galleryImages: [
      bungalowImg,
      interiorImg,
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
    ],
    features: [
      'Single-Level Step-Free Accessible Design',
      'Solar Panel Array with Lithium Battery',
      'All Ensuite Rooms with Walk-in Showers',
      'Spacious Kitchen with Pantry & Gas Line',
      'Industrial Borehole with Filtration Plant',
      'Electric Fence with Siren Alarm'
    ],
    estateSecurity: [
      'Uniformed Private Guards 24/7',
      'Single Ingress/Egress Electronic Gate',
      'CCTV Camera Network with Control Room',
      'Strict Delivery Dispatch Protocol'
    ],
    description: 'Designed for effortless elegance without staircases, this 4-bedroom luxury bungalow in Old Bodija extension gated enclave offers peaceful suburban living with rapid access to Secretariat, UI, and University College Hospital (UCH).',
    inspectionSlots: ['Today at 4:00 PM', 'Wednesday at 10:00 AM', 'Saturday at 1:00 PM'],
    agentContact: {
      name: 'Folashade Adeleke',
      role: 'Senior Property Advisor',
      phone: '+234 814 620 7891',
      whatsapp: '2348146207891'
    },
    deliveryStatus: 'Ready to Move In',
    serviceChargeAnnualNaira: 360000
  },
  {
    id: 'ssp-005',
    title: '4-Bedroom Premium Terrace Duplex with BQ',
    estateName: 'Kolapo Ishola Harmony Terraces',
    locationArea: 'Kolapo Ishola Estate',
    priceNaira: 85000000, // ₦85M
    propertyType: 'Terrace Duplex',
    bedrooms: 4,
    bathrooms: 4,
    sizeSqm: 260,
    plotSizeSqm: 320,
    titleType: 'Governor\'s Consent',
    verified: true,
    featured: true,
    mainImage: terraceImg,
    galleryImages: [
      terraceImg,
      interiorImg,
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
      gateImg
    ],
    features: [
      'Energy-Efficient LED Architecture',
      'Dedicated 3-Car Parking Bay',
      'High-Speed Fiber Optic Internet Ready',
      'Attached Ensuite Servant Quarters',
      'Paved Children Playground Zone',
      'Commercial Pre-Paid Electric Meter'
    ],
    estateSecurity: [
      'Estate Security Gate with Intercom',
      '24-Hour Armed Guard Station',
      'Solar Powered Street Lights',
      'Perimeter Electric Fencing'
    ],
    description: 'The benchmark of modern urban family living in Kolapo Ishola GRA, Akobo. Built within a clean cluster of 8 units, guaranteeing high communal cohesion, low service costs, and exceptional capital appreciation along the General Gas corridor.',
    inspectionSlots: ['Tomorrow at 11:30 AM', 'Thursday at 2:00 PM', 'Sunday at 3:00 PM'],
    agentContact: {
      name: 'Tunde Olumide',
      role: 'Akobo Corridor Specialist',
      phone: '+234 802 771 9054',
      whatsapp: '2348027719054'
    },
    deliveryStatus: 'Brand New',
    serviceChargeAnnualNaira: 280000
  },
  {
    id: 'ssp-006',
    title: '4-Bedroom Semi-Detached Duplex + Study',
    estateName: 'Oluyole Parkland Gated Community',
    locationArea: 'Oluyole Estate',
    priceNaira: 92000000, // ₦92M
    propertyType: 'Semi-Detached',
    bedrooms: 4,
    bathrooms: 5,
    sizeSqm: 295,
    plotSizeSqm: 380,
    titleType: 'Certificate of Occupancy (C of O)',
    verified: true,
    mainImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      interiorImg,
      gateImg
    ],
    features: [
      'Executive First Floor Work-from-Home Study',
      'Spacious Ante-room with Guest Powder Room',
      'Water Treatment Plant & Overhead Steel Tank',
      'Spacious Backyard Garden Space',
      'Modern Pop Ceilings with Shadow Gap'
    ],
    estateSecurity: [
      'Resident-Only Electronic Barrier Gate',
      'Guarded Checkpoint at Ring Road Extension',
      'Community Vigilance Patrol Team',
      'CCTV Monitoring on Primary Access Routes'
    ],
    description: 'Strategically located in Oluyole Estate with swift connectivity to Ring Road and Lagos-Ibadan Expressway. Ideal for families and frequent commuters seeking a peaceful, secured neighborhood with well-paved roads.',
    inspectionSlots: ['Wednesday at 1:00 PM', 'Friday at 11:00 AM', 'Saturday at 4:00 PM'],
    agentContact: {
      name: 'Folashade Adeleke',
      role: 'Senior Property Advisor',
      phone: '+234 814 620 7891',
      whatsapp: '2348146207891'
    },
    deliveryStatus: 'Brand New',
    serviceChargeAnnualNaira: 320000
  },
  {
    id: 'ssp-007',
    title: '5-Bedroom Master-Crafted Duplex with Cinema',
    estateName: 'Kolapo Ishola Royal Crescent',
    locationArea: 'Kolapo Ishola Estate',
    priceNaira: 165000000, // ₦165M
    propertyType: 'Detached Duplex',
    bedrooms: 5,
    bathrooms: 6,
    sizeSqm: 450,
    plotSizeSqm: 700,
    titleType: 'Governor\'s Consent',
    verified: true,
    mainImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
      interiorImg,
      terraceImg
    ],
    features: [
      'Acoustically Treated 8-Seat Cinema Lounge',
      'Floating Tempered Glass Staircase',
      'Master Bathroom with Freestanding Jacuzzi',
      'Rooftop Terrace with Ibadan Skyline View',
      'Dual Kitchen Setup (Show & Wet Kitchen)',
      'Backup Soundproof Diesel Generator Station'
    ],
    estateSecurity: [
      'Gated Access with Armed Security Post',
      'Biometric Facial Entry for Residents',
      '24/7 Estate Control Room Monitoring',
      'Perimeter Razor Wire & Infrared Beams'
    ],
    description: 'An architectural masterpiece on a generous 700sqm corner parcel in Kolapo Ishola Estate. Features expansive entertaining terraces, private cinema, double master suites, and bespoke architectural finishes.',
    inspectionSlots: ['Thursday at 3:00 PM', 'Friday at 2:00 PM', 'Saturday at 10:00 AM'],
    agentContact: {
      name: 'Tunde Olumide',
      role: 'Akobo Corridor Specialist',
      phone: '+234 802 771 9054',
      whatsapp: '2348027719054'
    },
    deliveryStatus: 'Brand New',
    serviceChargeAnnualNaira: 480000
  },
  {
    id: 'ssp-008',
    title: '3-Bedroom Luxury Serviced Garden Apartment',
    estateName: 'Agodi Heritage Enclave',
    locationArea: 'Bodija Estate',
    priceNaira: 65000000, // ₦65M
    propertyType: 'Terrace Duplex',
    bedrooms: 3,
    bathrooms: 4,
    sizeSqm: 210,
    plotSizeSqm: 250,
    titleType: 'Certificate of Occupancy (C of O)',
    verified: true,
    mainImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      interiorImg,
      gateImg
    ],
    features: [
      'Low Maintenance Turnkey Investment',
      'High Rental Yield (₦4.5M/year estimated)',
      'Common Lawn & Swimming Facility',
      'Solar Powered Inverter Pre-Installed',
      'Built-in Dishwasher and Microwave'
    ],
    estateSecurity: [
      'Uniformed Estate Security 24/7',
      'Keycard Gate Access Control',
      'Perimeter Surveillance Cameras',
      'Visitor Logbook Verification'
    ],
    description: 'A contemporary 3-bedroom garden residence positioned at the intersection of Bodija and Agodi GRA. Perfect for diaspora investors seeking rental income or executives working in central Ibadan.',
    inspectionSlots: ['Today at 12:00 PM', 'Wednesday at 3:00 PM', 'Saturday at 2:30 PM'],
    agentContact: {
      name: 'Folashade Adeleke',
      role: 'Senior Property Advisor',
      phone: '+234 814 620 7891',
      whatsapp: '2348146207891'
    },
    deliveryStatus: 'Ready to Move In',
    serviceChargeAnnualNaira: 240000
  },
  {
    id: 'ssp-009',
    title: 'Serviced 800sqm Residential Plot with Title',
    estateName: 'Carlton Gate Phase 2',
    locationArea: 'Carlton Gate Estate',
    priceNaira: 42000000, // ₦42M
    propertyType: 'Serviced Land',
    bedrooms: 0,
    bathrooms: 0,
    sizeSqm: 800,
    plotSizeSqm: 800,
    titleType: 'Governor\'s Consent',
    verified: true,
    mainImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
      gateImg
    ],
    features: [
      'Dry Table Land Ready for Immediate Construction',
      'Direct Connection to Estate 33kVA Transformer',
      'Underground Drainage Culverts in Place',
      'Pre-approved Architectural Guidelines',
      'Zero Omonile or Community Encroachment'
    ],
    estateSecurity: [
      'Perimeter Fenced & Secured Boundary',
      'Security Gatehouse with Armed Guards',
      'Surveillance at Entry Points'
    ],
    description: 'Prime 800sqm dry residential parcel within Carlton Gate Phase 2, Akobo. Ready for immediate foundation laying for your custom detached villa. All layout approvals, survey plans, and Governor\'s consent documents verified.',
    inspectionSlots: ['Daily from 9:00 AM to 5:00 PM'],
    agentContact: {
      name: 'Adewale Balogun',
      role: 'Head of Gated Estates Acquisitions',
      phone: '+234 803 892 4100',
      whatsapp: '2348038924100'
    },
    deliveryStatus: 'Ready to Move In',
    serviceChargeAnnualNaira: 150000
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'vp-1',
    title: '100% Verified Titles & Zero Omonile Risk',
    subtitle: 'Ministry of Lands & Physical Planning Audited',
    description: 'Every property is fully vetted for genuine Governor\'s Consent or C of O. No customary disputes, no third-party family claims, and no extortionate community fees.',
    image: gateImg,
    badge: 'Legal Due Diligence'
  },
  {
    id: 'vp-2',
    title: 'Strictly Secured Gated Communities',
    subtitle: 'Armed Patrols & Automated Access',
    description: 'We exclusively partner with estates that enforce 24/7 security posts, biometric gate passes, high-resolution CCTV perimeters, and rapid response patrol units.',
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=800&q=80',
    badge: '24/7 Gated Access'
  },
  {
    id: 'vp-3',
    title: 'Paved Infrastructure & Clean Utilities',
    subtitle: 'Concrete Roads, Solar & Deep Drainage',
    description: 'No unpaved muddy roads or flood vulnerabilities. All listings feature concrete road networks, covered stormwater canals, high-capacity transformers, and solar streetlights.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    badge: 'Built Infrastructure'
  },
  {
    id: 'vp-4',
    title: 'Transparent Tech-First Transactions',
    subtitle: 'Digital Inspections & Direct Legal Escrow',
    description: 'Search with real prices, view genuine architectural photos, schedule physical or drone video tours in seconds, and execute transactions through audited escrow.',
    image: interiorImg,
    badge: 'Tech-Forward Escrow'
  }
];

export const TRUST_STATS: TrustStat[] = [
  {
    value: '18+',
    label: 'Secured Estates in Ibadan',
    subtext: 'Alalubosa, Jericho, Bodija & Akobo'
  },
  {
    value: '₦48.5B+',
    label: 'Transacted Property Volume',
    subtext: 'Across residential & serviced land'
  },
  {
    value: '380+',
    label: 'Verified Homeowners Settled',
    subtext: 'Diaspora & local executive families'
  },
  {
    value: '100%',
    label: 'Zero Legal Dispute Rate',
    subtext: 'Strict legal title verification guarantee'
  }
];

export const IBADAN_ESTATE_ZONES = [
  {
    name: 'Alalubosa GRA',
    tag: 'Ultra-Prime / Central',
    description: 'The pinnacle of Ibadan executive living with manicured greenery, upscale residences, and fast access to Ring Road.',
    avgPrice: '₦120M - ₦250M',
    securityLevel: 'Biometric / Armed Patrol'
  },
  {
    name: 'Kolapo Ishola / Akobo',
    tag: 'Modern Fast-Growing Corridor',
    description: 'The premier choice for contemporary tech executives and diaspora returns, featuring newly planned modern layouts.',
    avgPrice: '₦75M - ₦170M',
    securityLevel: 'RFID Gates / 24/7 Security'
  },
  {
    name: 'Jericho GRA',
    tag: 'Legacy & Diplomatic Hub',
    description: 'Serene, mature trees, diplomatic presence, golf course vicinity, and colonial prestige with vast land plots.',
    avgPrice: '₦150M - ₦350M',
    securityLevel: 'Armed Police Liaison'
  },
  {
    name: 'Bodija Estate',
    tag: 'Established Commercial & Residential',
    description: 'Close proximity to the Oyo State Secretariat, top educational institutions, and vibrant gourmet hubs.',
    avgPrice: '₦65M - ₦130M',
    securityLevel: 'Gated Residents Association'
  },
  {
    name: 'Aerodrome Estate / Samonda',
    tag: 'Modern Tech & Family Enclave',
    description: 'Master-planned on the old airport grounds, featuring underground drainage, uniform architecture, and wide avenues.',
    avgPrice: '₦90M - ₦160M',
    securityLevel: 'Smart Barrier & CCTV'
  }
];
