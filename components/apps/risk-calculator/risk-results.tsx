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
      <div className="text-center text-gray-500 py-8" data-oid="0cy6uw:">
        <p data-oid="ltvwlop">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="j2h-wxg">
      {currentRisk && (
        <div className="space-y-3" data-oid="mbxn1mc">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="jure.uc">
            <div className="text-sm text-gray-600" data-oid="-3h52_y">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="b-wign3">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="uzn092.">
            <div className="text-sm text-gray-600" data-oid="9lx6y1l">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="kr-mdx-">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="2nu4r7c">
                <div className="text-sm text-gray-600" data-oid="-gz8iev">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="mhn-7zv"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="d.5imbj">
                <div className="text-sm text-gray-600" data-oid="cnijv97">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="8_fzwmr">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="dkcknlb">
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
        <div className="mt-6" data-oid="daw9f:g">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="pvz:l19"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid=":cihj3b">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="0ukeao_"
              >
                <div className="flex justify-between" data-oid=":oud-l.">
                  <span data-oid="89w7yxs">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="3j1dpkk">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="ve3oz__">
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
