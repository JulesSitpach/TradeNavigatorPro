import { Card } from "@/components/ui/card";
import { RiskCalculatorForm } from "@/components/apps/risk-calculator/risk-calculator-form";
import { RiskResults } from "@/components/apps/risk-calculator/risk-results";
import { RiskProfiles } from "@/components/apps/risk-calculator/risk-profiles";

export default function RiskCalculatorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Risk Management Calculator
        </h1>
        <p className="text-gray-600 mt-2">
          Calculate position sizing, risk/reward ratios, and manage your trading
          risk
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk Calculator Form */}
        <div className="lg:col-span-2">
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Position Size Calculator
            </h2>
            <RiskCalculatorForm />
          </Card>
        </div>

        {/* Risk Results */}
        <div>
          <Card className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Risk Analysis
            </h2>
            <RiskResults />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Risk Profiles */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Saved Risk Profiles
          </h2>
          <RiskProfiles />
        </Card>

        {/* Portfolio Risk Overview */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Portfolio Risk Overview
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Total Portfolio Risk
              </span>
              <span className="text-lg font-semibold text-red-600">2.5%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Open Positions</span>
              <span className="text-lg font-semibold">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Max Risk per Trade</span>
              <span className="text-lg font-semibold">1%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <p className="text-xs text-gray-500">
              Risk utilization: 25% of maximum
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
