// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div data-oid="89edh3t">
      <h1 data-oid="pug.pcn">Dashboard</h1>
      <p data-oid="r:gr2zg">Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
