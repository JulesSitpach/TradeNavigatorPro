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
    <div className="min-h-screen bg-background" data-oid="vodfzjw">
      {/* Header */}
      <header
        className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50"
        data-oid="wfot2:f"
      >
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="dylwdv9"
        >
          <div
            className="flex h-16 items-center justify-between"
            data-oid="9cdio_r"
          >
            {/* Logo */}
            <Link
              href={`/${params.locale}`}
              className="flex items-center space-x-2"
              data-oid="u67cwmh"
            >
              <div
                className="h-8 w-8 rounded-lg bg-orange text-white flex items-center justify-center font-bold"
                data-oid="gjvebvy"
              >
                T
              </div>
              <span
                className="text-xl font-bold text-foreground"
                data-oid="lsuxgf:"
              >
                TradeNavigatorPro
              </span>
            </Link>

            {/* Navigation */}
            <nav
              className="hidden md:flex items-center space-x-8"
              data-oid="g.7j-8_"
            >
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={`/${params.locale}${item.href}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-oid="dpp5:b:"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-4" data-oid="ixqby78">
              <Button variant="ghost" asChild data-oid="uwdre1t">
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="mzyuyym"
                >
                  Try Free
                </Link>
              </Button>
              <Button className="btn-orange" asChild data-oid="8c_g.9a">
                <Link href={`/${params.locale}/demo`} data-oid="4y::aae">
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main data-oid=".ifi8g4">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/50" data-oid="lze.vd:">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
          data-oid="8jd_x1m"
        >
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            data-oid="xmvomyf"
          >
            {/* Company Info */}
            <div className="space-y-4" data-oid="st7nj50">
              <div className="flex items-center space-x-2" data-oid="8kio4wj">
                <div
                  className="h-6 w-6 rounded bg-orange text-white flex items-center justify-center text-sm font-bold"
                  data-oid="vmvosie"
                >
                  T
                </div>
                <span className="font-semibold" data-oid=".lwq5f5">
                  TradeNavigatorPro
                </span>
              </div>
              <p className="text-sm text-muted-foreground" data-oid="gbj2r6v">
                Navigate global trade with confidence using AI-powered analysis
                and optimization tools.
              </p>
            </div>

            {/* Solutions */}
            <div className="space-y-4" data-oid="65nft4v">
              <h3 className="font-semibold" data-oid="7xni3:p">
                Solutions
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="ym0-0ii"
              >
                <li data-oid="u::x_rt">
                  <Link
                    href={`/${params.locale}/apps/cost-calculator`}
                    className="hover:text-foreground"
                    data-oid="413c114"
                  >
                    Cost Calculator
                  </Link>
                </li>
                <li data-oid="5pmem_k">
                  <Link
                    href={`/${params.locale}/apps/supply-pivot`}
                    className="hover:text-foreground"
                    data-oid="646xtq1"
                  >
                    Supply Chain Pivot
                  </Link>
                </li>
                <li data-oid="uybq:m3">
                  <Link
                    href={`/${params.locale}/apps/pricing-optimizer`}
                    className="hover:text-foreground"
                    data-oid="dcz11e1"
                  >
                    Pricing Optimizer
                  </Link>
                </li>
                <li data-oid="a_n0zn9">
                  <Link
                    href={`/${params.locale}/apps/tariff-tracker`}
                    className="hover:text-foreground"
                    data-oid="7cvctb9"
                  >
                    Tariff Tracker
                  </Link>
                </li>
                <li data-oid="rjk-g7f">
                  <Link
                    href={`/${params.locale}/apps/route-optimizer`}
                    className="hover:text-foreground"
                    data-oid="b18px-d"
                  >
                    Route Optimizer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4" data-oid="jqatoao">
              <h3 className="font-semibold" data-oid="j3g2m5d">
                Company
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="klz8_ic"
              >
                <li data-oid="mf8hcmh">
                  <Link
                    href={`/${params.locale}/about`}
                    className="hover:text-foreground"
                    data-oid="gm5xo2m"
                  >
                    About
                  </Link>
                </li>
                <li data-oid="kvhyca1">
                  <Link
                    href={`/${params.locale}/case-studies`}
                    className="hover:text-foreground"
                    data-oid="ej8vpw8"
                  >
                    Case Studies
                  </Link>
                </li>
                <li data-oid="7jfk3g9">
                  <Link
                    href={`/${params.locale}/blog`}
                    className="hover:text-foreground"
                    data-oid="z6qo9wd"
                  >
                    Blog
                  </Link>
                </li>
                <li data-oid="2:::7:v">
                  <Link
                    href={`/${params.locale}/contact`}
                    className="hover:text-foreground"
                    data-oid="vm5ox6n"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4" data-oid="ccm9d-6">
              <h3 className="font-semibold" data-oid="n1ce___">
                Legal
              </h3>
              <ul
                className="space-y-2 text-sm text-muted-foreground"
                data-oid="u0q9wla"
              >
                <li data-oid="ua9ha-w">
                  <Link
                    href={`/${params.locale}/legal/privacy`}
                    className="hover:text-foreground"
                    data-oid="7m-4m78"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li data-oid=":05hi30">
                  <Link
                    href={`/${params.locale}/legal/terms`}
                    className="hover:text-foreground"
                    data-oid="h9c1pyx"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li data-oid="6_53f5r">
                  <Link
                    href={`/${params.locale}/legal/security`}
                    className="hover:text-foreground"
                    data-oid="oqszb_h"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center"
            data-oid="06gclky"
          >
            <p className="text-sm text-muted-foreground" data-oid="d.6e0m:">
              © 2024 TradeNavigatorPro. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0" data-oid="sfqrp7g">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="s3-6678"
              >
                <span className="sr-only" data-oid="w72nadl">
                  Twitter
                </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  data-oid="e2br5lp"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                    data-oid="o06jwej"
                  />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
                data-oid="x.h_jdl"
              >
                <span className="sr-only" data-oid="xcpshpu">
                  LinkedIn
                </span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  data-oid="im0kj_p"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                    data-oid="f.1_tjl"
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
