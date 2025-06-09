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
      <div className="text-center text-gray-500 py-8" data-oid="c1fw:39">
        <p data-oid="ssjh4uc">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="1a8:-gy">
      {currentRisk && (
        <div className="space-y-3" data-oid="wy4g:3q">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="i3.bzz1">
            <div className="text-sm text-gray-600" data-oid="8mr440n">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="a:skpi2">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="p.0:sty">
            <div className="text-sm text-gray-600" data-oid="d9xa-0_">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid=":uuddxa">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid=".e8d5:l">
                <div className="text-sm text-gray-600" data-oid="1-1e_-m">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="8.xgpxt"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="-_4a:ze">
                <div className="text-sm text-gray-600" data-oid="cg:9krm">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="di.4hiz">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="2-ltq_6">
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
        <div className="mt-6" data-oid="yojkq6x">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="6l5fvdr"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="f.bfmil">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="n1pzln."
              >
                <div className="flex justify-between" data-oid="jff5aqs">
                  <span data-oid="wwqj9i4">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="scbixkm">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="1w1m:r6">
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
