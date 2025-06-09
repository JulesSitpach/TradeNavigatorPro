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
      <div className="text-center text-gray-500 py-8" data-oid="_l7gdsv">
        <p data-oid="st533dj">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="k.h29w2">
      {currentRisk && (
        <div className="space-y-3" data-oid="q3iag98">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="47l.k8h">
            <div className="text-sm text-gray-600" data-oid="x-0q1yx">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="ywxr281">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="2b:hl.v">
            <div className="text-sm text-gray-600" data-oid="y4hosll">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="p9ebvsu">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="lh:mp-y">
                <div className="text-sm text-gray-600" data-oid="hnn:dj9">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="gf9:z:l"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="67u8329">
                <div className="text-sm text-gray-600" data-oid="sp9_1po">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="6xgw7qo">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="tdadbak">
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
        <div className="mt-6" data-oid="r3342j9">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="lf_nej7"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="7ie7fg7">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="si:4hp8"
              >
                <div className="flex justify-between" data-oid="dymonyl">
                  <span data-oid="smhqoo0">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="lxp:k7p">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="f-zg59z">
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
