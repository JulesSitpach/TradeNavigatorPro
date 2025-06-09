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
      icon: <Icons.calculator className="h-6 w-6" data-oid="7m5qz.8" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="11eaz7x" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="p9xul.n" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="90vhz36" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="_uq0tim" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="2zibs43">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="qscl:ur">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="jbwipw9">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="rc3dex6">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="buxriwl"
      >
        <Card data-oid="n2jf83-">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="_zwcq8-"
          >
            <CardTitle className="text-sm font-medium" data-oid="w43jien">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="-gsxx4w"
            />
          </CardHeader>
          <CardContent data-oid="n9_0_5a">
            <div className="text-2xl font-bold" data-oid="o_yqym9">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="z8_jb26"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="mjk7ui9" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="d7.mtzz" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="cpkkn7k">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="u47l6:8"
          >
            <CardTitle className="text-sm font-medium" data-oid="_8d.1e-">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="e2wr9fu"
            />
          </CardHeader>
          <CardContent data-oid="rzwxonx">
            <div className="text-2xl font-bold" data-oid="iq.ik-2">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="::47d1p"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="pwgu8en" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="t0-b3p3" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="8zv6ad5">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="hupaff5"
          >
            <CardTitle className="text-sm font-medium" data-oid="tc64f-9">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="::bpwv9"
            />
          </CardHeader>
          <CardContent data-oid="vwpn-io">
            <div className="text-2xl font-bold" data-oid=":p2k4ud">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="pgdk_cl"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="xce_jx8" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="tf.ce40" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="tatm9dj">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="5tkwcep"
          >
            <CardTitle className="text-sm font-medium" data-oid="5.zh01v">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="--b481d"
            />
          </CardHeader>
          <CardContent data-oid="elz.6k.">
            <div className="text-2xl font-bold" data-oid="tl3ewd9">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="hig.01h"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="6af72d-" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="gualy6:" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="qb8xvj8">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="786efiu"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="dd-kr3."
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="8xeei.v">
              <CardHeader className="p-4" data-oid="5hvekmk">
                <div className="flex items-center gap-2" data-oid="sk8z0dh">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="g2dd5sw"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="dj5c6kt">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="jjbhqt6">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="2g586fv">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="l6.wao6"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="nqg8du:" />
                  <span className="text-muted-foreground" data-oid="0br1o:4">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="81kb45.">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="ovfwdcd"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="i81-hc8"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="xo3vg5o">
                <Button asChild className="w-full" data-oid="c4w:bte">
                  <Link href={app.href} data-oid="r7dvenw">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="rdes9vg"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="j957wg2">
        <Card data-oid="1j5e-:5">
          <CardHeader data-oid="xo2nfzy">
            <CardTitle data-oid=":eazqra">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="7wto7rp">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="yvxunxk"
            >
              <div className="flex items-center space-x-4" data-oid="bp.-e6i">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="p7_6dkn"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="de6amnw"
                  />
                </div>
                <div data-oid="tver52e">
                  <p className="text-sm font-medium" data-oid="lz6bms7">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="rf54.a2"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="-yqeagi">
                <Icons.eye className="h-4 w-4" data-oid="a6vx4zd" />
                <span className="sr-only" data-oid="w_xjwyv">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="v:dtcjr"
            >
              <div className="flex items-center space-x-4" data-oid="jwcm8g8">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="3zv1x:w"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="p6xi0k0"
                  />
                </div>
                <div data-oid="dr9:tul">
                  <p className="text-sm font-medium" data-oid="4bnjpmz">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="95lkt0v"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="z81j4rl">
                <Icons.eye className="h-4 w-4" data-oid="2cn1x99" />
                <span className="sr-only" data-oid="oumd6ug">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="63s7p2f"
            >
              <div className="flex items-center space-x-4" data-oid="4zemgo0">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="xqk6_9h"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid=".41gkve"
                  />
                </div>
                <div data-oid="gbpst54">
                  <p className="text-sm font-medium" data-oid="8zgkm14">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="v9ta5if"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid=":3d2nsu">
                <Icons.eye className="h-4 w-4" data-oid="zr:e3-1" />
                <span className="sr-only" data-oid="fn.j-7d">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="wpunv:5">
            <Button variant="outline" className="w-full" data-oid="95vva31">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="2svyib0">
          <CardHeader data-oid="ar48xy4">
            <CardTitle data-oid="vokuxn0">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="dk39il8">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="x5dtxke"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="i-r95jj"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="_fv.a2w"
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
                  data-oid="r2hsqv5"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="u6_rii2"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="0tf6zo7"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="dd3cgxh">
                      <p className="text-sm font-medium" data-oid="5_yei-.">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="xa.:uud"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid=".v.2iwz"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="np8itfn">
            <Button variant="outline" className="w-full" data-oid="fyxju_f">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="h40zeb9">
        <CardHeader data-oid="vwpu3hj">
          <CardTitle data-oid="1pv1w3o">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="d3u92ju">
          <div className="grid gap-2 md:grid-cols-3" data-oid="tj-:nsn">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="jt24lx7"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="hy1_7jl" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="4rxbl13"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="go6v652" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="ouzh.0d"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="l54zdkk" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="d7747g_"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="ni.h3o:" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="vbsdzpo"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="t6rvyrq" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="xm2ufcv"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="mpyi0dr" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
