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
      <div className="text-center text-gray-500 py-8" data-oid="n:84a8e">
        <p data-oid="9qksvf-">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="ebp71r2">
      {currentRisk && (
        <div className="space-y-3" data-oid="40c11.3">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="yq9h76o">
            <div className="text-sm text-gray-600" data-oid="bxd::gl">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="7zeuof.">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="m_i-txi">
            <div className="text-sm text-gray-600" data-oid="0erwudq">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="t:dnccu">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="ohw:0qa">
                <div className="text-sm text-gray-600" data-oid="h9rqmw:">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="h9qtv-p"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="hwgigtf">
                <div className="text-sm text-gray-600" data-oid=":rxaid.">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="n8.e03i">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="gr:9yhv">
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
        <div className="mt-6" data-oid="iy_67u3">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="6z:.-tj"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="taosssq">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="jc01mzg"
              >
                <div className="flex justify-between" data-oid="kt-tnk5">
                  <span data-oid="c6r0pmq">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="r9q_fow">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="ivv.yos">
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
