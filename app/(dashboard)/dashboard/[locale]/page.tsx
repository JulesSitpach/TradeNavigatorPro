// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div data-oid="1on54k1">
      <h1 data-oid="souvxiw">Dashboard</h1>
      <p data-oid="7c7c.g4">Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
