export interface Product {
  id: string;
  name: string;
  category: 'solar-panel' | 'battery' | 'inverter' | 'ups' | 'solar-pcu' | 'solar-system';
  subcategory?: string;
  image: string;
  description: string;
  specifications: Record<string, string>;
  features: string[];
  technology?: string;
  application?: string;
}

export const products: Product[] = [
  // Solar Panels
  {
    id: 'solar-panel-topcon-400w',
    name: 'UTL TOPCon Mono Solar Panel 400W',
    category: 'solar-panel',
    subcategory: 'TOPCon Mono',
    image: '/images/solar-panel-topcon-400w.jpg',
    description: 'Latest generation TOPCon (Tunnel Oxide Passivated Contact) monocrystalline solar panel with highest efficiency',
    specifications: {
      'Power Rating': '400W',
      'Cell Type': 'Monocrystalline TOPCon',
      'Efficiency': '22-23%',
      'Dimensions': '1956 x 992 x 40mm',
      'Weight': '18.5 kg',
      'Operating Voltage': '41.2V',
      'Operating Current': '9.71A',
      'Temperature Coefficient': '-0.35%/°C'
    },
    features: [
      'TOPCon technology for higher efficiency',
      'Enhanced temperature coefficient performance',
      'Better low-light performance',
      'Anti-reflective coated glass',
      '25-year warranty',
      'Weather resistant aluminum frame'
    ],
    technology: 'TOPCon Mono'
  },
  {
    id: 'solar-panel-perc-400w',
    name: 'UTL PERC Mono Solar Panel 400W',
    category: 'solar-panel',
    subcategory: 'PERC',
    image: '/images/solar-panel-perc-400w.jpg',
    description: 'PERC (Passivated Emitter and Rear Cell) monocrystalline solar panel with excellent efficiency and durability',
    specifications: {
      'Power Rating': '400W',
      'Cell Type': 'Monocrystalline PERC',
      'Efficiency': '20-21%',
      'Dimensions': '2000 x 1000 x 40mm',
      'Weight': '19 kg',
      'Operating Voltage': '40.8V',
      'Operating Current': '9.81A',
      'Temperature Coefficient': '-0.38%/°C'
    },
    features: [
      'PERC cell technology for improved efficiency',
      'Bifacial capability option available',
      'Low light performance',
      'Corrosion resistant frame',
      'Anti-PID (Potential Induced Degradation)',
      '25-year performance warranty'
    ],
    technology: 'PERC'
  },
  {
    id: 'solar-panel-dcr-400w',
    name: 'UTL DCR Mono Solar Panel 400W',
    category: 'solar-panel',
    subcategory: 'DCR (Domestic Content Requirement)',
    image: '/images/solar-panel-dcr-400w.jpg',
    description: 'DCR compliant solar panel meeting government domestic content requirements for subsidized projects',
    specifications: {
      'Power Rating': '400W',
      'Cell Type': 'Monocrystalline',
      'Efficiency': '19-20%',
      'Dimensions': '2000 x 1000 x 40mm',
      'Weight': '20 kg',
      'Compliance': 'Government DCR Standards',
      'Suitable For': 'Government subsidy schemes'
    },
    features: [
      'Government DCR compliant',
      'Eligible for MNRE subsidy',
      'Made with domestic content',
      'Certified and tested',
      'Cost-effective solution',
      '25-year warranty'
    ],
    technology: 'DCR Compliant'
  },
  {
    id: 'solar-panel-bifacial-400w',
    name: 'UTL Bifacial Solar Panel 400W',
    category: 'solar-panel',
    subcategory: 'Bifacial',
    image: '/images/solar-panel-bifacial-400w.jpg',
    description: 'Bifacial monocrystalline solar panel that generates power from both front and rear surfaces',
    specifications: {
      'Power Rating': '400W',
      'Front Output': '400W',
      'Rear Output': '15-25% additional',
      'Cell Type': 'Monocrystalline Bifacial',
      'Efficiency': '21-22%',
      'Dimensions': '2008 x 1000 x 40mm',
      'Weight': '19.5 kg'
    },
    features: [
      'Bifacial technology captures ground reflection',
      'Higher energy yield',
      'Improved ROI',
      'Albedo-based performance gain',
      'Suitable for elevated installations',
      '25-year warranty'
    ],
    technology: 'Bifacial'
  },

  // Batteries - Inverter Batteries
  {
    id: 'battery-inverter-100ah',
    name: 'UTL Inverter Battery 100Ah',
    category: 'battery',
    subcategory: 'Inverter Battery',
    image: '/images/battery-inverter-100ah.jpg',
    description: 'High capacity tubular inverter battery for reliable power backup in homes and offices',
    specifications: {
      'Capacity': '100Ah',
      'Voltage': '12V',
      'Type': 'Lead Acid Tubular',
      'Cycle Life': '1500-2000 cycles',
      'Warranty': '36 months',
      'Dimensions': '400 x 170 x 220mm'
    },
    features: [
      'Tubular plate design for longer life',
      'Deep cycle capable',
      'Low maintenance design',
      'Better heat dissipation',
      'Spillproof container',
      'Ideal for 24/7 backup needs'
    ],
    application: 'Home & Office'
  },
  {
    id: 'battery-inverter-200ah',
    name: 'UTL Inverter Battery 200Ah',
    category: 'battery',
    subcategory: 'Inverter Battery',
    image: '/images/battery-inverter-200ah.jpg',
    description: 'Industrial grade tubular battery for extended backup duration in commercial applications',
    specifications: {
      'Capacity': '200Ah',
      'Voltage': '12V or 24V',
      'Type': 'Lead Acid Tubular',
      'Cycle Life': '1500-2000 cycles',
      'Warranty': '48 months',
      'Dimensions': '585 x 285 x 410mm'
    },
    features: [
      'Robust tubular construction',
      'Extended power backup',
      'Low self-discharge rate',
      'Temperature resistant',
      'Dual voltage option (12V/24V)',
      'Industrial reliability'
    ],
    application: 'Commercial & Industrial'
  },

  // Batteries - Solar Batteries
  {
    id: 'battery-solar-150ah',
    name: 'UTL Solar Battery 150Ah',
    category: 'battery',
    subcategory: 'Solar Battery',
    image: '/images/battery-solar-150ah.jpg',
    description: 'Specialized solar battery designed for off-grid and hybrid solar systems with enhanced cycle life',
    specifications: {
      'Capacity': '150Ah',
      'Voltage': '12V',
      'Type': 'Lead Acid Solar',
      'Cycle Life': '2000+ cycles',
      'Warranty': '36 months',
      'Float Life': '10-12 years'
    },
    features: [
      'Optimized for solar charging',
      'High cycle life',
      'Better charge acceptance',
      'Low gassing formula',
      'Weather resistant casing',
      'Ideal for remote installations'
    ],
    application: 'Off-Grid & Hybrid Solar'
  },
  {
    id: 'battery-solar-200ah',
    name: 'UTL Solar Battery 200Ah',
    category: 'battery',
    subcategory: 'Solar Battery',
    image: '/images/battery-solar-200ah.jpg',
    description: 'High capacity solar battery for large off-grid solar power systems and microgrids',
    specifications: {
      'Capacity': '200Ah',
      'Voltage': '12V or 24V',
      'Type': 'Lead Acid Solar',
      'Cycle Life': '2000+ cycles',
      'Warranty': '48 months',
      'Energy Storage': '2.4-4.8 kWh'
    },
    features: [
      'Premium solar battery technology',
      'Extended backup duration',
      'Dual voltage configuration',
      'Fast charge recovery',
      'Maintenance indicators',
      'Sustainable energy storage'
    ],
    application: 'Large Off-Grid Systems'
  },

  // Batteries - Lithium
  {
    id: 'battery-lithium-48v-100ah',
    name: 'UTL Lithium Battery 48V 100Ah',
    category: 'battery',
    subcategory: 'Lithium Battery',
    image: '/images/battery-lithium-48v-100ah.jpg',
    description: 'Advanced LiFePO4 lithium battery for modern solar and UPS applications with high efficiency',
    specifications: {
      'Capacity': '100Ah',
      'Voltage': '48V',
      'Chemistry': 'LiFePO4 (Lithium Iron Phosphate)',
      'Energy': '4.8 kWh',
      'Cycle Life': '5000+ cycles',
      'Warranty': '5 years',
      'Round Trip Efficiency': '95%+'
    },
    features: [
      'LiFePO4 safe chemistry',
      'Ultra-high cycle life',
      'Integrated BMS (Battery Management System)',
      'Lightweight and compact',
      'Fast charge/discharge',
      'Smart monitoring capability',
      'Zero maintenance'
    ],
    application: 'Modern Solar & Hybrid Systems'
  },
  {
    id: 'battery-lithium-48v-200ah',
    name: 'UTL Lithium Battery 48V 200Ah',
    category: 'battery',
    subcategory: 'Lithium Battery',
    image: '/images/battery-lithium-48v-200ah.jpg',
    description: 'Enterprise-grade lithium battery for large-scale solar installations and commercial microgrids',
    specifications: {
      'Capacity': '200Ah',
      'Voltage': '48V',
      'Chemistry': 'LiFePO4',
      'Energy': '9.6 kWh',
      'Cycle Life': '5000+ cycles',
      'Warranty': '5 years',
      'Modular Stackable': 'Yes (up to 4 units)'
    },
    features: [
      'Enterprise lithium technology',
      'Stackable for higher capacity',
      'Modular design',
      'Smart BMS with WiFi monitoring',
      'Temperature management',
      'Parallel connectivity',
      'Premium performance'
    ],
    application: 'Commercial & Industrial'
  },

  // Home Inverter
  {
    id: 'inverter-home-1kva',
    name: 'UTL Home Inverter 1kVA',
    category: 'inverter',
    subcategory: 'Home Inverter',
    image: '/images/inverter-home-1kva.jpg',
    description: 'Compact home inverter for small homes and offices with efficient power management',
    specifications: {
      'Capacity': '1 kVA',
      'Input Voltage': '110-280V (AC)',
      'Output Voltage': '220V (AC)',
      'Output Frequency': '50Hz',
      'Battery Voltage': '12V',
      'Efficiency': '85-90%',
      'Surge Capacity': '1.5 kVA'
    },
    features: [
      'Compact design for space-saving',
      'Automatic voltage stabilization',
      'Overload protection',
      'Low noise operation',
      'LED display',
      'Long cable connectivity'
    ],
    application: 'Small Home & Office'
  },
  {
    id: 'inverter-home-2kva',
    name: 'UTL Home Inverter 2kVA',
    category: 'inverter',
    subcategory: 'Home Inverter',
    image: '/images/inverter-home-2kva.jpg',
    description: 'Mid-range home inverter with enhanced capacity for average household power requirements',
    specifications: {
      'Capacity': '2 kVA',
      'Input Voltage': '110-280V (AC)',
      'Output Voltage': '220V (AC)',
      'Output Frequency': '50Hz',
      'Battery Voltage': '24V',
      'Efficiency': '87-92%',
      'Surge Capacity': '3 kVA'
    },
    features: [
      'Higher power rating',
      'Suitable for average homes',
      'Automatic load management',
      'Battery charging capability',
      'Digital display panel',
      'Thermal protection'
    ],
    application: 'Medium Home & Small Business'
  },
  {
    id: 'inverter-home-3kva',
    name: 'UTL Home Inverter 3kVA',
    category: 'inverter',
    subcategory: 'Home Inverter',
    image: '/images/inverter-home-3kva.jpg',
    description: 'High-capacity home inverter for large homes and commercial spaces',
    specifications: {
      'Capacity': '3 kVA',
      'Input Voltage': '110-280V (AC)',
      'Output Voltage': '220V (AC)',
      'Output Frequency': '50Hz',
      'Battery Voltage': '48V',
      'Efficiency': '88-93%',
      'Surge Capacity': '4.5 kVA'
    },
    features: [
      'Premium power backup',
      'Parallel connectivity option',
      'Advanced load balancing',
      'Remote monitoring capability',
      'Eco mode for power saving',
      'Intelligent battery charger'
    ],
    application: 'Large Home & Commercial'
  },

  // Solar Inverter / PCU
  {
    id: 'solar-inverter-ongrid-3kw',
    name: 'UTL On-Grid Solar Inverter 3kW',
    category: 'solar-pcu',
    subcategory: 'On-Grid PCU',
    image: '/images/solar-inverter-ongrid-3kw.jpg',
    description: 'Compact on-grid solar inverter for small to medium rooftop solar installations',
    specifications: {
      'Capacity': '3 kW',
      'Input Voltage Range': '180-550V (DC)',
      'Output Voltage': '220V (AC)',
      'Output Frequency': '50Hz',
      'Grid Tied': 'Yes',
      'Efficiency': '97-98%',
      'Warranty': '5-10 years'
    },
    features: [
      'Grid-tied operation only',
      'Feed excess power to grid',
      'Net metering compatible',
      'Compact form factor',
      'Active anti-islanding protection',
      'Built-in DC disconnect',
      'EMI filtering'
    ],
    application: 'Grid-Connected Homes'
  },
  {
    id: 'solar-inverter-ongrid-5kw',
    name: 'UTL On-Grid Solar Inverter 5kW',
    category: 'solar-pcu',
    subcategory: 'On-Grid PCU',
    image: '/images/solar-inverter-ongrid-5kw.jpg',
    description: 'Medium capacity on-grid solar inverter for commercial and large residential installations',
    specifications: {
      'Capacity': '5 kW',
      'Input Voltage Range': '180-550V (DC)',
      'Output Voltage': '220V or 415V (AC)',
      'Grid Synchronization': 'Automatic',
      'Efficiency': '98%+',
      'Warranty': '10 years',
      'Monitoring': 'WiFi/GPRS'
    },
    features: [
      'High conversion efficiency',
      'Three-phase option available',
      'Smart monitoring via app',
      'Weather adaptive optimization',
      'Reverse power flow protection',
      'Scalable system design'
    ],
    application: 'Commercial Solar Installations'
  },
  {
    id: 'solar-inverter-offgrid-3kw',
    name: 'UTL Off-Grid Solar Inverter 3kW',
    category: 'solar-pcu',
    subcategory: 'Off-Grid PCU',
    image: '/images/solar-inverter-offgrid-3kw.jpg',
    description: 'Off-grid solar inverter for stand-alone power systems without grid connection',
    specifications: {
      'Capacity': '3 kW (continuous)',
      'Peak Power': '4.5 kW',
      'Input Voltage': '24V or 48V (DC)',
      'Output Voltage': '220V (AC)',
      'Battery Charger': 'Built-in 30A',
      'Efficiency': '90-92%',
      'Warranty': '5 years'
    },
    features: [
      'Independent power generation',
      'Integrated battery charger',
      'MPPT solar charge controller',
      'Load shedding capability',
      'Low battery protection',
      'Suitable for remote locations',
      'Eco-mode operation'
    ],
    application: 'Off-Grid & Remote Areas'
  },
  {
    id: 'solar-inverter-hybrid-5kw',
    name: 'UTL Hybrid Solar Inverter 5kW',
    category: 'solar-pcu',
    subcategory: 'Hybrid PCU',
    image: '/images/solar-inverter-hybrid-5kw.jpg',
    description: 'Advanced hybrid solar inverter with grid, solar, and battery integration capabilities',
    specifications: {
      'Capacity': '5 kW (continuous)',
      'Peak Power': '7.5 kW',
      'Solar Input': '180-550V (DC)',
      'Battery Voltage': '48V (LiFePO4/Lead Acid compatible)',
      'Grid Input': '110-280V (AC)',
      'Output': '220V or 415V (AC)',
      'Efficiency': '96-98%'
    },
    features: [
      'Hybrid mode seamless switching',
      'Grid-feed capability',
      'Energy storage integration',
      'MPPT solar charging',
      'Dual battery support',
      'Smart load management',
      'Remote monitoring & control'
    ],
    application: 'Hybrid Solar Systems'
  },
  {
    id: 'solar-inverter-hybrid-10kw',
    name: 'UTL Hybrid Solar Inverter 10kW',
    category: 'solar-pcu',
    subcategory: 'Hybrid PCU',
    image: '/images/solar-inverter-hybrid-10kw.jpg',
    description: 'Enterprise-grade hybrid solar inverter for large commercial and industrial solar installations',
    specifications: {
      'Capacity': '10 kW (continuous)',
      'Peak Power': '15 kW',
      'Solar Input': '180-550V (DC)',
      'Battery Voltage': '48V or 96V',
      'Three-Phase Output': '415V, 50Hz',
      'Efficiency': '97-98%',
      'Warranty': '10 years'
    },
    features: [
      'Three-phase power output',
      'High power industrial use',
      'Multiple battery compatibility',
      'Advanced energy management',
      'Data logging & analytics',
      'Stackable configuration',
      'Smart grid integration'
    ],
    application: 'Industrial & Large Commercial'
  },

  // Commercial UPS
  {
    id: 'ups-commercial-1kva',
    name: 'UTL Commercial UPS 1kVA',
    category: 'ups',
    subcategory: 'Commercial UPS',
    image: '/images/ups-commercial-1kva.jpg',
    description: 'Entry-level commercial UPS for small offices and server protection',
    specifications: {
      'Capacity': '1 kVA',
      'Input': '110-280V (single phase)',
      'Output': '220V (AC)',
      'Battery Voltage': '12V',
      'Backup Time': '5-10 minutes (full load)',
      'Efficiency': '90%+',
      'Warranty': '2 years'
    },
    features: [
      'Reliable power for small business',
      'Server protection capability',
      'Automatic voltage regulation',
      'Battery auto-sensing',
      'Compact rack-mountable design',
      'USB connectivity'
    ],
    application: 'Small Business & Offices'
  },
  {
    id: 'ups-commercial-3kva',
    name: 'UTL Commercial UPS 3kVA',
    category: 'ups',
    subcategory: 'Commercial UPS',
    image: '/images/ups-commercial-3kva.jpg',
    description: 'Mid-range commercial UPS for offices, servers, and network equipment',
    specifications: {
      'Capacity': '3 kVA',
      'Input': '110-280V (single or three-phase)',
      'Output': '220V or 415V (AC)',
      'Battery Voltage': '48V',
      'Backup Time': '10-15 minutes (50% load)',
      'Efficiency': '92%+',
      'Warranty': '3 years'
    },
    features: [
      'Business continuity assurance',
      'Three-phase option available',
      'Network management card option',
      'Hot-swappable batteries',
      'Energy efficient operation',
      'Scalable design'
    ],
    application: 'Medium Business & Offices'
  },
  {
    id: 'ups-commercial-10kva',
    name: 'UTL Commercial UPS 10kVA',
    category: 'ups',
    subcategory: 'Commercial UPS',
    image: '/images/ups-commercial-10kva.jpg',
    description: 'Enterprise-grade commercial UPS for data centers and critical infrastructure',
    specifications: {
      'Capacity': '10 kVA',
      'Input': '110-280V (three-phase)',
      'Output': '415V (three-phase)',
      'Battery Voltage': '96V',
      'Backup Time': '15-30 minutes (50% load)',
      'Efficiency': '94%+',
      'Warranty': '5 years'
    },
    features: [
      'Enterprise reliability',
      'Three-phase power management',
      'Network management & monitoring',
      'Parallel connectivity (up to 4 units)',
      'Advanced diagnostics',
      'Hot-swappable modules'
    ],
    application: 'Data Centers & Large Enterprise'
  },

  // Solar System Kits
  {
    id: 'solar-kit-shinex-3-2kw-ongrid',
    name: 'UTL ShineX 3.2kW On-Grid Rooftop Solar Kit',
    category: 'solar-system',
    subcategory: 'On-Grid Solar System',
    image: 'https://d3nut88kxhmnud.cloudfront.net/2026/01/solar-shinex-lit-complete-power-package.jpeg',
    description: 'Ready-to-install single-phase rooftop kit with DCR bifacial panels, net metering support, and PM Surya Ghar subsidy eligibility.',
    specifications: {
      'System Capacity': '3.2 kW',
      'Phase': 'Single phase',
      'Solar Panels': '6 x 530W mono bifacial DCR panels',
      'Inverter': 'UTL GT-3.3-GXS1 on-grid inverter',
      'Net Metering': 'Supported',
      'Subsidy Scheme': 'PM Surya Ghar Muft Bijli Yojana',
      'Panel Warranty': '10-year product / 27-year performance'
    },
    features: [
      'DCR-compliant bifacial solar panels',
      'Complete grid-tied rooftop solution',
      'Net metering ready',
      'Designed for residential energy savings',
      'Remote monitoring support',
      'Subsidy documentation support'
    ],
    technology: 'ShineX On-Grid Solar',
    application: 'Residential Rooftop'
  },
  {
    id: 'solar-kit-shinex-5kw-ongrid',
    name: 'UTL ShineX 5kW Three-Phase On-Grid Solar Kit',
    category: 'solar-system',
    subcategory: 'On-Grid Solar System',
    image: 'https://d3nut88kxhmnud.cloudfront.net/2026/01/solar-shinex-kit.jpeg',
    description: 'High-output three-phase rooftop kit with mono DCR bifacial panels, mobile monitoring, and net metering support.',
    specifications: {
      'System Capacity': '5.4 kW',
      'Phase': 'Three phase',
      'Solar Panels': '10 x 530W mono bifacial DCR panels',
      'Inverter': 'UTL GT-5-GXT2 Pro on-grid inverter',
      'Daily Generation': 'Approximately 20-25 units',
      'Net Metering': 'Supported',
      'Subsidy Scheme': 'PM Surya Ghar Muft Bijli Yojana',
      'Panel Warranty': '10-year product / 27-year performance'
    },
    features: [
      'DCR-compliant bifacial solar panels',
      'Three-phase load balancing',
      'Net metering and grid export support',
      'UTL Solar App remote monitoring',
      'Suitable for homes and small businesses',
      'Ready-to-install component package'
    ],
    technology: 'ShineX Three-Phase On-Grid Solar',
    application: 'Large Residential & Small Commercial'
  },
  {
    id: 'solar-kit-ongrid-3kw',
    name: 'UTL On-Grid Solar System 3kW',
    category: 'solar-system',
    subcategory: 'On-Grid Solar System',
    image: '/images/solar-kit-ongrid-3kw.jpg',
    description: 'Complete on-grid solar system package with all components for residential rooftop installation',
    specifications: {
      'System Capacity': '3 kW',
      'Solar Panels': '7-8 panels (400W each)',
      'Inverter': '3kW On-Grid Inverter',
      'Mounting': 'Aluminum structure',
      'Cables & Accessories': 'Included',
      'Energy Output': '12-15 kWh/day (avg)'
    },
    features: [
      'Complete ready-to-install package',
      'Grid-tied for net metering',
      'Warranty on all components',
      'Professional installation support',
      'Monitoring system included',
      'Government subsidy eligible'
    ],
    application: 'Residential Rooftop'
  },
  {
    id: 'solar-kit-offgrid-5kw',
    name: 'UTL Off-Grid Solar System 5kW',
    category: 'solar-system',
    subcategory: 'Off-Grid Solar System',
    image: '/images/solar-kit-offgrid-5kw.jpg',
    description: 'Complete off-grid solar system with inverter and battery storage for independent power',
    specifications: {
      'System Capacity': '5 kW',
      'Solar Panels': '12-13 panels (400W each)',
      'Inverter': '5kW Off-Grid Inverter',
      'Battery Storage': '15-20 kWh (lead-acid)',
      'Mounting': 'Ground or roof mount options',
      'Backup Duration': '24-48 hours (50% load)'
    },
    features: [
      'Complete energy independence',
      'Battery storage included',
      'Suitable for remote locations',
      'All wiring and safety gear included',
      'User manual & after-sales support',
      'Expandable system design'
    ],
    application: 'Off-Grid Residential'
  },
  {
    id: 'solar-kit-hybrid-10kw',
    name: 'UTL Hybrid Solar System 10kW',
    category: 'solar-system',
    subcategory: 'Hybrid Solar System',
    image: '/images/solar-kit-hybrid-10kw.jpg',
    description: 'Advanced hybrid solar system with grid connection, battery storage, and solar generation',
    specifications: {
      'System Capacity': '10 kW',
      'Solar Panels': '25 panels (400W each)',
      'Inverter': '10kW Hybrid Inverter',
      'Battery Storage': '30-40 kWh (lithium option available)',
      'Grid Connection': 'Yes, with net metering',
      'Daily Generation': '40-50 kWh (avg)'
    },
    features: [
      'Hybrid flexibility (grid + battery + solar)',
      'Energy self-sufficiency',
      'Grid export capability',
      'Battery backup power',
      'Smart energy management',
      'Premium monitoring dashboard'
    ],
    application: 'Commercial & Large Residential'
  },
  {
    id: 'solar-kit-subsidy-3kw',
    name: 'UTL Government Subsidy Solar System 3kW',
    category: 'solar-system',
    subcategory: 'Government Subsidy Systems',
    image: '/images/solar-kit-subsidy-3kw.jpg',
    description: 'Government-approved solar system kit meeting MNRE guidelines for subsidy eligibility',
    specifications: {
      'System Capacity': '3 kW',
      'Solar Panels': '7-8 DCR compliant panels',
      'Inverter': '3kW MNRE approved inverter',
      'Compliance': 'MNRE standards',
      'Documentation': 'Subsidy application ready',
      'Installation': 'ACCREDITED installer network'
    },
    features: [
      'MNRE subsidy eligible',
      'DCR compliant solar panels',
      'Government-approved components',
      'Reduced capital investment',
      'Complete documentation package',
      'Hassle-free subsidy process'
    ],
    application: 'Subsidy Scheme Beneficiaries'
  }
];

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductsBySubcategory = (subcategory: string): Product[] => {
  return products.filter(product => product.subcategory === subcategory);
};

export const categories = [
  { id: 'solar-panel', name: 'Solar Panels', icon: '☀️' },
  { id: 'battery', name: 'Batteries', icon: '🔋' },
  { id: 'inverter', name: 'Home Inverters', icon: '⚡' },
  { id: 'ups', name: 'Commercial UPS', icon: '🏢' },
  { id: 'solar-pcu', name: 'Solar Inverters & PCU', icon: '🔌' },
  { id: 'solar-system', name: 'Solar System Kits', icon: '🌞' }
];