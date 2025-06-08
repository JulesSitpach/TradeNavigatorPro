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
      icon: <Icons.calculator className="h-5 w-5" data-oid="d5hlhgx" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" data-oid="nbcltcn" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" data-oid="rjvvnc3" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" data-oid=":4f.z8f" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" data-oid="fyr_ie2" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden" data-oid="dv3xkkr">
      {/* Sidebar */}
      <aside
        className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col"
        data-oid="avrlgwv"
      >
        {/* Logo and brand */}
        <div
          className="flex h-16 items-center border-b px-4"
          data-oid="dabr6o0"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            data-oid="vcj01kq"
          >
            <Icons.logo className="h-6 w-6" data-oid="_mj23nh" />
            <span className="font-bold" data-oid="c7os-bu">
              TradeNavigatorPro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" data-oid="1s5ouai">
          <div className="px-4 pb-2" data-oid="o99a4bs">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="z4r7wmo"
            >
              {t.dashboard}
            </h2>
            <div className="space-y-1" data-oid="h7bouzz">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="20rh5my"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" data-oid="de6k8rn" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="4w3e5cg"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" data-oid="j0-w4lr" />
                {t.reports}
              </Link>
            </div>
          </div>

          <div className="px-4 py-2" data-oid="n5b3zxc">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="knwpxsd"
            >
              {t.applications}
            </h2>
            <div className="space-y-1" data-oid="09bn6ka">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  data-oid="1whaait"
                >
                  <span className="mr-2" data-oid="6_pwhd6">
                    {app.icon}
                  </span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2" data-oid="nesa6:5">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid=":e0:qco"
            >
              {t.settings}
            </h2>
            <div className="space-y-1" data-oid="7i6pgfc">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="x10s8:l"
              >
                <Icons.user className="mr-2 h-4 w-4" data-oid="wi60pfo" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="kfej-lq"
              >
                <Icons.billing className="mr-2 h-4 w-4" data-oid="km3oacw" />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t p-4" data-oid="fmwbcjy">
          <div className="flex items-center justify-between" data-oid="htsn8br">
            <div className="flex items-center gap-2" data-oid="2nbbypm">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                data-oid="r729l6y"
              >
                <span
                  className="text-sm font-medium text-primary"
                  data-oid="5oguv_p"
                >
                  {session.user.firstName?.[0] ||
                    session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div data-oid="z0_e_u7">
                <p className="text-sm font-medium" data-oid="yeggpzq">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="..c7t_1">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild data-oid="ucqqbl4">
              <Link href={`/${locale}/api/auth/signout`} data-oid="-.yu1pf">
                <Icons.logout className="h-4 w-4" data-oid="-zsm:xe" />
                <span className="sr-only" data-oid="bo7dbmu">
                  {dictionary.auth.signOut}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden" data-oid="d0chxxn">
        {/* Header */}
        <header
          className="flex h-16 items-center justify-between border-b px-4 md:px-6"
          data-oid="gaqkhlv"
        >
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="ih-ypd0"
          >
            <Icons.menu className="h-5 w-5" data-oid="cgqi5h2" />
            <span className="sr-only" data-oid=":m0j0rj">
              Menu
            </span>
          </Button>

          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1" data-oid="0kf4612">
            <div className="relative max-w-md" data-oid="cfrl583">
              <Icons.search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="-adj4rc"
              />

              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                data-oid="y7opv5l"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2" data-oid="-l0xzqq">
            {/* Notifications */}
            <Button variant="ghost" size="icon" data-oid="0718wvy">
              <Icons.bell className="h-5 w-5" data-oid="4kjsruz" />
              <span className="sr-only" data-oid="z.jeipx">
                Notifications
              </span>
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} data-oid=".7t2dpn" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" data-oid="v4xf4j7">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster data-oid="4l7y882" />
    </div>
  );
}
