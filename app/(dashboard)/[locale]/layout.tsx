export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100" data-oid="z1hlnne">
      <nav className="bg-white shadow-sm border-b" data-oid="btk08m4">
        <div className="px-4 sm:px-6 lg:px-8" data-oid="ou.inl5">
          <div className="flex justify-between h-16" data-oid="gt12gis">
            <div className="flex items-center" data-oid="l:evv_c">
              <h1 className="text-xl font-semibold" data-oid="696ssu6">
                TradeNavigatorPro
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10" data-oid="a1b6c5u">
        <main data-oid="1f42h4.">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" data-oid="c9k3w8e">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
