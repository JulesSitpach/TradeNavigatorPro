// Application constants
export const APP_NAME = 'TradeNavigatorPro';
export const APP_DESCRIPTION = 'Navigate Global Trade with Confidence';

// Supported countries for trade analysis
export const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
];

// Shipping methods
export const SHIPPING_METHODS = [
  { value: 'air', label: 'Air Freight', estimatedDays: '3-7', costMultiplier: 3 },
  { value: 'sea', label: 'Sea Freight', estimatedDays: '15-45', costMultiplier: 1 },
  { value: 'land', label: 'Land Transport', estimatedDays: '5-15', costMultiplier: 1.5 },
];

// Product categories
export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Textiles & Apparel',
  'Machinery',
  'Automotive Parts',
  'Chemicals',
  'Food & Agriculture',
  'Medical Devices',
  'Furniture',
  'Toys & Games',
  'Sports Equipment',
  'Home & Garden',
  'Industrial Equipment',
];

// Market sensitivity levels
export const MARKET_SENSITIVITY = {
  low: { label: 'Low', volumeImpact: 0.1, description: 'Customers are price-insensitive' },
  medium: { label: 'Medium', volumeImpact: 0.3, description: 'Moderate price sensitivity' },
  high: { label: 'High', volumeImpact: 0.6, description: 'Highly price-sensitive market' },
};

// Tariff rate ranges by country (sample data)
export const SAMPLE_TARIFF_RATES = {
  CN: { min: 7.4, max: 25.0, average: 15.8 },
  MX: { min: 0, max: 15.0, average: 3.2 },
  CA: { min: 0, max: 8.5, average: 2.1 },
  DE: { min: 0, max: 12.0, average: 4.3 },
  JP: { min: 0, max: 15.0, average: 5.1 },
  KR: { min: 0, max: 20.0, average: 8.7 },
  VN: { min: 0, max: 18.0, average: 6.9 },
  IN: { min: 5.0, max: 30.0, average: 12.4 },
};

// Currency codes
export const CURRENCIES = [
  { code: 'USD', symbol: ', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'CAD', symbol: 'C, name: 'Canadian Dollar' },
  { code: 'MXN', symbol: 'MX, name: 'Mexican Peso' },
];

// File upload constraints
export const FILE_UPLOAD = {
  maxSize: 10 * 1024 * 1024, // 10MB
  allowedTypes: [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  allowedExtensions: ['.csv', '.xls', '.xlsx'],
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { href: '/solutions', label: 'Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/demo', label: 'Demo' },
];

// Core applications
export const CORE_APPS = [
  {
    id: 'cost-calculator',
    name: 'Emergency Cost Calculator',
    description: 'Upload PO → instant landed cost calculations',
    icon: 'Calculator',
    href: '/apps/cost-calculator',
    problem: 'My supplier said costs going up 25% - is that right?',
    solution: 'Upload PO → instant landed cost calculations',
    color: 'orange',
  },
  {
    id: 'supply-pivot',
    name: 'Supply Chain Pivot Planner',
    description: 'AI-powered alternative supplier suggestions',
    icon: 'Network',
    href: '/apps/supply-pivot',
    problem: 'Where else can I source without tariffs?',
    solution: 'AI-powered alternative supplier suggestions',
    color: 'blue',
  },
  {
    id: 'pricing-optimizer',
    name: 'Pricing Strategy Optimizer',
    description: '3-scenario modeling with break-even analysis',
    icon: 'Target',
    href: '/apps/pricing-optimizer',
    problem: 'How do I stay profitable without losing customers?',
    solution: '3-scenario modeling with break-even analysis',
    color: 'green',
  },
  {
    id: 'tariff-tracker',
    name: 'Tariff Timeline Tracker',
    description: '30/60/90 day advance warnings',
    icon: 'Clock',
    href: '/apps/tariff-tracker',
    problem: 'I never know what\'s coming next',
    solution: '30/60/90 day advance warnings',
    color: 'purple',
  },
  {
    id: 'route-optimizer',
    name: 'Trade Route Optimizer',
    description: 'Multi-country routing + USMCA benefits',
    icon: 'Route',
    href: '/apps/route-optimizer',
    problem: 'There has to be a smarter way to ship',
    solution: 'Multi-country routing + USMCA benefits',
    color: 'indigo',
  },
];