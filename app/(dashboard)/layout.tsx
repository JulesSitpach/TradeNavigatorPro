import React from "react";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { i18n, LocaleKey } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Toaster } from "@/components/ui/toaster";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { auth } from "@/lib/auth";

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function DashboardLayout({
  children,
  params: { locale },
}: DashboardLayoutProps) {
  // Validate locale or return 404
  if (!i18n.locales.includes(locale as LocaleKey)) {
    notFound();
  }

  // Check authentication
  const session = await auth();
  if (!session || !session.user) {
    // Redirect to login if not authenticated
    redirect(`/${locale}/login`);
  }

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.navigation;
  const apps = dictionary.apps;

  // Core applications data for sidebar navigation
  const coreApplications = [
    {
      id: "cost-calculator",
      title: apps.costCalculator.title,
      icon: <Icons.calculator className="h-5 w-5" data-oid="adhhsf2" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" data-oid="aq4aw:m" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" data-oid=":ur2s1r" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" data-oid="zm5seje" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" data-oid="mi27oze" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden" data-oid="ss2teo_">
      {/* Sidebar */}
      <aside
        className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col"
        data-oid="ht1:q9-"
      >
        {/* Logo and brand */}
        <div
          className="flex h-16 items-center border-b px-4"
          data-oid="w6d8tvf"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            data-oid="3ekm3bu"
          >
            <Icons.logo className="h-6 w-6" data-oid="1r1mi1c" />
            <span className="font-bold" data-oid="y0ess38">
              TradeNavigatorPro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" data-oid="mm:o1m1">
          <div className="px-4 pb-2" data-oid="l8cmp4p">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="w3xq7z."
            >
              {t.dashboard}
            </h2>
            <div className="space-y-1" data-oid="s0tuzbf">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="0wpuj5g"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" data-oid="1xzdkz1" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="ysklhco"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" data-oid="5dszm-t" />
                {t.reports}
              </Link>
            </div>
          </div>

          <div className="px-4 py-2" data-oid="hqh.9ta">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="h2k296f"
            >
              {t.applications}
            </h2>
            <div className="space-y-1" data-oid="q3ydg0x">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  data-oid="jctrxx5"
                >
                  <span className="mr-2" data-oid="tx7dagr">
                    {app.icon}
                  </span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2" data-oid=":3-emgk">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="1whe7e1"
            >
              {t.settings}
            </h2>
            <div className="space-y-1" data-oid="74tdhpx">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid=".skxyvx"
              >
                <Icons.user className="mr-2 h-4 w-4" data-oid="b2589:z" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="1yg-71i"
              >
                <Icons.billing className="mr-2 h-4 w-4" data-oid="nwo217d" />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t p-4" data-oid="o3exm2v">
          <div className="flex items-center justify-between" data-oid="irw4t2l">
            <div className="flex items-center gap-2" data-oid="p0va0j0">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                data-oid="ymejz44"
              >
                <span
                  className="text-sm font-medium text-primary"
                  data-oid="i0wbzr-"
                >
                  {session.user.firstName?.[0] ||
                    session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div data-oid="715rxw.">
                <p className="text-sm font-medium" data-oid="y8wttj4">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="s4zl08_">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild data-oid="rmp.z.8">
              <Link href={`/${locale}/api/auth/signout`} data-oid="h7z:nz5">
                <Icons.logout className="h-4 w-4" data-oid="gprnnkn" />
                <span className="sr-only" data-oid="n8a2lhn">
                  {dictionary.auth.signOut}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden" data-oid="097vtt5">
        {/* Header */}
        <header
          className="flex h-16 items-center justify-between border-b px-4 md:px-6"
          data-oid="e192u.p"
        >
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="rknpifq"
          >
            <Icons.menu className="h-5 w-5" data-oid="5wgwdia" />
            <span className="sr-only" data-oid="xrdm1bj">
              Menu
            </span>
          </Button>

          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1" data-oid="7omf74r">
            <div className="relative max-w-md" data-oid="9riaax5">
              <Icons.search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="wobwj8k"
              />

              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                data-oid="5o4d3ev"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2" data-oid="hr.m1lk">
            {/* Notifications */}
            <Button variant="ghost" size="icon" data-oid="1az.p62">
              <Icons.bell className="h-5 w-5" data-oid="ju0crj-" />
              <span className="sr-only" data-oid="a46j12h">
                Notifications
              </span>
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} data-oid="014.-2o" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" data-oid="_.yjdr:">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster data-oid="llfse67" />
    </div>
  );
}
