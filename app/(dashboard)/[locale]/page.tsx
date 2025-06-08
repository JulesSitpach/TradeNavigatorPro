export default function DashboardHome({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <div data-oid="emias7l">
      <h1 className="text-3xl font-bold text-gray-900" data-oid="rbx-ue8">
        Dashboard
      </h1>
      <p className="mt-2 text-gray-600" data-oid="3yi51ql">
        Welcome to TradeNavigatorPro
      </p>

      <div
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="6afeev_"
      >
        <div className="bg-white p-6 rounded-lg shadow" data-oid="rorv7ma">
          <h3 className="text-lg font-medium" data-oid="qd30fpx">
            Emergency Cost Calculator
          </h3>
          <p className="mt-2 text-gray-600" data-oid="2f59h6_">
            Calculate tariff impacts instantly
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="no53owq">
          <h3 className="text-lg font-medium" data-oid="l0paiws">
            Supply Chain Pivot Planner
          </h3>
          <p className="mt-2 text-gray-600" data-oid="zttu_ql">
            Find alternative suppliers
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="b:dyy7y">
          <h3 className="text-lg font-medium" data-oid="q1ljfr2">
            Pricing Strategy Optimizer
          </h3>
          <p className="mt-2 text-gray-600" data-oid="40mcdu2">
            Optimize your pricing strategy
          </p>
        </div>
      </div>
    </div>
  );
}
