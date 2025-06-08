import { Card } from "@/components/ui/card";
import { RiskCalculatorForm } from "@/components/apps/risk-calculator/risk-calculator-form";
import { RiskResults } from "@/components/apps/risk-calculator/risk-results";
import { RiskProfiles } from "@/components/apps/risk-calculator/risk-profiles";

export default function RiskCalculatorPage() {
  return (
    <div className="space-y-6" data-oid="dy6fegp">
      <div data-oid=".pt9kmu">
        <h1 className="text-3xl font-bold text-gray-900" data-oid="1p8mti_">
          Risk Management Calculator
        </h1>
        <p className="text-gray-600 mt-2" data-oid="u8l7xjd">
          Calculate position sizing, risk/reward ratios, and manage your trading
          risk
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" data-oid="5ytyfeb">
        {/* Risk Calculator Form */}
        <div className="lg:col-span-2" data-oid="xksptuz">
          <Card className="p-6" data-oid="hyk4v9m">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="1nh1b.:"
            >
              Position Size Calculator
            </h2>
            <RiskCalculatorForm data-oid="z_z.2zt" />
          </Card>
        </div>

        {/* Risk Results */}
        <div data-oid="g-cnzji">
          <Card className="p-6" data-oid="u:nad1:">
            <h2
              className="text-xl font-semibold text-gray-900 mb-4"
              data-oid="mcaw3_e"
            >
              Risk Analysis
            </h2>
            <RiskResults data-oid="htf1hjk" />
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="vv1ub-i">
        {/* Risk Profiles */}
        <Card className="p-6" data-oid="je0kghw">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="ip44s7z"
          >
            Saved Risk Profiles
          </h2>
          <RiskProfiles data-oid="jqwo-_i" />
        </Card>

        {/* Portfolio Risk Overview */}
        <Card className="p-6" data-oid="plrao1j">
          <h2
            className="text-xl font-semibold text-gray-900 mb-4"
            data-oid="h0-a_x3"
          >
            Portfolio Risk Overview
          </h2>
          <div className="space-y-4" data-oid="454xc9r">
            <div
              className="flex justify-between items-center"
              data-oid="q69c82f"
            >
              <span className="text-sm text-gray-600" data-oid="0w6ihvb">
                Total Portfolio Risk
              </span>
              <span
                className="text-lg font-semibold text-red-600"
                data-oid="p81ln67"
              >
                2.5%
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid=".dj4pxt"
            >
              <span className="text-sm text-gray-600" data-oid="bcz.cmj">
                Open Positions
              </span>
              <span className="text-lg font-semibold" data-oid="k4hzc1w">
                3
              </span>
            </div>
            <div
              className="flex justify-between items-center"
              data-oid="ww-vexp"
            >
              <span className="text-sm text-gray-600" data-oid="mykp415">
                Max Risk per Trade
              </span>
              <span className="text-lg font-semibold" data-oid="-zu28ok">
                1%
              </span>
            </div>
            <div
              className="w-full bg-gray-200 rounded-full h-2"
              data-oid="x6h1kv:"
            >
              <div
                className="bg-red-500 h-2 rounded-full"
                style={{ width: "25%" }}
                data-oid="hlj:_9:"
              ></div>
            </div>
            <p className="text-xs text-gray-500" data-oid="1-8cu7t">
              Risk utilization: 25% of maximum
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
