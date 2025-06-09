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
      <div className="text-center text-gray-500 py-8" data-oid="nh:xkex">
        <p data-oid="gy35bq4">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="t_vjw6n">
      {currentRisk && (
        <div className="space-y-3" data-oid="z0yif_d">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="-ge9i5z">
            <div className="text-sm text-gray-600" data-oid="_srq.i7">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="i7tm:4n">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="47av2q4">
            <div className="text-sm text-gray-600" data-oid="32-u86z">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="vtht4x1">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="x7axd68">
                <div className="text-sm text-gray-600" data-oid="7su_l2e">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="mkpjf0t"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="9e9_k9k">
                <div className="text-sm text-gray-600" data-oid="smczasc">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="y8xnlgd">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="0b7.1l6">
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
        <div className="mt-6" data-oid="i.r8-o9">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="20l36xf"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid=".bcxkwd">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="ezlpx_c"
              >
                <div className="flex justify-between" data-oid="zz8yxhc">
                  <span data-oid="p3p18gs">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="ru0zp40">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="zbj6il2">
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
