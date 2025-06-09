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
      icon: <Icons.calculator className="h-6 w-6" data-oid="-ho1yld" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="is5qc.6" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="0wit_.u" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="td-76ok" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="1lt5xdw" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="2o4228w">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="pnoqgab">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="kh-zgqc">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="m.dn78h">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid=":nho7an"
      >
        <Card data-oid="5sknvbs">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="1z5jvuw"
          >
            <CardTitle className="text-sm font-medium" data-oid="j43p6m:">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="x8e2j3i"
            />
          </CardHeader>
          <CardContent data-oid="2t.a_bo">
            <div className="text-2xl font-bold" data-oid="-tg:f45">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="i5csc1x"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="d1:_1ou" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=".5l0f95" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="zk5r:fn">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="32w4h5w"
          >
            <CardTitle className="text-sm font-medium" data-oid="ejayb-1">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="28wt3ue"
            />
          </CardHeader>
          <CardContent data-oid="9vaqn:w">
            <div className="text-2xl font-bold" data-oid="mf4oey0">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="3a6m:fz"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="jgp3piq" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="f7ij33-" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="90z2f3t">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="3mxz.h."
          >
            <CardTitle className="text-sm font-medium" data-oid="zdydf94">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="5sntmyi"
            />
          </CardHeader>
          <CardContent data-oid="hs1p1.3">
            <div className="text-2xl font-bold" data-oid="vd9mtyc">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid=":s.xr.y"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="8lvna8u" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="mtto4u1" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid=":rf3qum">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="2e01rl1"
          >
            <CardTitle className="text-sm font-medium" data-oid="0fle07p">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="li.t-qx"
            />
          </CardHeader>
          <CardContent data-oid="rci.wdi">
            <div className="text-2xl font-bold" data-oid="f0r8ngq">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="pzv3cbe"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="98mfrzn" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="twmx54w" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="4.p:dql">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="tipw6bt"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="aaaxx5a"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="epd8ju5">
              <CardHeader className="p-4" data-oid="-fh3q8:">
                <div className="flex items-center gap-2" data-oid="5lv4.vr">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid=".yy_qll"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="vk2ja05">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="_3rxjp0">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="ln0_mj_">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="zgxps0y"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="8uip_av" />
                  <span className="text-muted-foreground" data-oid="a54s_a4">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="5cjoul-">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="-4qv_ci"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="mah:6yw"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid=".2trb-s">
                <Button asChild className="w-full" data-oid="_maoiys">
                  <Link href={app.href} data-oid="xvr723t">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="6vy-plm"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="qbfitc_">
        <Card data-oid="paqnen:">
          <CardHeader data-oid=":ff0o:b">
            <CardTitle data-oid="0tkv_y:">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="cuqvwtz">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="rg-6h7n"
            >
              <div className="flex items-center space-x-4" data-oid="vppib0m">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="h6ulk65"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="vtwjajz"
                  />
                </div>
                <div data-oid="t-0yzw1">
                  <p className="text-sm font-medium" data-oid="a9gbms8">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="fn8lj30"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="o2.n58-">
                <Icons.eye className="h-4 w-4" data-oid="k:4fft:" />
                <span className="sr-only" data-oid="cd0u333">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="2721_.9"
            >
              <div className="flex items-center space-x-4" data-oid="npapr-h">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="11t066n"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="l1krfz3"
                  />
                </div>
                <div data-oid="4qq3qcb">
                  <p className="text-sm font-medium" data-oid="lho6pob">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="132s0qt"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="_n9q.j3">
                <Icons.eye className="h-4 w-4" data-oid="59_73v4" />
                <span className="sr-only" data-oid="22dxw4f">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="ibbxgpq"
            >
              <div className="flex items-center space-x-4" data-oid="4.wxo-z">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="k6q60:e"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="gsain08"
                  />
                </div>
                <div data-oid="1t9jy.u">
                  <p className="text-sm font-medium" data-oid="0fyfbny">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="xa0j91y"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="52q3kb2">
                <Icons.eye className="h-4 w-4" data-oid="l8ok89b" />
                <span className="sr-only" data-oid="2-mfj9m">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="c8v7gzd">
            <Button variant="outline" className="w-full" data-oid="ku:_-3s">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="p0ag373">
          <CardHeader data-oid="-05.ywr">
            <CardTitle data-oid="mpr:a3i">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="g938zdp">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="el.o032"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="paktfzh"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="m_gvx4y"
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
                  data-oid="0clh63m"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="qbdj45n"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="ziyi:qd"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="xg5o.vu">
                      <p className="text-sm font-medium" data-oid="2aoe-7m">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="pf641h-"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid=".9oast9"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="qfwq:tx">
            <Button variant="outline" className="w-full" data-oid="3ce6zdk">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="8vok8yl">
        <CardHeader data-oid="fjzxc9_">
          <CardTitle data-oid="l7x3y5l">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid=".98jvf.">
          <div className="grid gap-2 md:grid-cols-3" data-oid="i8i8k90">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="2.8ukyh"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="3etr.ln" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="u._z8eh"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="d9slsaz" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="zcpodvh"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="e.u26xn" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="yrrp2gu"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="m12g4y." />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="b5lx95z"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="-euqzxl" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="n14cuu0"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="pzep8yc" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
