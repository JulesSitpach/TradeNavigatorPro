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
    <div className="space-y-4" data-oid="1mndle7">
      <div className="grid grid-cols-2 gap-4" data-oid="c1deusr">
        <div data-oid="yz._sk6">
          <label
            htmlFor="accountBalance"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="-5v13h6"
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
            data-oid="fuc2ves"
          />
        </div>

        <div data-oid="m:souqs">
          <label
            htmlFor="riskPercentage"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="i--itbu"
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
            data-oid=".0rg_e:"
          />
        </div>
      </div>

      <div data-oid="vka0mv7">
        <label
          htmlFor="currencyPair"
          className="block text-sm font-medium text-gray-700 mb-1"
          data-oid="4ev1frw"
        >
          Currency Pair
        </label>
        <select
          id="currencyPair"
          name="currencyPair"
          value={formData.currencyPair}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          data-oid="c1j:caj"
        >
          <option value="EUR/USD" data-oid="gz_rh0p">
            EUR/USD
          </option>
          <option value="GBP/USD" data-oid="qt3ahcp">
            GBP/USD
          </option>
          <option value="USD/JPY" data-oid="kdqdew2">
            USD/JPY
          </option>
          <option value="USD/CHF" data-oid="o_2azyt">
            USD/CHF
          </option>
          <option value="AUD/USD" data-oid="yz5ezwo">
            AUD/USD
          </option>
          <option value="USD/CAD" data-oid="gictc6:">
            USD/CAD
          </option>
          <option value="NZD/USD" data-oid="2brxdpi">
            NZD/USD
          </option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4" data-oid="a5vup29">
        <div data-oid="g1cg930">
          <label
            htmlFor="entryPrice"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="6h8c5oa"
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
            data-oid="vh3ob9n"
          />
        </div>

        <div data-oid="y_j2man">
          <label
            htmlFor="stopLoss"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="5ej_hfg"
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
            data-oid="e1t1:s7"
          />
        </div>

        <div data-oid="45ihryp">
          <label
            htmlFor="takeProfit"
            className="block text-sm font-medium text-gray-700 mb-1"
            data-oid="fjmp-uu"
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
            data-oid="y_t0944"
          />
        </div>
      </div>

      <div className="flex gap-2" data-oid="7iiz6v2">
        <Button
          onClick={calculateRisk}
          className="flex-1 bg-blue-600 text-white hover:bg-blue-700"
          data-oid="r0f_sb2"
        >
          Calculate Risk
        </Button>
        {calculation && (
          <Button
            onClick={saveProfile}
            variant="outline"
            className="px-6"
            data-oid="y9124zm"
          >
            Save Profile
          </Button>
        )}
      </div>

      {calculation && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg" data-oid="u1jc6zl">
          <h3 className="text-lg font-semibold mb-3" data-oid="bwunr69">
            Calculation Results
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm" data-oid="9wc8678">
            <div data-oid="62kw_uw">
              <span className="text-gray-600" data-oid="7opeg10">
                Position Size:
              </span>
              <span className="font-semibold ml-2" data-oid="37p436e">
                {calculation.positionSize.toLocaleString()} units
              </span>
            </div>
            <div data-oid="4n:7qdy">
              <span className="text-gray-600" data-oid="jfu17ya">
                Risk Amount:
              </span>
              <span
                className="font-semibold ml-2 text-red-600"
                data-oid="9v.3qkw"
              >
                ${calculation.riskAmount.toLocaleString()}
              </span>
            </div>
            {calculation.rewardAmount > 0 && (
              <>
                <div data-oid="ld_u_yn">
                  <span className="text-gray-600" data-oid="99wkv4w">
                    Reward Amount:
                  </span>
                  <span
                    className="font-semibold ml-2 text-green-600"
                    data-oid="kicl8qj"
                  >
                    ${calculation.rewardAmount.toLocaleString()}
                  </span>
                </div>
                <div data-oid="bb44xv:">
                  <span className="text-gray-600" data-oid="yvq3gc5">
                    Risk/Reward Ratio:
                  </span>
                  <span className="font-semibold ml-2" data-oid="yblumol">
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
