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
    <div className="space-y-4" data-oid="sg12m3w">
      <div className="grid grid-cols-2 gap-4" data-oid="skztobv">
        <div data-oid="2h.5zga">
          <label
            htmlFor="accountBalance"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="6fr9ez_"
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
            data-oid="sh4msnc"
          />
        </div>

        <div data-oid="lxh9::o">
          <label
            htmlFor="riskPercentage"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="_r06zed"
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
            data-oid="k5u2gj-"
          />
        </div>
      </div>

      <div data-oid="nkf4ji1">
        <label
          htmlFor="currencyPair"
          className="block text-sm font-medium text-gray-700 mb-1"
          data-oid="12m9j.9"
        >
          Currency Pair
        </label>
        <select
          id="currencyPair"
          name="currencyPair"
          value={formData.currencyPair}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-oid="c32hhj_"
        >
          <option value="EUR/USD" data-oid="e_ny05d">
            EUR/USD
          </option>
          <option value="GBP/USD" data-oid="gfar2a1">
            GBP/USD
          </option>
          <option value="USD/JPY" data-oid="405-9m8">
            USD/JPY
          </option>
          <option value="USD/CHF" data-oid="4gunl-s">
            USD/CHF
          </option>
          <option value="AUD/USD" data-oid="xfb-kea">
            AUD/USD
          </option>
          <option value="USD/CAD" data-oid="94g46_s">
            USD/CAD
          </option>
          <option value="NZD/USD" data-oid="y-o6:il">
            NZD/USD
          </option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4" data-oid="wm43z2d">
        <div data-oid="1qwri:e">
          <label
            htmlFor="entryPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="rso0apf"
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
            data-oid="h-dy4ed"
          />
        </div>

        <div data-oid="1onj891">
          <label
            htmlFor="stopLoss"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="o1ua:m6"
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
            data-oid="s9m9y4y"
          />
        </div>

        <div data-oid="pkkrixb">
          <label
            htmlFor="takeProfit"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="4cnw5l7"
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
            data-oid="h.px:x4"
          />
        </div>
      </div>

      <div className="flex gap-2" data-oid="upz278s">
        <Button
          onClick={calculateRisk}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
          data-oid="ozpwy8n"
        >
          Calculate Risk
        </Button>
        {calculation && (
          <Button
            onClick={saveProfile}
            variant="outline"
            className="px-6"
            data-oid="2m._50k"
          >
            Save Profile
          </Button>
        )}
      </div>

      {calculation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="ku77sot">
          <h3 className="text-lg font-semibold mb-3" data-oid="pru.sot">
            Calculation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm" data-oid="ie9k3ny">
            <div data-oid="lbrl-4c">
              <span className="text-gray-600" data-oid="vioe6by">
                Position Size:
              </span>
              <span className="font-semibold ml-2" data-oid="_sw:hur">
                {calculation.positionSize.toLocaleString()} units
              </span>
            </div>
            <div data-oid="2gw.719">
              <span className="text-gray-600" data-oid="1_8ac71">
                Risk Amount:
              </span>
              <span
                className="font-semibold ml-2 text-red-600"
                data-oid="5ow:t0l"
              >
                ${calculation.riskAmount.toLocaleString()}
              </span>
            </div>
            {calculation.rewardAmount > 0 && (
              <>
                <div data-oid="27czlk4">
                  <span className="text-gray-600" data-oid="n:1gz66">
                    Reward Amount:
                  </span>
                  <span
                    className="font-semibold ml-2 text-green-600"
                    data-oid="oxy0g1w"
                  >
                    ${calculation.rewardAmount.toLocaleString()}
                  </span>
                </div>
                <div data-oid="hlr-mti">
                  <span className="text-gray-600" data-oid="bpw9lvw">
                    Risk/Reward Ratio:
                  </span>
                  <span className="font-semibold ml-2" data-oid="795l3kl">
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
