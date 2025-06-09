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
      icon: <Icons.calculator className="h-6 w-6" data-oid="v2-4st1" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="ydk6gvf" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="-q:6bg2" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="yo8-ddv" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="_8991g-" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid=":wtnn_r">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="742r4ri">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="bhwhim:">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="sk29y-i">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="48duygo"
      >
        <Card data-oid="_:135fx">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid=".i1b6fi"
          >
            <CardTitle className="text-sm font-medium" data-oid="j-vk-mw">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="8a_arue"
            />
          </CardHeader>
          <CardContent data-oid="ifl2.q8">
            <div className="text-2xl font-bold" data-oid="0zr3y_0">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="g2usuad"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="u183zhc" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="oh900_d" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="j2lxr5n">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="r..41_-"
          >
            <CardTitle className="text-sm font-medium" data-oid="t_011vf">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="-rmawwt"
            />
          </CardHeader>
          <CardContent data-oid="61e-mu8">
            <div className="text-2xl font-bold" data-oid="_2cd1jw">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="xn3jb4u"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="0ljut1l" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="38dvk0k" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="bmox68x">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="-m7f_6c"
          >
            <CardTitle className="text-sm font-medium" data-oid="07hiefz">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="7ka3u29"
            />
          </CardHeader>
          <CardContent data-oid="so12c-9">
            <div className="text-2xl font-bold" data-oid="7ogn.qc">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="uawu6pj"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="jsrxsxg" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="1m93arq" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="x_gkyga">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="sen1_j3"
          >
            <CardTitle className="text-sm font-medium" data-oid="ae-y621">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="ms5w91c"
            />
          </CardHeader>
          <CardContent data-oid="eimd-h2">
            <div className="text-2xl font-bold" data-oid=":883nga">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="5.633xg"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="c6qp-9u" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=":89uv53" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="04gjm6_">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="hghvj81"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="c5ycnr-"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid=":0v76b3">
              <CardHeader className="p-4" data-oid="fqybd5k">
                <div className="flex items-center gap-2" data-oid="20l9zqc">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="l7i-6.k"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="2nmf9bk">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="6g3-x3i">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="xmeceg9">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="_yakbt3"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="s9hz42c" />
                  <span className="text-muted-foreground" data-oid="dbeosv0">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="tm32o-m">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="302.1._"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="bmc0ksk"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="x42233-">
                <Button asChild className="w-full" data-oid="nrf3pbu">
                  <Link href={app.href} data-oid="p:ynz2w">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="398bq4_"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid=".o2-0ep">
        <Card data-oid="j8v493a">
          <CardHeader data-oid="rns6yy0">
            <CardTitle data-oid="rdgzew_">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="ezfv0ix">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="kg-wugg"
            >
              <div className="flex items-center space-x-4" data-oid="f3hsd3a">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="8lu._o6"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="bmu5x4k"
                  />
                </div>
                <div data-oid="m8_mjh6">
                  <p className="text-sm font-medium" data-oid="_3:7oil">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="9:p1f9x"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="ak3lsyi">
                <Icons.eye className="h-4 w-4" data-oid="9ilw.ch" />
                <span className="sr-only" data-oid="ish4c:v">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="r7depb9"
            >
              <div className="flex items-center space-x-4" data-oid="zr947tg">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="cewlzum"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="dq8zw_n"
                  />
                </div>
                <div data-oid="0v92vge">
                  <p className="text-sm font-medium" data-oid="x1uoytb">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="ooee7_d"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="9wtihj:">
                <Icons.eye className="h-4 w-4" data-oid="sf3kny2" />
                <span className="sr-only" data-oid="vt39_d-">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="bcbhy63"
            >
              <div className="flex items-center space-x-4" data-oid="uh7czqy">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="jb.:p1w"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="deqfopy"
                  />
                </div>
                <div data-oid="r0qb8vy">
                  <p className="text-sm font-medium" data-oid="w43w3dt">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="l395d9i"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="j9ywa_-">
                <Icons.eye className="h-4 w-4" data-oid="_bnoagw" />
                <span className="sr-only" data-oid="ixhl19t">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="26k1-sr">
            <Button variant="outline" className="w-full" data-oid="_9fakbx">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="-j0p26-">
          <CardHeader data-oid="fma68ub">
            <CardTitle data-oid="bl2aq_j">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="0vd1p.r">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="47vhyt5"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="3nsgaxh"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid=":7j8pao"
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
                  data-oid="jyf_h6t"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="m5pom85"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="n1syo-0"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="can-ob5">
                      <p className="text-sm font-medium" data-oid="n072fr3">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="-2g9dsn"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid=":ezf.vb"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="8fnwaf9">
            <Button variant="outline" className="w-full" data-oid="42:q24t">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="8uy3eq9">
        <CardHeader data-oid="k.gjkn.">
          <CardTitle data-oid="or-2egl">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="_0wdm9s">
          <div className="grid gap-2 md:grid-cols-3" data-oid="rsoaddz">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="zuzz9r_"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="dmjj408" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid=".zc.mrj"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="w0_beiv" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="wq9:b8."
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="8:.6xs:" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="x8r__zi"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="q1nhvt8" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="cpd6g9m"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="bqin_wk" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="invxa4_"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="_xdqcfo" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
