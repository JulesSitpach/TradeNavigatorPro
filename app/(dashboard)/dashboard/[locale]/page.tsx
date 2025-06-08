// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div data-oid="efziv04">
      <h1 data-oid="02udsg3">Dashboard</h1>
      <p data-oid="z-x5pwq">Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
