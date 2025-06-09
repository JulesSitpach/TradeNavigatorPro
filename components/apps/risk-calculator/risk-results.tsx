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
      <div className="text-center text-gray-500 py-8" data-oid="b:a9jm-">
        <p data-oid="51:y4ih">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="001zg__">
      {currentRisk && (
        <div className="space-y-3" data-oid="n22a1bs">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="i4e0uhn">
            <div className="text-sm text-gray-600" data-oid="3ci4lfy">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="pc17l8t">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="abc1.da">
            <div className="text-sm text-gray-600" data-oid="9-_u_tn">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="y3fyi16">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="5p.b9ju">
                <div className="text-sm text-gray-600" data-oid="2j9ryd7">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="0f8rz05"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="rk:3nrd">
                <div className="text-sm text-gray-600" data-oid="fedse90">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="rbn6x-m">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid=":y-2dtl">
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
        <div className="mt-6" data-oid="5khkox8">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid=":o5is:3"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="4e9u:7.">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="6-is74y"
              >
                <div className="flex justify-between" data-oid=".ugr5:a">
                  <span data-oid="-0:b-9u">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="6wp6qn6">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="t35pxim">
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
