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
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

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
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

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
      icon: <Icons.calculator className="h-6 w-6" data-oid="t5nozbg" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="k7o0ibb" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="fk8l:z0" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="d-a2p6p" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="g5._iit" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="mpkqaz0">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="xvz5avx">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="uq_933j">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="l:nmv-8">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="kxywbcc"
      >
        <Card data-oid="_zb3ddj">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="a5v.182"
          >
            <CardTitle className="text-sm font-medium" data-oid="csctttf">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid=".aar2ul"
            />
          </CardHeader>
          <CardContent data-oid="jwcv-8m">
            <div className="text-2xl font-bold" data-oid="wu_.sh6">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="797hzkb"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="-axn.h-" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="::ro5y8" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="ere:gj-">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="mnvpi8."
          >
            <CardTitle className="text-sm font-medium" data-oid="dld5x7t">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="qynw:z1"
            />
          </CardHeader>
          <CardContent data-oid="8piaqrr">
            <div className="text-2xl font-bold" data-oid="lg:aaqn">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="efah9vr"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="pg_25gs" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="n8ne_qq" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="jgfzni9">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="7kzfw9d"
          >
            <CardTitle className="text-sm font-medium" data-oid="n7grrsp">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="k8gk-bv"
            />
          </CardHeader>
          <CardContent data-oid="vfqrgzf">
            <div className="text-2xl font-bold" data-oid=".7v38fb">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="ztq0b7x"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="yx0l16h" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="6qmxo.r" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="_vubar9">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="_uxyzet"
          >
            <CardTitle className="text-sm font-medium" data-oid="adrtbgk">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="h_8eisg"
            />
          </CardHeader>
          <CardContent data-oid="mk.421c">
            <div className="text-2xl font-bold" data-oid="8j7.hkh">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="jbrbv4f"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="0ls5gqj" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="whn12fp" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="i-icxpa">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="lde.:ue"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid=":mndplj"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="n-qjnc_">
              <CardHeader className="p-4" data-oid="04pqi5d">
                <div className="flex items-center gap-2" data-oid="bdswb6.">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="fahatgq"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid=".cktg7k">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="_4ir::1">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="c79da29">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid=".ctz8v3"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="cb347e1" />
                  <span className="text-muted-foreground" data-oid="6:xefj0">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="_6ztyr0">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="9knvnqo"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="6e5:abh"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="tnl62g2">
                <Button asChild className="w-full" data-oid=".zd27jr">
                  <Link href={app.href} data-oid="zaqkl8d">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="namd71h"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="-.6fged">
        <Card data-oid="ep.3:1k">
          <CardHeader data-oid="aufurpc">
            <CardTitle data-oid="b5rao_k">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="5q4xpi4">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="4-nq348"
            >
              <div className="flex items-center space-x-4" data-oid="ielc6-e">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="uyxhl8u"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="n0c:z.v"
                  />
                </div>
                <div data-oid="f-yi8f1">
                  <p className="text-sm font-medium" data-oid="tx_xtyt">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="dzfj:mh"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="g0d_qbr">
                <Icons.eye className="h-4 w-4" data-oid="ja8x-tl" />
                <span className="sr-only" data-oid="rem955s">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="i0v9v0i"
            >
              <div className="flex items-center space-x-4" data-oid="aywy2wd">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ez9-zk:"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="07_fx8o"
                  />
                </div>
                <div data-oid="raui2s5">
                  <p className="text-sm font-medium" data-oid="i45mp_1">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="c2y94k2"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="vnnd1t2">
                <Icons.eye className="h-4 w-4" data-oid="p00onsk" />
                <span className="sr-only" data-oid="30i76x2">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="e9n2u6n"
            >
              <div className="flex items-center space-x-4" data-oid="d5pzxtt">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="0k5e8x-"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="-asm92_"
                  />
                </div>
                <div data-oid="1kh03v9">
                  <p className="text-sm font-medium" data-oid="_oe9k__">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="n3:j6no"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="j0s8ulh">
                <Icons.eye className="h-4 w-4" data-oid="gfqb13v" />
                <span className="sr-only" data-oid="984rb76">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="ve..gfr">
            <Button variant="outline" className="w-full" data-oid="2b_hfbx">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="99ztv38">
          <CardHeader data-oid="mnnuyt7">
            <CardTitle data-oid="bwymnsq">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="jto9w0v">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="5glanup"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="fxue.tz"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="ekvzxh."
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
                  data-oid="27mwvhp"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="l.y:h5y"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="6we1ae4"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="fzz.b-p">
                      <p className="text-sm font-medium" data-oid="vjem:tt">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="m5p0-_l"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="wg_pb5g"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="b53tnd_">
            <Button variant="outline" className="w-full" data-oid="j:vpxmi">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="-o6dy-m">
        <CardHeader data-oid="f3i1.a1">
          <CardTitle data-oid="ftj7ott">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="lt20sl8">
          <div className="grid gap-2 md:grid-cols-3" data-oid=".1b6xqv">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="i-0gywk"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="i2iskr2" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="av1-i5d"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="_6239_o" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="u-cw4gt"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="6uue4_s" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="j.061_b"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="5l-xjvt" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="s4kfc71"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="gil-ox." />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="ii8s0yj"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="-3qvxf2" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
