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
    <div className="space-y-4" data-oid="671itm6">
      <div className="grid grid-cols-2 gap-4" data-oid="uteuffo">
        <div data-oid="j2ka-ey">
          <label
            htmlFor="accountBalance"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="brip7hx"
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
            data-oid="bk5bkix"
          />
        </div>

        <div data-oid=":0eo_82">
          <label
            htmlFor="riskPercentage"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="twzjzkl"
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
            data-oid="yqw11pk"
          />
        </div>
      </div>

      <div data-oid="d.amje.">
        <label
          htmlFor="currencyPair"
          className="block text-sm font-medium text-gray-700 mb-1"
          data-oid="l:gy55l"
        >
          Currency Pair
        </label>
        <select
          id="currencyPair"
          name="currencyPair"
          value={formData.currencyPair}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-oid="zd2yxv8"
        >
          <option value="EUR/USD" data-oid="o_f:-ij">
            EUR/USD
          </option>
          <option value="GBP/USD" data-oid="8haxhau">
            GBP/USD
          </option>
          <option value="USD/JPY" data-oid="t2vsf46">
            USD/JPY
          </option>
          <option value="USD/CHF" data-oid="i:j:fmk">
            USD/CHF
          </option>
          <option value="AUD/USD" data-oid="s-:pmp.">
            AUD/USD
          </option>
          <option value="USD/CAD" data-oid="lwid-7a">
            USD/CAD
          </option>
          <option value="NZD/USD" data-oid="k0i109o">
            NZD/USD
          </option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4" data-oid=":3-mnwy">
        <div data-oid="uu6fwwg">
          <label
            htmlFor="entryPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="1fxdsl."
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
            data-oid="2n7ta27"
          />
        </div>

        <div data-oid="fgvkb7b">
          <label
            htmlFor="stopLoss"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="._25bk8"
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
            data-oid="uvpda:n"
          />
        </div>

        <div data-oid="dr.t.0s">
          <label
            htmlFor="takeProfit"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="7ua-q.a"
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
            data-oid="6ewl5-9"
          />
        </div>
      </div>

      <div className="flex gap-2" data-oid="q0yegap">
        <Button
          onClick={calculateRisk}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
          data-oid="p7dzktd"
        >
          Calculate Risk
        </Button>
        {calculation && (
          <Button
            onClick={saveProfile}
            variant="outline"
            className="px-6"
            data-oid="u57zxip"
          >
            Save Profile
          </Button>
        )}
      </div>

      {calculation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="r86z7i9">
          <h3 className="text-lg font-semibold mb-3" data-oid="cfumig9">
            Calculation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm" data-oid="ery--5:">
            <div data-oid="i2g8lgf">
              <span className="text-gray-600" data-oid=":ak2r1v">
                Position Size:
              </span>
              <span className="font-semibold ml-2" data-oid="_m0mn0w">
                {calculation.positionSize.toLocaleString()} units
              </span>
            </div>
            <div data-oid="8oa2sww">
              <span className="text-gray-600" data-oid="axjuy91">
                Risk Amount:
              </span>
              <span
                className="font-semibold ml-2 text-red-600"
                data-oid="mfooraa"
              >
                ${calculation.riskAmount.toLocaleString()}
              </span>
            </div>
            {calculation.rewardAmount > 0 && (
              <>
                <div data-oid="mjlyhbj">
                  <span className="text-gray-600" data-oid="nyw1203">
                    Reward Amount:
                  </span>
                  <span
                    className="font-semibold ml-2 text-green-600"
                    data-oid="r7g3f6n"
                  >
                    ${calculation.rewardAmount.toLocaleString()}
                  </span>
                </div>
                <div data-oid="zs43bcm">
                  <span className="text-gray-600" data-oid="473fsuy">
                    Risk/Reward Ratio:
                  </span>
                  <span className="font-semibold ml-2" data-oid="cqszb9-">
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
