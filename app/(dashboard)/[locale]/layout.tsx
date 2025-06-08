export default function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-gray-100" data-oid="zhx2pkl">
      <nav className="bg-white shadow-sm border-b" data-oid="v5-44:7">
        <div className="px-4 sm:px-6 lg:px-8" data-oid="m1xp3li">
          <div className="flex justify-between h-16" data-oid="emn6hbg">
            <div className="flex items-center" data-oid="5x9i21k">
              <h1 className="text-xl font-semibold" data-oid="pu9qzv_">
                TradeNavigatorPro
              </h1>
            </div>
          </div>
        </div>
      </nav>
      <div className="py-10" data-oid="zgu46ct">
        <main data-oid="r:8r92y">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" data-oid="ywveua2">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
