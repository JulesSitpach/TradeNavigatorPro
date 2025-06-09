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
      <div className="text-center text-gray-500 py-8" data-oid="-tu4t25">
        <p data-oid="eu.8:9o">Enter trade details to see risk analysis</p>
      </div>
    );
  }

  return (
    <div className="space-y-4" data-oid="qmft_xn">
      {currentRisk && (
        <div className="space-y-3" data-oid="kb32p84">
          <div className="p-3 bg-blue-50 rounded-lg" data-oid="xk9fyxy">
            <div className="text-sm text-gray-600" data-oid="6i4jc88">
              Position Size
            </div>
            <div className="text-xl font-bold text-blue-600" data-oid="jr_fqjp">
              {currentRisk.positionSize.toLocaleString()} units
            </div>
          </div>

          <div className="p-3 bg-red-50 rounded-lg" data-oid="tsexula">
            <div className="text-sm text-gray-600" data-oid="ydav68k">
              Risk Amount
            </div>
            <div className="text-xl font-bold text-red-600" data-oid="_73q7rl">
              ${currentRisk.riskAmount.toLocaleString()}
            </div>
          </div>

          {currentRisk.rewardAmount > 0 && (
            <>
              <div className="p-3 bg-green-50 rounded-lg" data-oid="ie5kf63">
                <div className="text-sm text-gray-600" data-oid="y1z8630">
                  Potential Reward
                </div>
                <div
                  className="text-xl font-bold text-green-600"
                  data-oid="apm1yc9"
                >
                  ${currentRisk.rewardAmount.toLocaleString()}
                </div>
              </div>

              <div className="p-3 bg-gray-50 rounded-lg" data-oid="6hrwrm3">
                <div className="text-sm text-gray-600" data-oid="-kc6y4k">
                  Risk/Reward Ratio
                </div>
                <div className="text-xl font-bold" data-oid="cvdy8ra">
                  1:{currentRisk.riskRewardRatio}
                </div>
                <div className="text-xs text-gray-500 mt-1" data-oid="o1u-x.o">
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
        <div className="mt-6" data-oid="-_hmp:j">
          <h4
            className="text-sm font-semibold text-gray-700 mb-2"
            data-oid="vvwpq1d"
          >
            Recent Calculations
          </h4>
          <div className="space-y-2" data-oid="vyi.j08">
            {recentCalculations.map((calc, index) => (
              <div
                key={index}
                className="p-2 bg-gray-50 rounded text-xs"
                data-oid=":jme4t0"
              >
                <div className="flex justify-between" data-oid="kwh-xdm">
                  <span data-oid="nbajjr6">{calc.currencyPair}</span>
                  <span className="text-red-600" data-oid="1v69bg2">
                    ${calc.riskAmount}
                  </span>
                </div>
                <div className="text-gray-500" data-oid="h-ipx0h">
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
