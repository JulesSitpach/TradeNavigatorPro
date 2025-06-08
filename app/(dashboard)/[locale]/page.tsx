export default function DashboardHome({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <div data-oid="2bpff_5">
      <h1 className="text-3xl font-bold text-gray-900" data-oid="ri2-xva">
        Dashboard
      </h1>
      <p className="mt-2 text-gray-600" data-oid="o2mif0j">
        Welcome to TradeNavigatorPro
      </p>

      <div
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="h97lg7c"
      >
        <div className="bg-white p-6 rounded-lg shadow" data-oid="z3:4xa:">
          <h3 className="text-lg font-medium" data-oid=".692ebg">
            Emergency Cost Calculator
          </h3>
          <p className="mt-2 text-gray-600" data-oid="30af0w2">
            Calculate tariff impacts instantly
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="ybnno79">
          <h3 className="text-lg font-medium" data-oid="443l2g.">
            Supply Chain Pivot Planner
          </h3>
          <p className="mt-2 text-gray-600" data-oid=".av1n5:">
            Find alternative suppliers
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="ro0qo3y">
          <h3 className="text-lg font-medium" data-oid="00fy321">
            Pricing Strategy Optimizer
          </h3>
          <p className="mt-2 text-gray-600" data-oid="p10ontq">
            Optimize your pricing strategy
          </p>
        </div>
      </div>
    </div>
  );
}
