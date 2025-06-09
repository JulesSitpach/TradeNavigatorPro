"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calculator, Upload, Download } from "lucide-react";

interface CalculationResult {
  productCost: number;
  shippingCost: number;
  dutyCost: number;
  taxCost: number;
  totalCost: number;
  margin: number;
  finalPrice: number;
}

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    productName: "",
    productCost: "",
    quantity: "1",
    weight: "",
    shippingMethod: "sea",
    origin: "china",
    destination: "usa",
    dutyRate: "10",
    taxRate: "8.25",
    margin: "30",
  });

  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateCosts = () => {
    const productCost = parseFloat(formData.productCost) || 0;
    const quantity = parseInt(formData.quantity) || 1;
    const weight = parseFloat(formData.weight) || 1;
    const dutyRate = parseFloat(formData.dutyRate) || 0;
    const taxRate = parseFloat(formData.taxRate) || 0;
    const margin = parseFloat(formData.margin) || 0;

    const totalProductCost = productCost * quantity;

    // Shipping cost calculation (simplified)
    const shippingRates = {
      sea: 2.5,
      air: 8.0,
      express: 15.0,
    };
    const shippingCost =
      weight *
      shippingRates[formData.shippingMethod as keyof typeof shippingRates];

    // Duty calculation
    const dutyCost = totalProductCost * (dutyRate / 100);

    // Tax calculation (on product + shipping + duty)
    const taxableCost = totalProductCost + shippingCost + dutyCost;
    const taxCost = taxableCost * (taxRate / 100);

    // Total cost
    const totalCost = totalProductCost + shippingCost + dutyCost + taxCost;

    // Final price with margin
    const finalPrice = totalCost * (1 + margin / 100);

    setResult({
      productCost: totalProductCost,
      shippingCost,
      dutyCost,
      taxCost,
      totalCost,
      margin: finalPrice - totalCost,
      finalPrice,
    });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      data-oid="q24pp8p"
    >
      {/* Header */}
      <header
        className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm"
        data-oid="_-jh:31"
      >
        <div className="container mx-auto px-4 py-4" data-oid="sfwak0m">
          <div className="flex items-center justify-between" data-oid="61wb796">
            <Link
              href="/"
              className="flex items-center space-x-2 text-slate-300 hover:text-white"
              data-oid="exbhq-8"
            >
              <ArrowLeft className="h-5 w-5" data-oid="2lh:5ac" />
              <span data-oid="__3fs_2">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2" data-oid="4hi0oby">
              <Calculator
                className="h-6 w-6 text-blue-400"
                data-oid="8_eizd6"
              />

              <span
                className="text-lg font-semibold text-white"
                data-oid="lvq7198"
              >
                Import Cost Calculator
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8" data-oid="2t67ioa">
        <div className="grid lg:grid-cols-2 gap-8" data-oid="opkjwkl">
          {/* Input Form */}
          <div
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
            data-oid="eyemq:a"
          >
            <h2
              className="text-2xl font-bold text-white mb-6"
              data-oid="5tdyk:4"
            >
              Product Details
            </h2>
            {/* ...existing code... */}
          </div>

          {/* Results */}
          <div
            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
            data-oid="whs_vyg"
          >
            <h2
              className="text-2xl font-bold text-white mb-6"
              data-oid="lbxqc1l"
            >
              Cost Breakdown
            </h2>
            {/* ...existing code... */}
          </div>
        </div>
      </div>
    </div>
  );
}
