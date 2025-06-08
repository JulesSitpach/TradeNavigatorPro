export default function DashboardHome({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <div data-oid="ddanp5b">
      <h1 className="text-3xl font-bold text-gray-900" data-oid=".fd_6et">
        Dashboard
      </h1>
      <p className="mt-2 text-gray-600" data-oid="i4d_t8d">
        Welcome to TradeNavigatorPro
      </p>

      <div
        className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        data-oid="st2xeik"
      >
        <div className="bg-white p-6 rounded-lg shadow" data-oid="omc7j8h">
          <h3 className="text-lg font-medium" data-oid="o0:6.6a">
            Emergency Cost Calculator
          </h3>
          <p className="mt-2 text-gray-600" data-oid="34vpc9h">
            Calculate tariff impacts instantly
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="cz25.v6">
          <h3 className="text-lg font-medium" data-oid="4zabgga">
            Supply Chain Pivot Planner
          </h3>
          <p className="mt-2 text-gray-600" data-oid=":abm_9h">
            Find alternative suppliers
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow" data-oid="c7v463u">
          <h3 className="text-lg font-medium" data-oid="6bfapvg">
            Pricing Strategy Optimizer
          </h3>
          <p className="mt-2 text-gray-600" data-oid="8jr9uyf">
            Optimize your pricing strategy
          </p>
        </div>
      </div>
    </div>
  );
}
