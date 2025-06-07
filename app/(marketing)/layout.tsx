import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { i18n, LocaleKey } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

interface MarketingLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function MarketingLayout({
  children,
  params: { locale },
}: MarketingLayoutProps) {
  // Validate locale or return 404
  if (!i18n.locales.includes(locale as LocaleKey)) {
    notFound();
  }

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.navigation;
  const common = dictionary.common;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Icons.logo className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                {common.appName}
              </span>
            </Link>
          </div>
          
          {/* Main navigation */}
          <nav className="hidden gap-6 md:flex">
            <Link 
              href={`/${locale}`} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t.home}
            </Link>
            <Link 
              href={`/${locale}/pricing`} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t.pricing}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t.about}
            </Link>
          </nav>
          
          {/* Auth buttons */}
          <div className="flex items-center gap-2">
            <Link href={`/${locale}/login`}>
              <Button variant="ghost" size="sm">
                {common.login}
              </Button>
            </Link>
            <Link href={`/${locale}/register`}>
              <Button size="sm">
                {common.register}
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-8 md:py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-base font-medium">{common.appName}</h3>
              <p className="text-sm text-muted-foreground">{common.tagline}</p>
              <div className="flex gap-2 mt-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Icons.twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Icons.linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 text-sm font-medium">{t.help}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href={`/${locale}/documentation`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.documentation}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/support`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.support}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-2 text-sm font-medium">{t.about}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href={`/${locale}/about`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.about}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/pricing`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {t.pricing}
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="mb-2 text-sm font-medium">{common.legal}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link 
                    href={`/${locale}/privacy`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {dictionary.auth.privacyPolicy}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/terms`} 
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {dictionary.auth.termsAndConditions}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} TradeNavigatorPro. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}
