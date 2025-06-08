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
      <div className="text-center text-gray-500 py-8" data-oid="ui:3js.">
        <p data-oid="ay-yxol">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="5_19.e9">
      {currentRisk && (
        <div className="space-y-3" data-oid="8l8lbom">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="m8731i-">
            <div className="text-sm text-gray-600" data-oid="avsk-w4">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="::hk733">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="k::phbs">
            <div className="text-sm text-gray-600" data-oid="l32-ch3">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="_5kp51p">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="zthkvm2">
                <div className="text-sm text-gray-600" data-oid="k.ji8z5">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="110shxl"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="fod9o37">
                <div className="text-sm text-gray-600" data-oid="z9syl0.">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="nqlq0:k">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="6yw_aj8">
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
        <div className="mt-6" data-oid="pfc_zy1">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="72.ythd"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="un5b10h">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid="y3.x7e2"
              >
                <div className="flex justify-between" data-oid="sith4yf">
                  <span data-oid="0:erf24">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="5v_fnta">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="i79-i:n">
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
