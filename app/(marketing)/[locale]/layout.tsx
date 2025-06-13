import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "TradeNavigatorPro - Navigate Global Trade with Confidence",
  description:
    "AI-powered trade impact analysis and supply chain optimization for international businesses.",
};

export default function MarketingLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href={`/${params.locale}`}
              className="flex items-center space-x-2"
            >
              <div className="h-8 w-8 rounded-lg bg-orange text-white flex items-center justify-center font-bold">
                T
              </div>
              <span className="text-xl font-bold text-foreground">
                TradeNavigatorPro
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={`/${params.locale}${item.href}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href={`/${params.locale}/apps/cost-calculator`}>
                  Try Free
                </Link>
              </Button>
              <Button className="btn-orange" asChild>
                <Link href={`/${params.locale}/demo`}>Watch Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-6 w-6 rounded bg-orange text-white flex items-center justify-center text-sm font-bold">
                  T
                </div>
                <span className="font-semibold">TradeNavigatorPro</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Navigate global trade with confidence using AI-powered analysis
                and optimization tools.
              </p>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h3 className="font-semibold">Solutions</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href={`/${params.locale}/apps/cost-calculator`}
                    className="hover:text-foreground"
                  >
                    Cost Calculator
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/apps/supply-pivot`}
                    className="hover:text-foreground"
                  >
                    Supply Chain Pivot
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/apps/pricing-optimizer`}
                    className="hover:text-foreground"
                  >
                    Pricing Optimizer
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/apps/tariff-tracker`}
                    className="hover:text-foreground"
                  >
                    Tariff Tracker
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/apps/route-optimizer`}
                    className="hover:text-foreground"
                  >
                    Route Optimizer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href={`/${params.locale}/about`}
                    className="hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/case-studies`}
                    className="hover:text-foreground"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/blog`}
                    className="hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/contact`}
                    className="hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href={`/${params.locale}/legal/privacy`}
                    className="hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/legal/terms`}
                    className="hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${params.locale}/legal/security`}
                    className="hover:text-foreground"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 TradeNavigatorPro. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
