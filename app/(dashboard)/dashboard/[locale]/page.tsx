// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div data-oid="n:1ep::">
      <h1 data-oid="-m9el:-">Dashboard</h1>
      <p data-oid="ibaf9wc">Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
