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
      <div className="text-center text-gray-500 py-8" data-oid="b3b0o:r">
        <p data-oid="cij0m3b">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="54vke7u">
      {currentRisk && (
        <div className="space-y-3" data-oid="_o_.a6y">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="n42yc5f">
            <div className="text-sm text-gray-600" data-oid="sng13s_">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="bhws2b8">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="gcpi1--">
            <div className="text-sm text-gray-600" data-oid="xdgqm6r">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="et-tq6u">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="0s-h7ig">
                <div className="text-sm text-gray-600" data-oid="dx.9ssy">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="vjwgoyh"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="11ocj8o">
                <div className="text-sm text-gray-600" data-oid="ucku0l3">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="3qblsha">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="ej89qms">
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
        <div className="mt-6" data-oid="ypp-aq9">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid=":amzsu:"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="soas5j.">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid=".-tn66a"
              >
                <div className="flex justify-between" data-oid="zrk8_1f">
                  <span data-oid="irjpayc">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="o1suhd1">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="uzaq2ns">
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
