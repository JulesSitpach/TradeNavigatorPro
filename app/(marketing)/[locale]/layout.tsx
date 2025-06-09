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
    <div className="min-h-screen bg-background" data-oid="k2woi_u">
      {/* Header */}
      <header
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
        data-oid="01_x0qq"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="g:f5x_:"
        >
          <div
            className="flex h-16 items-center justify-between"
            data-oid="wzjvi5j"
          >
            {/* Logo */}
            <Link
              href={`/${params.locale}`}
              className="flex items-center space-x-2"
              data-oid="bi70._q"
            >
              <div
                className="h-8 w-8 rounded-lg bg-orange text-white flex items-center justify-center font-bold"
                data-oid="cjegop4"
              >
                T
              </div>
              <span
                className="text-xl font-bold text-foreground"
                data-oid="8o2hcs:"
              >
                TradeNavigatorPro
              </span>
            </Link>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              data-oid="fp1vly."
            >
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={`/${params.locale}${item.href}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="viwfsc0"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4" data-oid="u6isb2w">
              <Button variant="ghost" asChild data-oid="penxvjq">
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="69bz-v4"
                >
                  Try Free
                </Link>
              </Button>
              <Button className="btn-orange" asChild data-oid="3ewqe4t">
                <Link href={`/${params.locale}/demo`} data-oid=":-c2y.0">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main data-oid="8the2l:">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50" data-oid="7eg8mrz">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          data-oid="wjnox0s"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            data-oid=":emmhzq"
          >
            {/* Company Info */}
            <div className="space-y-4" data-oid="k5nc7ll">
              <div className="flex items-center space-x-2" data-oid="t8wuknl">
                <div
                  className="h-6 w-6 rounded bg-orange text-white flex items-center justify-center text-sm font-bold"
                  data-oid="ekxyj7h"
                >
                  T
                </div>
                <span className="font-semibold" data-oid="8r79xp-">
                  TradeNavigatorPro
                </span>
              </div>
              <p className="text-sm text-muted-foreground" data-oid="_euz78a">
                Navigate global trade with confidence using AI-powered analysis
                and optimization tools.
              </p>
            </div>

            {/* Solutions */}
            <div className="space-y-4" data-oid="ywn1xg2">
              <h3 className="font-semibold" data-oid="br6d8ix">
                Solutions
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="59svbp."
              >
                <li data-oid="lqe99xr">
                  <Link
                    href={`/${params.locale}/apps/cost-calculator`}
                    className="hover:text-foreground"
                    data-oid="ube4.8:"
                  >
                    Cost Calculator
                  </Link>
                </li>
                <li data-oid="n0g87rf">
                  <Link
                    href={`/${params.locale}/apps/supply-pivot`}
                    className="hover:text-foreground"
                    data-oid="pe4-2ux"
                  >
                    Supply Chain Pivot
                  </Link>
                </li>
                <li data-oid=".-sl4qn">
                  <Link
                    href={`/${params.locale}/apps/pricing-optimizer`}
                    className="hover:text-foreground"
                    data-oid="s5gonhc"
                  >
                    Pricing Optimizer
                  </Link>
                </li>
                <li data-oid="kvpz7kf">
                  <Link
                    href={`/${params.locale}/apps/tariff-tracker`}
                    className="hover:text-foreground"
                    data-oid="5n20-tn"
                  >
                    Tariff Tracker
                  </Link>
                </li>
                <li data-oid="8ibz.-j">
                  <Link
                    href={`/${params.locale}/apps/route-optimizer`}
                    className="hover:text-foreground"
                    data-oid=":xl-::8"
                  >
                    Route Optimizer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4" data-oid="9f_5lba">
              <h3 className="font-semibold" data-oid=".e19_ek">
                Company
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="py_eait"
              >
                <li data-oid="r:-5hs9">
                  <Link
                    href={`/${params.locale}/about`}
                    className="hover:text-foreground"
                    data-oid="ukks3jj"
                  >
                    About
                  </Link>
                </li>
                <li data-oid="ycv7_49">
                  <Link
                    href={`/${params.locale}/case-studies`}
                    className="hover:text-foreground"
                    data-oid="n487ay5"
                  >
                    Case Studies
                  </Link>
                </li>
                <li data-oid="nzw:mga">
                  <Link
                    href={`/${params.locale}/blog`}
                    className="hover:text-foreground"
                    data-oid="mn--_w0"
                  >
                    Blog
                  </Link>
                </li>
                <li data-oid="f17sa.x">
                  <Link
                    href={`/${params.locale}/contact`}
                    className="hover:text-foreground"
                    data-oid="f-m-4js"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4" data-oid="ldfwgvw">
              <h3 className="font-semibold" data-oid="7.sat31">
                Legal
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="mp70z:7"
              >
                <li data-oid="6q58aak">
                  <Link
                    href={`/${params.locale}/legal/privacy`}
                    className="hover:text-foreground"
                    data-oid="89jkgw5"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li data-oid="74jqvt5">
                  <Link
                    href={`/${params.locale}/legal/terms`}
                    className="hover:text-foreground"
                    data-oid="z-q4gf."
                  >
                    Terms of Service
                  </Link>
                </li>
                <li data-oid="8wu1_zy">
                  <Link
                    href={`/${params.locale}/legal/security`}
                    className="hover:text-foreground"
                    data-oid="lttc1oy"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center"
            data-oid="hqy22.h"
          >
            <p className="text-sm text-muted-foreground" data-oid="hm3-eod">
              © 2024 TradeNavigatorPro. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0" data-oid="x1-ltxd">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="ekxuwy8"
              >
                <span className="sr-only" data-oid="aiqr5q2">
                  Twitter
                </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  data-oid="6okq8rg"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    data-oid="i4ty8a8"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="4w1hubc"
              >
                <span className="sr-only" data-oid="mnwnadn">
                  LinkedIn
                </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  data-oid="yl5a.1n"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                    data-oid="1oaysb2"
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
