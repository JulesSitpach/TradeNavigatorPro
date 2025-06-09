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
    <div className="space-y-4" data-oid="dx50wpe">
      <div className="grid grid-cols-2 gap-4" data-oid="dg14eeh">
        <div data-oid="97j3g7f">
          <label
            htmlFor="accountBalance"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid=":12s9b-"
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
            data-oid="tr82n7g"
          />
        </div>

        <div data-oid=".pyjl8p">
          <label
            htmlFor="riskPercentage"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="7-.s8t:"
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
            data-oid="x0-jyv0"
          />
        </div>
      </div>

      <div data-oid="yg3d4q_">
        <label
          htmlFor="currencyPair"
          className="block text-sm font-medium text-gray-700 mb-1"
          data-oid="hhbfg3g"
        >
          Currency Pair
        </label>
        <select
          id="currencyPair"
          name="currencyPair"
          value={formData.currencyPair}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-oid="8:6d0_a"
        >
          <option value="EUR/USD" data-oid="j_b:i6l">
            EUR/USD
          </option>
          <option value="GBP/USD" data-oid="228qeiw">
            GBP/USD
          </option>
          <option value="USD/JPY" data-oid="okijgmw">
            USD/JPY
          </option>
          <option value="USD/CHF" data-oid="91l7.w:">
            USD/CHF
          </option>
          <option value="AUD/USD" data-oid="1rjlwil">
            AUD/USD
          </option>
          <option value="USD/CAD" data-oid="lwezzfi">
            USD/CAD
          </option>
          <option value="NZD/USD" data-oid="--rvf-h">
            NZD/USD
          </option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4" data-oid="p.fpx8k">
        <div data-oid="t0-n1wd">
          <label
            htmlFor="entryPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="to30_e-"
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
            data-oid="e3qk0jv"
          />
        </div>

        <div data-oid="fxfv5qp">
          <label
            htmlFor="stopLoss"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="g34wgzm"
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
            data-oid="v1451t6"
          />
        </div>

        <div data-oid="5y6yknx">
          <label
            htmlFor="takeProfit"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid=":y7le1y"
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
            data-oid="y-l4xsk"
          />
        </div>
      </div>

      <div className="flex gap-2" data-oid="o6bn6:y">
        <Button
          onClick={calculateRisk}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
          data-oid="zyy._74"
        >
          Calculate Risk
        </Button>
        {calculation && (
          <Button
            onClick={saveProfile}
            variant="outline"
            className="px-6"
            data-oid="rm6nura"
          >
            Save Profile
          </Button>
        )}
      </div>

      {calculation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid=".-v8w1r">
          <h3 className="text-lg font-semibold mb-3" data-oid="37c4qh9">
            Calculation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm" data-oid="rzk_0yo">
            <div data-oid="3ju93br">
              <span className="text-gray-600" data-oid="85_m_9c">
                Position Size:
              </span>
              <span className="font-semibold ml-2" data-oid="xwb1-ec">
                {calculation.positionSize.toLocaleString()} units
              </span>
            </div>
            <div data-oid="g.70reh">
              <span className="text-gray-600" data-oid="kyvyol3">
                Risk Amount:
              </span>
              <span
                className="font-semibold ml-2 text-red-600"
                data-oid="bhxypts"
              >
                ${calculation.riskAmount.toLocaleString()}
              </span>
            </div>
            {calculation.rewardAmount > 0 && (
              <>
                <div data-oid="e9t4ef_">
                  <span className="text-gray-600" data-oid="o88et8r">
                    Reward Amount:
                  </span>
                  <span
                    className="font-semibold ml-2 text-green-600"
                    data-oid="rucr0y4"
                  >
                    ${calculation.rewardAmount.toLocaleString()}
                  </span>
                </div>
                <div data-oid="f-7:l8u">
                  <span className="text-gray-600" data-oid="32gq5pd">
                    Risk/Reward Ratio:
                  </span>
                  <span className="font-semibold ml-2" data-oid="q83cy.i">
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
