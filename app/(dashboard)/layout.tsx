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
      icon: <Icons.calculator className="h-5 w-5" data-oid="w27kvmv" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" data-oid="hlxaddq" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" data-oid="5.dxoy6" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" data-oid="q9qqfjm" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" data-oid="qeqcjh9" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden" data-oid="oqe73t9">
      {/* Sidebar */}
      <aside
        className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col"
        data-oid="qg1abrx"
      >
        {/* Logo and brand */}
        <div
          className="flex h-16 items-center border-b px-4"
          data-oid="q:zn76e"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            data-oid="ei6n9hh"
          >
            <Icons.logo className="h-6 w-6" data-oid="vpx0sl3" />
            <span className="font-bold" data-oid="yp8igi6">
              TradeNavigatorPro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" data-oid="6ymo13k">
          <div className="px-4 pb-2" data-oid="39ifd8p">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="9.s0kkz"
            >
              {t.dashboard}
            </h2>
            <div className="space-y-1" data-oid="khe67bs">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid=":osclcz"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" data-oid=".83m:-k" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="3ql1jcj"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" data-oid="hty2qza" />
                {t.reports}
              </Link>
            </div>
          </div>

          <div className="px-4 py-2" data-oid="8ysrm6q">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="qhw97lw"
            >
              {t.applications}
            </h2>
            <div className="space-y-1" data-oid="n:_77.r">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  data-oid="a5qlpao"
                >
                  <span className="mr-2" data-oid="5imt5zq">
                    {app.icon}
                  </span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2" data-oid="1gx3sha">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="kw7bb5o"
            >
              {t.settings}
            </h2>
            <div className="space-y-1" data-oid="pexho0e">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="bivfyq3"
              >
                <Icons.user className="mr-2 h-4 w-4" data-oid="l49pyo6" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="k:e:lhs"
              >
                <Icons.billing className="mr-2 h-4 w-4" data-oid="eri3jaa" />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t p-4" data-oid="6819d2o">
          <div className="flex items-center justify-between" data-oid="jmff6cl">
            <div className="flex items-center gap-2" data-oid="b5oms-6">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                data-oid="ti5pwaj"
              >
                <span
                  className="text-sm font-medium text-primary"
                  data-oid="rdet-7q"
                >
                  {session.user.firstName?.[0] ||
                    session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div data-oid="nx09mzg">
                <p className="text-sm font-medium" data-oid="f.whmex">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="-p.m9es">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild data-oid="pqqcxmv">
              <Link href={`/${locale}/api/auth/signout`} data-oid="b-i9az:">
                <Icons.logout className="h-4 w-4" data-oid="j_6:dhs" />
                <span className="sr-only" data-oid="uljgqoh">
                  {dictionary.auth.signOut}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden" data-oid="gnvv297">
        {/* Header */}
        <header
          className="flex h-16 items-center justify-between border-b px-4 md:px-6"
          data-oid="rt:oy37"
        >
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="evec75m"
          >
            <Icons.menu className="h-5 w-5" data-oid="siysk44" />
            <span className="sr-only" data-oid="52ctd-r">
              Menu
            </span>
          </Button>

          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1" data-oid="-jb6d4j">
            <div className="relative max-w-md" data-oid="bl1y-_b">
              <Icons.search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid=":t-wn_m"
              />

              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                data-oid="dni2bul"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2" data-oid="xwa:agc">
            {/* Notifications */}
            <Button variant="ghost" size="icon" data-oid="3x957nz">
              <Icons.bell className="h-5 w-5" data-oid="zfa8--l" />
              <span className="sr-only" data-oid="2w7e:5q">
                Notifications
              </span>
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} data-oid="spczcf-" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" data-oid="jllp5e6">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster data-oid="0_yheeu" />
    </div>
  );
}
