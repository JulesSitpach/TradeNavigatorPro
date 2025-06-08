// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div data-oid="u3ryuiv">
      <h1 data-oid="zaktafc">Dashboard</h1>
      <p data-oid="7-l6hye">Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
