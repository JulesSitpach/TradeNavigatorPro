"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

export function RiskCalculatorForm() {
  const [formData, setFormData] = useState({
    accountBalance: "",
    riskPercentage: "1",
    entryPrice: "",
    stopLoss: "",
    takeProfit: "",
    currencyPair: "EUR/USD",
  });

  const [calculation, setCalculation] = useState<RiskCalculation | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateRisk = () => {
    const accountBalance = parseFloat(formData.accountBalance);
    const riskPercentage = parseFloat(formData.riskPercentage);
    const entryPrice = parseFloat(formData.entryPrice);
    const stopLoss = parseFloat(formData.stopLoss);
    const takeProfit = parseFloat(formData.takeProfit);

    if (!accountBalance || !riskPercentage || !entryPrice || !stopLoss) {
      return;
    }

    const riskAmount = (accountBalance * riskPercentage) / 100;
    const pipValue = 10; // Simplified for major pairs
    const stopLossPips = Math.abs(entryPrice - stopLoss) * 10000;
    const positionSize = riskAmount / (stopLossPips * pipValue);

    let rewardAmount = 0;
    let riskRewardRatio = 0;

    if (takeProfit) {
      const takeProfitPips = Math.abs(takeProfit - entryPrice) * 10000;
      rewardAmount = takeProfitPips * pipValue * positionSize;
      riskRewardRatio = rewardAmount / riskAmount;
    }

    const result: RiskCalculation = {
      accountBalance,
      riskPercentage,
      entryPrice,
      stopLoss,
      takeProfit,
      positionSize: Math.round(positionSize * 100) / 100,
      riskAmount: Math.round(riskAmount * 100) / 100,
      rewardAmount: Math.round(rewardAmount * 100) / 100,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
    };

    setCalculation(result);

    // Store in localStorage
    const savedCalculations = JSON.parse(
      localStorage.getItem("riskCalculations") || "[]",
    );
    savedCalculations.push({
      ...result,
      timestamp: new Date().toISOString(),
      currencyPair: formData.currencyPair,
    });
    localStorage.setItem("riskCalculations", JSON.stringify(savedCalculations));

    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent("riskCalculated", { detail: result }));
  };

  const saveProfile = () => {
    if (!calculation) return;

    const profileName = prompt("Enter profile name:");
    if (!profileName) return;

    const savedProfiles = JSON.parse(
      localStorage.getItem("riskProfiles") || "[]",
    );
    savedProfiles.push({
      name: profileName,
      ...formData,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("riskProfiles", JSON.stringify(savedProfiles));

    window.dispatchEvent(new CustomEvent("profileSaved"));
  };

  return (
    <div className="space-y-4" data-oid="84wngtm">
      <div className="grid grid-cols-2 gap-4" data-oid="9u_mti_">
        <div data-oid="ci.yhei">
          <label
            htmlFor="accountBalance"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="d01c592"
          >
            Account Balance ($)
          </label>
          <input
            type="number"
            id="accountBalance"
            name="accountBalance"
            value={formData.accountBalance}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="10000"
            step="0.01"
            data-oid="e-19vjm"
          />
        </div>

        <div data-oid="m._uniy">
          <label
            htmlFor="riskPercentage"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="-9h85jj"
          >
            Risk per Trade (%)
          </label>
          <input
            type="number"
            id="riskPercentage"
            name="riskPercentage"
            value={formData.riskPercentage}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1"
            step="0.1"
            min="0.1"
            max="10"
            data-oid="7zmr2bh"
          />
        </div>
      </div>

      <div data-oid="fla:.qd">
        <label
          htmlFor="currencyPair"
          className="block text-sm font-medium text-gray-700 mb-1"
          data-oid="pkn6dsd"
        >
          Currency Pair
        </label>
        <select
          id="currencyPair"
          name="currencyPair"
          value={formData.currencyPair}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-oid="9lv7p9k"
        >
          <option value="EUR/USD" data-oid="-:irii4">
            EUR/USD
          </option>
          <option value="GBP/USD" data-oid="x8iqavx">
            GBP/USD
          </option>
          <option value="USD/JPY" data-oid="rb90qp9">
            USD/JPY
          </option>
          <option value="USD/CHF" data-oid="cp8.lb1">
            USD/CHF
          </option>
          <option value="AUD/USD" data-oid="e9njii3">
            AUD/USD
          </option>
          <option value="USD/CAD" data-oid="won2z8-">
            USD/CAD
          </option>
          <option value="NZD/USD" data-oid="k6..j7r">
            NZD/USD
          </option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4" data-oid="aa3z7rd">
        <div data-oid="of608ra">
          <label
            htmlFor="entryPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="koqgt8t"
          >
            Entry Price
          </label>
          <input
            type="number"
            id="entryPrice"
            name="entryPrice"
            value={formData.entryPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1.1000"
            step="0.0001"
            data-oid="-uwakk-"
          />
        </div>

        <div data-oid="_xl4a2b">
          <label
            htmlFor="stopLoss"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="n7bmja."
          >
            Stop Loss
          </label>
          <input
            type="number"
            id="stopLoss"
            name="stopLoss"
            value={formData.stopLoss}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1.0950"
            step="0.0001"
            data-oid="4gbwd.e"
          />
        </div>

        <div data-oid="6o:f2tj">
          <label
            htmlFor="takeProfit"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="q5rxd_y"
          >
            Take Profit (Optional)
          </label>
          <input
            type="number"
            id="takeProfit"
            name="takeProfit"
            value={formData.takeProfit}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1.1100"
            step="0.0001"
            data-oid="3ccu34."
          />
        </div>
      </div>

      <div className="flex gap-2" data-oid="4pixgw6">
        <Button
          onClick={calculateRisk}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
          data-oid="etz:b0y"
        >
          Calculate Risk
        </Button>
        {calculation && (
          <Button
            onClick={saveProfile}
            variant="outline"
            className="px-6"
            data-oid="-sseako"
          >
            Save Profile
          </Button>
        )}
      </div>

      {calculation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="8ze29n7">
          <h3 className="text-lg font-semibold mb-3" data-oid="0cfo6_7">
            Calculation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm" data-oid="gnpk8za">
            <div data-oid="qm:yp5v">
              <span className="text-gray-600" data-oid="485w48i">
                Position Size:
              </span>
              <span className="font-semibold ml-2" data-oid=":r3dlyo">
                {calculation.positionSize.toLocaleString()} units
              </span>
            </div>
            <div data-oid="5rspttl">
              <span className="text-gray-600" data-oid="la9hl2f">
                Risk Amount:
              </span>
              <span
                className="font-semibold ml-2 text-red-600"
                data-oid="_ml28ld"
              >
                ${calculation.riskAmount.toLocaleString()}
              </span>
            </div>
            {calculation.rewardAmount > 0 && (
              <>
                <div data-oid="iqs4504">
                  <span className="text-gray-600" data-oid="oedig1_">
                    Reward Amount:
                  </span>
                  <span
                    className="font-semibold ml-2 text-green-600"
                    data-oid="usda9qu"
                  >
                    ${calculation.rewardAmount.toLocaleString()}
                  </span>
                </div>
                <div data-oid="83f0tq:">
                  <span className="text-gray-600" data-oid="he3t1.-">
                    Risk/Reward Ratio:
                  </span>
                  <span className="font-semibold ml-2" data-oid="b5qd::3">
                    1:{calculation.riskRewardRatio}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
