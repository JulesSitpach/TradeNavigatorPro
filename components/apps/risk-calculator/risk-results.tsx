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
      <div className="text-center text-gray-500 py-8" data-oid="ads:0eb">
        <p data-oid="miu:ezx">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid=".4k9es6">
      {currentRisk && (
        <div className="space-y-3" data-oid="11.c3p6">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="o1ywmh_">
            <div className="text-sm text-gray-600" data-oid="71ukv29">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="h7wa:4s">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="v2frdhh">
            <div className="text-sm text-gray-600" data-oid="1x8lp5-">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="t_03bnm">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="2qech_2">
                <div className="text-sm text-gray-600" data-oid="y.rk0j7">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="7xphwmv"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="cwf:1aj">
                <div className="text-sm text-gray-600" data-oid="6wpjb_u">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="u81tr.p">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="1co3vku">
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
        <div className="mt-6" data-oid="vyr-97_">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="x84c:zp"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="h:_ew.y">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="qirjy4r"
              >
                <div className="flex justify-between" data-oid="7.joim5">
                  <span data-oid="n0y6tcq">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="y72lp50">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="9fhrzme">
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
