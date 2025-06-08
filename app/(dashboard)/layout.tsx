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
      icon: <Icons.calculator className="h-5 w-5" data-oid="u_-ojj-" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" data-oid="cqa1z4o" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" data-oid="4a8b74a" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" data-oid="jlk1cwt" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" data-oid="ouh-agl" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden" data-oid="7_yj55d">
      {/* Sidebar */}
      <aside
        className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col"
        data-oid="629v3ch"
      >
        {/* Logo and brand */}
        <div
          className="flex h-16 items-center border-b px-4"
          data-oid="1ewxf1c"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            data-oid="-ob-zfz"
          >
            <Icons.logo className="h-6 w-6" data-oid="e_4_tqf" />
            <span className="font-bold" data-oid="9h:3fj9">
              TradeNavigatorPro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" data-oid="_:in8_o">
          <div className="px-4 pb-2" data-oid=".n4a39x">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="id416p:"
            >
              {t.dashboard}
            </h2>
            <div className="space-y-1" data-oid="hqks67r">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="10.8nih"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" data-oid="pe6i96d" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="gr3mrfl"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" data-oid="m.-rw0w" />
                {t.reports}
              </Link>
            </div>
          </div>

          <div className="px-4 py-2" data-oid="2o0fc.k">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="-6m2-nl"
            >
              {t.applications}
            </h2>
            <div className="space-y-1" data-oid="e8coo.j">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  data-oid="26xdxe2"
                >
                  <span className="mr-2" data-oid=".8xgo0h">
                    {app.icon}
                  </span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2" data-oid="79quc4m">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="--n5v9j"
            >
              {t.settings}
            </h2>
            <div className="space-y-1" data-oid="gcuyrum">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="-ygp46t"
              >
                <Icons.user className="mr-2 h-4 w-4" data-oid="izcoi.1" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="47a7wc2"
              >
                <Icons.billing className="mr-2 h-4 w-4" data-oid="-bhl5ec" />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t p-4" data-oid="dcfgr1i">
          <div className="flex items-center justify-between" data-oid="9yd9-gk">
            <div className="flex items-center gap-2" data-oid="bxpl5ok">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                data-oid="b_tqua."
              >
                <span
                  className="text-sm font-medium text-primary"
                  data-oid="q_--2:p"
                >
                  {session.user.firstName?.[0] ||
                    session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div data-oid="07gwy4-">
                <p className="text-sm font-medium" data-oid="jvcww61">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="qdqbs79">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild data-oid="hmwf.8b">
              <Link href={`/${locale}/api/auth/signout`} data-oid="0xmyjjz">
                <Icons.logout className="h-4 w-4" data-oid="hd:vo4r" />
                <span className="sr-only" data-oid="y0jbkpg">
                  {dictionary.auth.signOut}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden" data-oid="p208szg">
        {/* Header */}
        <header
          className="flex h-16 items-center justify-between border-b px-4 md:px-6"
          data-oid="_k.dpi8"
        >
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="rdlw15_"
          >
            <Icons.menu className="h-5 w-5" data-oid="bjouyo2" />
            <span className="sr-only" data-oid="sxtv9-a">
              Menu
            </span>
          </Button>

          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1" data-oid="olmx3iz">
            <div className="relative max-w-md" data-oid="anfh261">
              <Icons.search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="7nhz1--"
              />

              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                data-oid="a7:o6s."
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2" data-oid="ie_6z-:">
            {/* Notifications */}
            <Button variant="ghost" size="icon" data-oid="m1n5udc">
              <Icons.bell className="h-5 w-5" data-oid="dnnzw38" />
              <span className="sr-only" data-oid="v9x5szd">
                Notifications
              </span>
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} data-oid="1j_s7ze" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" data-oid="e8w4hwi">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster data-oid="wmtqxv_" />
    </div>
  );
}
