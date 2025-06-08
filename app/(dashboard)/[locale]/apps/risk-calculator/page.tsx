import { Card } from "@/components/ui/card";
import { RiskCalculatorForm } from "@/components/apps/risk-calculator/risk-calculator-form";
import { RiskResults } from "@/components/apps/risk-calculator/risk-results";
import { RiskProfiles } from "@/components/apps/risk-calculator/risk-profiles";

export default function RiskCalculatorPage() {
  return (
    <div className="space-y-6" data-oid="o1gt-uc">
      <div data-oid="v7y9v23">
        <h1 className="text-3xl font-bold text-gray-900" data-oid="pe_axt6">
          Risk Management Calculator
        </h1>
        <p className="text-gray-600 mt-2" data-oid="lav01n:">
          Calculate position sizing, risk/reward ratios, and manage your trading
          risk
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="m4vvs5v">
        {/* Risk Calculator Form */}
        <div className="lg:col-span-2" data-oid="dbqe5w4">
          <Card className="p-6" data-oid="q2tf:1i">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="i7pvmjs"
            >
              Position Size Calculator
            </h2>
            <RiskCalculatorForm data-oid="f5aje2:" />
          </Card>
        </div>

        {/* Risk Results */}
        <div data-oid="1ai544x">
          <Card className="p-6" data-oid="-gusqyu">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="yk4k5nu"
            >
              Risk Analysis
            </h2>
            <RiskResults data-oid="gnz-as3" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="n4abgcx">
        {/* Risk Profiles */}
        <Card className="p-6" data-oid="azt9yiz">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="d_:d50q"
          >
            Saved Risk Profiles
          </h2>
          <RiskProfiles data-oid=".t2hwln" />
        </Card>

        {/* Portfolio Risk Overview */}
        <Card className="p-6" data-oid="7iexm2q">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="l4cme43"
          >
            Portfolio Risk Overview
          </h2>
          <div className="space-y-4" data-oid="7dx:dg7">
            <div
              className="flex justify-between items-center"
              data-oid="xv6y3-2"
            >
              <span className="text-sm text-gray-600" data-oid="d4-hqwg">
                Total Portfolio Risk
              </span>
              <span
                className="text-lg font-semibold text-red-600"
                data-oid="uf:4kzq"
              >
                2.5%
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid="b4fbq85"
            >
              <span className="text-sm text-gray-600" data-oid="nr30zpp">
                Open Positions
              </span>
              <span className="text-lg font-semibold" data-oid="y2mf54_">
                3
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid="4ye6yw."
            >
              <span className="text-sm text-gray-600" data-oid="9l.:1qg">
                Max Risk per Trade
              </span>
              <span className="text-lg font-semibold" data-oid="_95obic">
                1%
              </span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2"
              data-oid="tbrubak"
            >
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "25%" }}
                data-oid="9-hp2y0"
              ></div>
            </div>
            <p className="text-xs text-gray-500" data-oid="nqn00l7">
              Risk utilization: 25% of maximum
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
