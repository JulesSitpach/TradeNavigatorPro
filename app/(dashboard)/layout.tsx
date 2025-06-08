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
      icon: <Icons.calculator className="h-5 w-5" data-oid="i2t9gzi" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" data-oid="-b27f:8" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" data-oid="jukiby6" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" data-oid="jt7v4-m" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" data-oid="bl5it1g" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden" data-oid="_e.8xce">
      {/* Sidebar */}
      <aside
        className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col"
        data-oid="b92j.jz"
      >
        {/* Logo and brand */}
        <div
          className="flex h-16 items-center border-b px-4"
          data-oid="a4uhdy0"
        >
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2"
            data-oid="9q17qj8"
          >
            <Icons.logo className="h-6 w-6" data-oid="bawdgld" />
            <span className="font-bold" data-oid=".uagh3y">
              TradeNavigatorPro
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4" data-oid="qei9xt_">
          <div className="px-4 pb-2" data-oid="hpwwymt">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="pl4be9-"
            >
              {t.dashboard}
            </h2>
            <div className="space-y-1" data-oid="nnth3qk">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="3lblknr"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" data-oid="1mimbw5" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="ru9a3e0"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" data-oid="io75.5v" />
                {t.reports}
              </Link>
            </div>
          </div>

          <div className="px-4 py-2" data-oid="08272cc">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="up6he67"
            >
              {t.applications}
            </h2>
            <div className="space-y-1" data-oid="dolooi9">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                  data-oid=".yze43:"
                >
                  <span className="mr-2" data-oid="0q:fx::">
                    {app.icon}
                  </span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="px-4 py-2" data-oid="nuv5pol">
            <h2
              className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
              data-oid="yxv0kng"
            >
              {t.settings}
            </h2>
            <div className="space-y-1" data-oid="ls-i2:5">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="noew00a"
              >
                <Icons.user className="mr-2 h-4 w-4" data-oid="7ccsj:y" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                data-oid="vpy:r1k"
              >
                <Icons.billing className="mr-2 h-4 w-4" data-oid="sy20gg." />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>

        {/* User section */}
        <div className="mt-auto border-t p-4" data-oid="i1-z:ye">
          <div className="flex items-center justify-between" data-oid=".ss5x5g">
            <div className="flex items-center gap-2" data-oid="mo3lu4b">
              <div
                className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center"
                data-oid="xe:n3fe"
              >
                <span
                  className="text-sm font-medium text-primary"
                  data-oid="lnp-05l"
                >
                  {session.user.firstName?.[0] ||
                    session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div data-oid="gkl.xoz">
                <p className="text-sm font-medium" data-oid=".k55af9">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground" data-oid="nvwicbz">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="icon" asChild data-oid="1zwp62.">
              <Link href={`/${locale}/api/auth/signout`} data-oid="x3d3vh5">
                <Icons.logout className="h-4 w-4" data-oid="caxd:u8" />
                <span className="sr-only" data-oid="6_ljzc3">
                  {dictionary.auth.signOut}
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden" data-oid="w5zucfa">
        {/* Header */}
        <header
          className="flex h-16 items-center justify-between border-b px-4 md:px-6"
          data-oid="58n14i:"
        >
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            data-oid="97:hwrw"
          >
            <Icons.menu className="h-5 w-5" data-oid="s-.cpod" />
            <span className="sr-only" data-oid="524f8cs">
              Menu
            </span>
          </Button>

          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1" data-oid="uqwckz-">
            <div className="relative max-w-md" data-oid="aw9xz9t">
              <Icons.search
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                data-oid="y8v.iiq"
              />

              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                data-oid="ye24j75"
              />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2" data-oid="w.71-4o">
            {/* Notifications */}
            <Button variant="ghost" size="icon" data-oid="b_efrcu">
              <Icons.bell className="h-5 w-5" data-oid="fto9p8-" />
              <span className="sr-only" data-oid="1n9-77j">
                Notifications
              </span>
            </Button>

            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} data-oid="7p8b:vm" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto" data-oid="6h9u732">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster data-oid=".2q6ahn" />
    </div>
  );
}
