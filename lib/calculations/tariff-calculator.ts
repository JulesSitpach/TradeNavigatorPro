import { Product, CostCalculation, TariffRate } from "../types";
import { SAMPLE_TARIFF_RATES } from "../constants";

export interface CostBreakdown {
  productCost: number;
  tariffCost: number;
  shippingCost: number;
  additionalFees: number;
  totalCost: number;
}

export function calculateTariffRate(product: Product): number {
  // Get tariff rate based on supplier country
  const countryRates =
    SAMPLE_TARIFF_RATES[
      product.supplierCountry as keyof typeof SAMPLE_TARIFF_RATES
    ];

  if (!countryRates) {
    return 0; // No tariff for countries not in our sample data
  }

  // For demo purposes, use average rate
  // In real implementation, this would look up actual HTS code rates
  return countryRates.average;
}

export function calculateShippingCost(
  product: Product,
  shippingMethod: "air" | "sea" | "land" = "sea",
): number {
  const baseShippingRate = {
    air: 8.5,
    sea: 2.2,
    land: 3.8,
  };

  const weight = product.weight || 0.5; // Default weight if not provided
  const quantity = product.quantity;

  return baseShippingRate[shippingMethod] * weight * quantity;
}

export function calculateLandedCost(
  product: Product,
  options: {
    shippingMethod?: "air" | "sea" | "land";
    additionalFees?: number;
    customTariffRate?: number;
  } = {},
): CostBreakdown {
  const {
    shippingMethod = "sea",
    additionalFees = 0,
    customTariffRate,
  } = options;

  const productCost = product.unitCost * product.quantity;
  const tariffRate = customTariffRate ?? calculateTariffRate(product);
  const tariffCost = productCost * (tariffRate / 100);
  const shippingCost = calculateShippingCost(product, shippingMethod);

  const totalCost = productCost + tariffCost + shippingCost + additionalFees;

  return {
    productCost,
    tariffCost,
    shippingCost,
    additionalFees,
    totalCost,
  };
}

export function compareCosts(
  originalCost: CostBreakdown,
  newCost: CostBreakdown,
): {
  costDifference: number;
  percentageIncrease: number;
  impactAnalysis: string;
} {
  const costDifference = newCost.totalCost - originalCost.totalCost;
  const percentageIncrease = (costDifference / originalCost.totalCost) * 100;

  let impactAnalysis = "";
  if (percentageIncrease > 20) {
    impactAnalysis =
      "High Impact: Consider alternative suppliers or pricing adjustments";
  } else if (percentageIncrease > 10) {
    impactAnalysis =
      "Medium Impact: Review pricing strategy and supplier options";
  } else if (percentageIncrease > 5) {
    impactAnalysis = "Low Impact: Monitor closely but manageable";
  } else if (percentageIncrease > 0) {
    impactAnalysis = "Minimal Impact: Slight cost increase";
  } else {
    impactAnalysis = "Positive Impact: Cost reduction achieved";
  }

  return {
    costDifference,
    percentageIncrease,
    impactAnalysis,
  };
}

export function generateCostCalculation(
  product: Product,
  options: {
    shippingMethod?: "air" | "sea" | "land";
    additionalFees?: number;
    customTariffRate?: number;
  } = {},
): CostCalculation {
  const costBreakdown = calculateLandedCost(product, options);
  const originalCost = product.unitCost * product.quantity;
  const impactPercentage =
    ((costBreakdown.totalCost - originalCost) / originalCost) * 100;

  return {
    id: `calc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    product,
    originalCost,
    tariffAmount: costBreakdown.tariffCost,
    shippingCost: costBreakdown.shippingCost,
    additionalFees: costBreakdown.additionalFees,
    totalLandedCost: costBreakdown.totalCost,
    impactPercentage,
    calculatedAt: new Date().toISOString(),
  };
}

export function calculateBulkProducts(
  products: Product[],
  options: {
    shippingMethod?: "air" | "sea" | "land";
    additionalFees?: number;
  } = {},
): {
  calculations: CostCalculation[];
  summary: {
    totalOriginalCost: number;
    totalLandedCost: number;
    totalTariffCost: number;
    totalShippingCost: number;
    overallImpactPercentage: number;
  };
} {
  const calculations = products.map((product) =>
    generateCostCalculation(product, options),
  );

  const summary = calculations.reduce(
    (acc, calc) => ({
      totalOriginalCost: acc.totalOriginalCost + calc.originalCost,
      totalLandedCost: acc.totalLandedCost + calc.totalLandedCost,
      totalTariffCost: acc.totalTariffCost + calc.tariffAmount,
      totalShippingCost: acc.totalShippingCost + calc.shippingCost,
      overallImpactPercentage: 0, // Will calculate after
    }),
    {
      totalOriginalCost: 0,
      totalLandedCost: 0,
      totalTariffCost: 0,
      totalShippingCost: 0,
      overallImpactPercentage: 0,
    },
  );

  summary.overallImpactPercentage =
    ((summary.totalLandedCost - summary.totalOriginalCost) /
      summary.totalOriginalCost) *
    100;

  return { calculations, summary };
}
