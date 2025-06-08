export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100" data-oid="85.3:f-">
      <nav className="bg-white shadow-sm border-b" data-oid="0jlosss">
        <div className="px-4 sm:px-6 lg:px-8" data-oid="kcs12u0">
          <div className="flex justify-between h-16" data-oid="t-.a7ha">
            <div className="flex items-center" data-oid="p1z-x-f">
              <h1 className="text-xl font-semibold" data-oid="-bivtio">
                TradeNavigatorPro
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10" data-oid="6.3p:gj">
        <main data-oid="hm3otwz">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" data-oid="8u_4bb3">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
