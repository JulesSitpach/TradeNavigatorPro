export default function DashboardHome({
  params,
}: {
  params: { locale: string };
}) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-2 text-gray-600">Welcome to TradeNavigatorPro</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Emergency Cost Calculator</h3>
          <p className="mt-2 text-gray-600">
            Calculate tariff impacts instantly
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Supply Chain Pivot Planner</h3>
          <p className="mt-2 text-gray-600">Find alternative suppliers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium">Pricing Strategy Optimizer</h3>
          <p className="mt-2 text-gray-600">Optimize your pricing strategy</p>
        </div>
      </div>
    </div>
  );
}
