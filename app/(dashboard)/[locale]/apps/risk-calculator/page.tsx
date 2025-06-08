import { Card } from "@/components/ui/card";
import { RiskCalculatorForm } from "@/components/apps/risk-calculator/risk-calculator-form";
import { RiskResults } from "@/components/apps/risk-calculator/risk-results";
import { RiskProfiles } from "@/components/apps/risk-calculator/risk-profiles";

export default function RiskCalculatorPage() {
  return (
    <div className="space-y-6" data-oid="2djf.xq">
      <div data-oid="bf86_me">
        <h1 className="text-3xl font-bold text-gray-900" data-oid="pdcs4ed">
          Risk Management Calculator
        </h1>
        <p className="text-gray-600 mt-2" data-oid=":_httda">
          Calculate position sizing, risk/reward ratios, and manage your trading
          risk
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="tka_pa7">
        {/* Risk Calculator Form */}
        <div className="lg:col-span-2" data-oid="bhzgpfd">
          <Card className="p-6" data-oid="v:tfkdh">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="omr9jhd"
            >
              Position Size Calculator
            </h2>
            <RiskCalculatorForm data-oid="w_ju-s8" />
          </Card>
        </div>

        {/* Risk Results */}
        <div data-oid="7gpnfss">
          <Card className="p-6" data-oid="kctq92p">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="gn-hhq0"
            >
              Risk Analysis
            </h2>
            <RiskResults data-oid="i2hhmut" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="sqphfnx">
        {/* Risk Profiles */}
        <Card className="p-6" data-oid="zn5nkkm">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="vpovt1j"
          >
            Saved Risk Profiles
          </h2>
          <RiskProfiles data-oid="nsqn8gp" />
        </Card>

        {/* Portfolio Risk Overview */}
        <Card className="p-6" data-oid="-zlbj11">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="slz1frs"
          >
            Portfolio Risk Overview
          </h2>
          <div className="space-y-4" data-oid="7f42jkk">
            <div
              className="flex justify-between items-center"
              data-oid="6kjxdkv"
            >
              <span className="text-sm text-gray-600" data-oid="t2uyqxg">
                Total Portfolio Risk
              </span>
              <span
                className="text-lg font-semibold text-red-600"
                data-oid="lsq16fy"
              >
                2.5%
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid="gbz-ij5"
            >
              <span className="text-sm text-gray-600" data-oid="bvdtvkh">
                Open Positions
              </span>
              <span className="text-lg font-semibold" data-oid="k_0m8:y">
                3
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid="mxhrpfi"
            >
              <span className="text-sm text-gray-600" data-oid=".-ruau7">
                Max Risk per Trade
              </span>
              <span className="text-lg font-semibold" data-oid="aayxjnu">
                1%
              </span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2"
              data-oid="ge4jzw1"
            >
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "25%" }}
                data-oid="70xr8ui"
              ></div>
            </div>
            <p className="text-xs text-gray-500" data-oid="xdwwvh0">
              Risk utilization: 25% of maximum
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
