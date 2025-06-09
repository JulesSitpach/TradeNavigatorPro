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
      <div className="text-center text-gray-500 py-8" data-oid="jxs3:fd">
        <p data-oid=".k659fn">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="srtd6f_">
      {currentRisk && (
        <div className="space-y-3" data-oid="1-l4p8u">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="ci2ulbe">
            <div className="text-sm text-gray-600" data-oid="6o37b-9">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="e91g356">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="l:-jz_0">
            <div className="text-sm text-gray-600" data-oid="x8lr9f3">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid=".1cpy6a">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="wjs553h">
                <div className="text-sm text-gray-600" data-oid="fh2q2he">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="h6ti8gx"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid=":1tp0yi">
                <div className="text-sm text-gray-600" data-oid="y4-rp-t">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="rortmug">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="zqn8qq7">
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
        <div className="mt-6" data-oid="i66ennt">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="0ufat.k"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="tlj2k1s">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="b3:x2y0"
              >
                <div className="flex justify-between" data-oid="o7wo1ib">
                  <span data-oid="k:dst-e">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="2y1n62d">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="d-0xbnx">
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
