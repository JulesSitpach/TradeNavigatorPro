import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";

import { getDictionary, i18n, LocaleKey } from "@/lib/i18n/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icons } from "@/components/ui/icons";

// Metadata for the page with dynamic locale
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Validate locale
  if (!i18n.locales.includes(locale as LocaleKey)) {
    return {};
  }

  // Get dictionary for the locale
  const dictionary = await getDictionary(locale as LocaleKey);

  return {
    title: dictionary.dashboard.title,
    description: "US Trade Impact SaaS for SMBs",
  };
}

// Dashboard home page component
export default async function DashboardPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Validate locale or return 404
  if (!i18n.locales.includes(locale as LocaleKey)) {
    notFound();
  }

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.dashboard;
  const apps = dictionary.apps;

  // Mock metrics data
  const metrics = {
    costImpact: {
      value: "$125,430",
      change: "+12.5%",
      increasing: true,
    },
    tariffChanges: {
      value: "5",
      change: "+2",
      increasing: true,
    },
    supplierAlternatives: {
      value: "28",
      change: "+3",
      increasing: true,
    },
    dutyDrawbacks: {
      value: "$42,850",
      change: "+$8,200",
      increasing: true,
    },
  };

  // Core applications data with their routes, icons, and content
  const coreApplications = [
    {
      id: "cost-calculator",
      title: apps.costCalculator.title,
      description: apps.costCalculator.description,
      problem: apps.costCalculator.problem,
      icon: <Icons.calculator className="h-6 w-6" data-oid="nf8rh-t" />,
      href: `/${locale}/apps/cost-calculator`,
      features: [
        apps.costCalculator.uploadData,
        apps.costCalculator.calculateImpact,
        apps.costCalculator.reports,
      ],

      color: "bg-red-100 text-red-700",
    },
    {
      id: "supply-pivot",
      title: apps.supplyChainPlanner.title,
      description: apps.supplyChainPlanner.description,
      problem: apps.supplyChainPlanner.problem,
      icon: <Icons.network className="h-6 w-6" data-oid="tji8d5f" />,
      href: `/${locale}/apps/supply-pivot`,
      features: [
        apps.supplyChainPlanner.alternativeSuppliers,
        apps.supplyChainPlanner.tariffComparison,
        apps.supplyChainPlanner.logisticsAnalysis,
        apps.supplyChainPlanner.supplierDatabase,
      ],

      color: "bg-blue-100 text-blue-700",
    },
    {
      id: "pricing-optimizer",
      title: apps.pricingOptimizer.title,
      description: apps.pricingOptimizer.description,
      problem: apps.pricingOptimizer.problem,
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="i4q4wvr" />,
      href: `/${locale}/apps/pricing-optimizer`,
      features: [
        apps.pricingOptimizer.scenarioModeling,
        apps.pricingOptimizer.breakEvenAnalysis,
        apps.pricingOptimizer.marginProtection,
        apps.pricingOptimizer.communicationTemplates,
      ],

      color: "bg-green-100 text-green-700",
    },
    {
      id: "tariff-tracker",
      title: apps.tariffTracker.title,
      description: apps.tariffTracker.description,
      problem: apps.tariffTracker.problem,
      icon: <Icons.clock className="h-6 w-6" data-oid="hy:y7o_" />,
      href: `/${locale}/apps/tariff-tracker`,
      features: [
        apps.tariffTracker.announcements,
        apps.tariffTracker.warnings,
        apps.tariffTracker.historicalPatterns,
        apps.tariffTracker.actionAlerts,
      ],

      color: "bg-amber-100 text-amber-700",
    },
    {
      id: "route-optimizer",
      title: apps.routeOptimizer.title,
      description: apps.routeOptimizer.description,
      problem: apps.routeOptimizer.problem,
      icon: <Icons.route className="h-6 w-6" data-oid="yhzr0ur" />,
      href: `/${locale}/apps/route-optimizer`,
      features: [
        apps.routeOptimizer.routingSuggestions,
        apps.routeOptimizer.usmcaBenefits,
        apps.routeOptimizer.dutyDrawback,
        apps.routeOptimizer.customsDocumentation,
      ],

      color: "bg-purple-100 text-purple-700",
    },
  ];

  // Recent alerts mock data
  const recentAlerts = [
    {
      id: "1",
      title: "Section 301 Tariffs on Chinese Goods - List 4B",
      date: "2025-05-15",
      impact: "High",
      type: "tariff",
    },
    {
      id: "2",
      title: "New supplier alternative found for electronics",
      date: "2025-05-10",
      impact: "Medium",
      type: "supplier",
    },
    {
      id: "3",
      title: "Duty drawback opportunity identified",
      date: "2025-05-08",
      impact: "Medium",
      type: "drawback",
    },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="umfjyln">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="ch0-pd5">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="4lsi:0p">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="00ietx:">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="f7vr18d"
      >
        <Card data-oid="n86gr-n">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="-hyqat6"
          >
            <CardTitle className="text-sm font-medium" data-oid="umeytd5">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="584agvx"
            />
          </CardHeader>
          <CardContent data-oid="mans5ui">
            <div className="text-2xl font-bold" data-oid="rawb6wk">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="0zywv_i"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="f4r:vlb" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="psd9dls" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="d79vey1">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="f0dc1xs"
          >
            <CardTitle className="text-sm font-medium" data-oid="m449hll">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="2.5w70_"
            />
          </CardHeader>
          <CardContent data-oid="jdcaib5">
            <div className="text-2xl font-bold" data-oid=":wc:_5d">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="wr1_f7t"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="yn0qdhj" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="k2exrt5" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="ug-o9j:">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="4h4qeq."
          >
            <CardTitle className="text-sm font-medium" data-oid="jlzii_n">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="64f7m3:"
            />
          </CardHeader>
          <CardContent data-oid="1x-v22k">
            <div className="text-2xl font-bold" data-oid="6mrd84h">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="fo2tfvr"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="dhu9lj:" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=":qn.et0" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="6.delwv">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid=":xi.hoo"
          >
            <CardTitle className="text-sm font-medium" data-oid="_htmdbx">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="_hnaa.9"
            />
          </CardHeader>
          <CardContent data-oid="4a63r1y">
            <div className="text-2xl font-bold" data-oid="img.9l:">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="q.f2q4d"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="9u:.4:y" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=".7207oi" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="pzob3h2">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="0xw8:fp"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="1of13zf"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="jco0.k1">
              <CardHeader className="p-4" data-oid="8h0ui84">
                <div className="flex items-center gap-2" data-oid="1ugl0rq">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="f7l8bih"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="09rt:hm">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="c0okv3d">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="j0_uh:0">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="igb0-37"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="ebnxhu." />
                  <span className="text-muted-foreground" data-oid="-81qpj2">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="2kpc:oc">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="cza1j73"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="_xto:xq"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="m6:5k2_">
                <Button asChild className="w-full" data-oid="b6vmxe0">
                  <Link href={app.href} data-oid="rh89c:5">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="76mrjpe"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="rfb2nbf">
        <Card data-oid="xcljq2w">
          <CardHeader data-oid="j12-v5-">
            <CardTitle data-oid="u8v8hn9">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="ejwyryi">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="_kfz3p1"
            >
              <div className="flex items-center space-x-4" data-oid="26856c5">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="7w7ulrb"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid=":1r4jk3"
                  />
                </div>
                <div data-oid="ce5ibid">
                  <p className="text-sm font-medium" data-oid="1dc588o">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="rdnhxck"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="ko-jab3">
                <Icons.eye className="h-4 w-4" data-oid="-cs3wg3" />
                <span className="sr-only" data-oid="7fgljwg">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="9hi1hf."
            >
              <div className="flex items-center space-x-4" data-oid="_e1gwp8">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="7ffp:2l"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="815dtfx"
                  />
                </div>
                <div data-oid="mrivd91">
                  <p className="text-sm font-medium" data-oid="p2nvg-8">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="4nwe:0t"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="5x-6.sr">
                <Icons.eye className="h-4 w-4" data-oid="k0_l48x" />
                <span className="sr-only" data-oid="_mln25q">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="k.9v9j8"
            >
              <div className="flex items-center space-x-4" data-oid="7fy6fj2">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="nymgg02"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="w5tinl0"
                  />
                </div>
                <div data-oid="0aasexb">
                  <p className="text-sm font-medium" data-oid="r7:r87c">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="h784y0j"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="sske9ad">
                <Icons.eye className="h-4 w-4" data-oid="83e8hqp" />
                <span className="sr-only" data-oid="v8jod9w">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="a9dcu3-">
            <Button variant="outline" className="w-full" data-oid="1.6m.sa">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="g_5h9xw">
          <CardHeader data-oid="m3f6l8n">
            <CardTitle data-oid="yoftcg7">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="-voz5jx">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="6t97idc"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="4yx0jlo"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="3xp_mhu"
                  />
                );

              const impactBadgeClass =
                alert.impact === "High"
                  ? "bg-red-100 text-red-700 border-red-200"
                  : alert.impact === "Medium"
                    ? "bg-amber-100 text-amber-700 border-amber-200"
                    : "bg-green-100 text-green-700 border-green-200";

              return (
                <div
                  key={alert.id}
                  className="flex items-center justify-between space-x-4"
                  data-oid="crb48xp"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="9_yimj4"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="f5raj:5"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="6dmao_i">
                      <p className="text-sm font-medium" data-oid="vd5v6bp">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="wkyia8c"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="bw..00_"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="02xnatl">
            <Button variant="outline" className="w-full" data-oid="uiee6s4">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="tvkej7s">
        <CardHeader data-oid="fps.i7l">
          <CardTitle data-oid="dp2wvrm">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="-vv9:m:">
          <div className="grid gap-2 md:grid-cols-3" data-oid="fk7zqiz">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="av-6--h"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="_tf4.ba" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="v6xi-9p"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="qi.93au" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="e4tp6-_"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="06b-v_4" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="ggol1o2"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="dd8bjpa" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="5esymec"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="kt6cx9k" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="zgzxexd"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="_klg7gy" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
