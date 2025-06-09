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
      <div className="text-center text-gray-500 py-8" data-oid="_b3ym1q">
        <p data-oid="nv55xen">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="27ej5ic">
      {currentRisk && (
        <div className="space-y-3" data-oid="6:-27l4">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="jn7:f12">
            <div className="text-sm text-gray-600" data-oid="0ux5w6q">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="7.pvre4">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="r3seouo">
            <div className="text-sm text-gray-600" data-oid="iwkt878">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="pd5xane">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="_px-jco">
                <div className="text-sm text-gray-600" data-oid="boh-99e">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="x4a-1-l"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="6hkqjtn">
                <div className="text-sm text-gray-600" data-oid="5zwjy6j">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="zgacwxs">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="r4znz4l">
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
        <div className="mt-6" data-oid="s1xd-0_">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="u6hs5x5"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="4aj4cw3">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="grkvcw7"
              >
                <div className="flex justify-between" data-oid="2687kt3">
                  <span data-oid="1rtcmdx">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="ibii1yv">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="8188q13">
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
