// Core application types
export interface Product {
  id: string;
  name: string;
  htsCode: string;
  description?: string;
  unitCost: number;
  quantity: number;
  weight?: number;
  supplierCountry: string;
  category?: string;
}

export interface TariffRate {
  htsCode: string;
  country: string;
  rate: number;
  rateType: "ad_valorem" | "specific" | "compound";
  effectiveDate: string;
  description: string;
}

export interface CostCalculation {
  id: string;
  product: Product;
  originalCost: number;
  tariffAmount: number;
  shippingCost: number;
  additionalFees: number;
  totalLandedCost: number;
  impactPercentage: number;
  calculatedAt: string;
}

export interface Supplier {
  id: string;
  name: string;
  country: string;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
  certifications: string[];
  leadTime: number;
  minimumOrder: number;
  rating: number;
  verified: boolean;
}

export interface AlternativeSupplier extends Supplier {
  tariffRate: number;
  costComparison: {
    unitCost: number;
    tariffCost: number;
    shippingCost: number;
    totalCost: number;
    savings: number;
    savingsPercentage: number;
  };
}

export interface PricingScenario {
  id: string;
  name: string;
  description: string;
  currentPrice: number;
  newPrice: number;
  marginImpact: number;
  volumeImpact: number;
  revenueImpact: number;
  recommendation: string;
}

export interface TradeRoute {
  id: string;
  origin: string;
  destination: string;
  transitCountries: string[];
  estimatedDays: number;
  cost: number;
  tariffBenefits: string[];
  riskLevel: "low" | "medium" | "high";
}

export interface TariffAlert {
  id: string;
  htsCode: string;
  country: string;
  alertType: "rate_change" | "new_policy" | "deadline" | "opportunity";
  severity: "low" | "medium" | "high" | "critical";
  title: string;
  description: string;
  effectiveDate: string;
  actionRequired: boolean;
  estimatedImpact: number;
}

export interface UserPreferences {
  defaultCurrency: string;
  defaultCountry: string;
  alertFrequency: "immediate" | "daily" | "weekly";
  industries: string[];
  languages: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Form types
export interface CostCalculatorFormData {
  products: Product[];
  shippingMethod: "air" | "sea" | "land";
  shippingCost?: number;
  additionalFees?: number;
  targetMargin?: number;
}

export interface SupplierSearchFormData {
  productDescription: string;
  htsCode?: string;
  currentSupplierCountry: string;
  excludeCountries?: string[];
  minimumQuantity?: number;
  maxLeadTime?: number;
  certificationRequirements?: string[];
}

export interface PricingOptimizerFormData {
  currentPrice: number;
  costIncrease: number;
  costIncreaseType: "percentage" | "fixed";
  targetMargin: number;
  marketSensitivity: "low" | "medium" | "high";
  competitorPricing?: number[];
}
