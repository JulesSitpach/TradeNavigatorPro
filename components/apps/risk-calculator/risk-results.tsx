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
      <div className="text-center text-gray-500 py-8" data-oid="ckta_f8">
        <p data-oid="vx:xwl2">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="gbpcwks">
      {currentRisk && (
        <div className="space-y-3" data-oid="ov5-_7p">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="p26u98u">
            <div className="text-sm text-gray-600" data-oid="5.0-jy2">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="iawfwj7">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="-xykfb5">
            <div className="text-sm text-gray-600" data-oid="hbbqcds">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="rmwzmkn">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="d3zhc:v">
                <div className="text-sm text-gray-600" data-oid="ie_63:4">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="sn3:mg9"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="x95xm4t">
                <div className="text-sm text-gray-600" data-oid="ztj:4dy">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid=":0md:iw">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid=".t8.1u2">
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
        <div className="mt-6" data-oid="wrhjjk1">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid=":.x7ijd"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="970o_j5">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="h7qe83t"
              >
                <div className="flex justify-between" data-oid="ykxpua.">
                  <span data-oid="qjgglzn">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="mdmogdq">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="n12qscw">
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
