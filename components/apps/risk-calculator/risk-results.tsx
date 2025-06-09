"use client";

import { useState, useEffect } from "react";

interface RiskCalculation {
  accountBalance: number;
  riskPercentage: number;
  entryPrice: number;
  stopLoss: number;
  takeProfit: number;
  positionSize: number;
  riskAmount: number;
  rewardAmount: number;
  riskRewardRatio: number;
}

export function RiskResults() {
  const [currentRisk, setCurrentRisk] = useState<RiskCalculation | null>(null);
  const [recentCalculations, setRecentCalculations] = useState<any[]>([]);

  useEffect(() => {
    // Listen for risk calculations
    const handleRiskCalculated = (event: any) => {
      setCurrentRisk(event.detail);
    };

    window.addEventListener("riskCalculated", handleRiskCalculated);

    // Load recent calculations
    const loadRecentCalculations = () => {
      const saved = JSON.parse(
        localStorage.getItem("riskCalculations") || "[]",
      );
      setRecentCalculations(saved.slice(-5).reverse());
    };

    loadRecentCalculations();

    return () => {
      window.removeEventListener("riskCalculated", handleRiskCalculated);
    };
  }, []);

  if (!currentRisk && recentCalculations.length === 0) {
    return (
      <div className="text-center text-gray-500 py-8">
        <p>Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {currentRisk && (
        <div className="space-y-3">
          <div className="p-3 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-600">Position Size</div>
            <div className="text-xl font-bold text-blue-600">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg">
            <div className="text-sm text-gray-600">Risk Amount</div>
            <div className="text-xl font-bold text-red-600">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600">Potential Reward</div>
                <div className="text-xl font-bold text-green-600">
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm text-gray-600">Risk/Reward Ratio</div>
                <div className="text-xl font-bold">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {currentRisk.riskRewardRatio >= 2
                    ? "Good ratio ✓"
                    : "Consider higher reward"}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {recentCalculations.length > 0 && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-700 mb-2">
            Recent Calculations
          </h4>
          <div className="space-y-2">
            {recentCalculations.map((calc, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded text-xs">
                <div className="flex justify-between">
                  <span>{calc.currencyPair}</span>
                  <span className="text-red-600">${calc.riskAmount}</span>
                </div>
                <div className="text-gray-500">
                  {new Date(calc.timestamp).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
