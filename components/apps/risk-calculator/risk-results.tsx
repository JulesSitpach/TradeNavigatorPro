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
      <div className="text-center text-gray-500 py-8" data-oid="a7lx2bi">
        <p data-oid="texgx0h">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="w0y2vs7">
      {currentRisk && (
        <div className="space-y-3" data-oid="k0g0.p.">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="2skibu9">
            <div className="text-sm text-gray-600" data-oid="awq::0s">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="riduqqi">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="g0tliow">
            <div className="text-sm text-gray-600" data-oid="cly18ir">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="7r4s0yl">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="jltqjfh">
                <div className="text-sm text-gray-600" data-oid="xpm.qvr">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="xk5ecji"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="kzx79j5">
                <div className="text-sm text-gray-600" data-oid="xm0r:v0">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="07du_i4">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="w4g9kmj">
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
        <div className="mt-6" data-oid="6bxp_uc">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="7lc-c8g"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="rdma6ss">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="dk5h90h"
              >
                <div className="flex justify-between" data-oid="0h2ykm4">
                  <span data-oid="h7kb6b0">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="bxi11gd">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="d2b:oc_">
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
