import React from 'react';
import Link from 'next/link';
import { redirect, notFound } from 'next/navigation';
import { i18n, LocaleKey } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { auth } from '@/lib/auth';

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
      id: 'cost-calculator',
      title: apps.costCalculator.title,
      icon: <Icons.calculator className="h-5 w-5" />,
      href: `/${locale}/apps/cost-calculator`,
    },
    {
      id: 'supply-pivot',
      title: apps.supplyChainPlanner.title,
      icon: <Icons.network className="h-5 w-5" />,
      href: `/${locale}/apps/supply-pivot`,
    },
    {
      id: 'pricing-optimizer',
      title: apps.pricingOptimizer.title,
      icon: <Icons.dollarSign className="h-5 w-5" />,
      href: `/${locale}/apps/pricing-optimizer`,
    },
    {
      id: 'tariff-tracker',
      title: apps.tariffTracker.title,
      icon: <Icons.clock className="h-5 w-5" />,
      href: `/${locale}/apps/tariff-tracker`,
    },
    {
      id: 'route-optimizer',
      title: apps.routeOptimizer.title,
      icon: <Icons.route className="h-5 w-5" />,
      href: `/${locale}/apps/route-optimizer`,
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-shrink-0 border-r bg-background md:flex md:flex-col">
        {/* Logo and brand */}
        <div className="flex h-16 items-center border-b px-4">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold">TradeNavigatorPro</span>
          </Link>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 pb-2">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t.dashboard}
            </h2>
            <div className="space-y-1">
              <Link
                href={`/${locale}`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Icons.dashboard className="mr-2 h-4 w-4" />
                {t.dashboard}
              </Link>
              <Link
                href={`/${locale}/reports`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Icons.fileChart className="mr-2 h-4 w-4" />
                {t.reports}
              </Link>
            </div>
          </div>
          
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t.applications}
            </h2>
            <div className="space-y-1">
              {coreApplications.map((app) => (
                <Link
                  key={app.id}
                  href={app.href}
                  className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="mr-2">{app.icon}</span>
                  {app.title}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="px-4 py-2">
            <h2 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {t.settings}
            </h2>
            <div className="space-y-1">
              <Link
                href={`/${locale}/settings/profile`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Icons.user className="mr-2 h-4 w-4" />
                {t.account}
              </Link>
              <Link
                href={`/${locale}/settings/billing`}
                className="flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <Icons.billing className="mr-2 h-4 w-4" />
                {dictionary.settings.billing}
              </Link>
            </div>
          </div>
        </nav>
        
        {/* User section */}
        <div className="mt-auto border-t p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-medium text-primary">
                  {session.user.firstName?.[0] || session.user.email[0].toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">
                  {session.user.firstName || session.user.email}
                </p>
                <p className="text-xs text-muted-foreground">
                  {session.user.email}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <Link href={`/${locale}/api/auth/signout`}>
                <Icons.logout className="h-4 w-4" />
                <span className="sr-only">{dictionary.auth.signOut}</span>
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <header className="flex h-16 items-center justify-between border-b px-4 md:px-6">
          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icons.menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          
          {/* Search (placeholder) */}
          <div className="hidden md:flex md:flex-1">
            <div className="relative max-w-md">
              <Icons.search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder={dictionary.common.search}
                className="h-9 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
            </div>
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <Button variant="ghost" size="icon">
              <Icons.bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            
            {/* Language switcher */}
            <LanguageSwitcher locale={locale as LocaleKey} />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}
