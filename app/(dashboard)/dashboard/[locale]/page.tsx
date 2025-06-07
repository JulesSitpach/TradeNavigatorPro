// Dashboard landing page component for /dashboard/[locale]
export default async function DashboardPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard for locale: {locale}</p>
      {/* Add your dashboard content here */}
    </div>
  );
}
