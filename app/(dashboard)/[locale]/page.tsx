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
      icon: <Icons.calculator className="h-6 w-6" data-oid="-2dt20j" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="t9m0jv5" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="jf1ojv7" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="2upohb0" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid=":ocpvsc" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="idu94fx">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="_xvojz:">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="klrblqo">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="hz3npsw">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="vao3zk7"
      >
        <Card data-oid="c9l8km5">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="9_he0gm"
          >
            <CardTitle className="text-sm font-medium" data-oid=".9v8_9u">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="jxme-fo"
            />
          </CardHeader>
          <CardContent data-oid="6.29rdu">
            <div className="text-2xl font-bold" data-oid="vqwn6--">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="ggz3si-"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="n_:wnc:" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="xep:g30" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="v84dvl7">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="_it3wtl"
          >
            <CardTitle className="text-sm font-medium" data-oid="4le9np_">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="-yrnkf4"
            />
          </CardHeader>
          <CardContent data-oid="c64k8q9">
            <div className="text-2xl font-bold" data-oid="vjvxx8i">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="353slpq"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="2uv2d:l" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="l2z7-46" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="2kcc9_z">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="jbpaw_j"
          >
            <CardTitle className="text-sm font-medium" data-oid="qtunzs3">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="x:c4vyu"
            />
          </CardHeader>
          <CardContent data-oid="040xpwq">
            <div className="text-2xl font-bold" data-oid="rd8n:_z">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="bvjwuyq"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="ve3ew_q" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="6lmi9y." />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="b49ti7l">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="bt4tik_"
          >
            <CardTitle className="text-sm font-medium" data-oid="nk46fvu">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="kzruc-9"
            />
          </CardHeader>
          <CardContent data-oid="ny1fa9y">
            <div className="text-2xl font-bold" data-oid="x423ayt">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="ds-c_2y"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="s_x.z-8" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="g6u11hl" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="6vcocwm">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="jgg6f9v"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="ingd7z1"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="l9-0gw_">
              <CardHeader className="p-4" data-oid="_la4.io">
                <div className="flex items-center gap-2" data-oid="lvisctx">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="0_u.4qs"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="ucmm-v8">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="7xcrrpw">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="0g1g.o8">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="oqe0ybx"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="flm87tp" />
                  <span className="text-muted-foreground" data-oid="pqs3_8i">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="y0l.n6k">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="4v_jbb_"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="1ybrmvj"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="up.fqi:">
                <Button asChild className="w-full" data-oid="14uq.vu">
                  <Link href={app.href} data-oid="c-_4d7t">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="x5ok-19"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="9v5bq63">
        <Card data-oid="exjase9">
          <CardHeader data-oid="_g6a.0_">
            <CardTitle data-oid="9mzfpbv">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="86wwx4j">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="isa4e2:"
            >
              <div className="flex items-center space-x-4" data-oid="lo:5q.y">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid=".iklzr:"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="wv-.3b0"
                  />
                </div>
                <div data-oid="oc:_oa.">
                  <p className="text-sm font-medium" data-oid="xt0y3wr">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="56lio_k"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="ex:ca7:">
                <Icons.eye className="h-4 w-4" data-oid="87787c0" />
                <span className="sr-only" data-oid="2g-7mml">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="wuvb6.8"
            >
              <div className="flex items-center space-x-4" data-oid="sky8.0k">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="3y38tfx"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="fgioz87"
                  />
                </div>
                <div data-oid="6ppj9zc">
                  <p className="text-sm font-medium" data-oid="_7dvda.">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="hxz0.fc"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="68lyc63">
                <Icons.eye className="h-4 w-4" data-oid="v8hq3_m" />
                <span className="sr-only" data-oid="-l3addu">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="3dxa7y8"
            >
              <div className="flex items-center space-x-4" data-oid="ueb47z9">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ww4qd6m"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="8iv-7gu"
                  />
                </div>
                <div data-oid="ovbjx6m">
                  <p className="text-sm font-medium" data-oid="kiob71c">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="6albx9m"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="6x7y8yt">
                <Icons.eye className="h-4 w-4" data-oid="fg0_gn:" />
                <span className="sr-only" data-oid="h5feji4">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid=".8.9h0u">
            <Button variant="outline" className="w-full" data-oid="t-41978">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="ls.1vdl">
          <CardHeader data-oid="4e110gp">
            <CardTitle data-oid="571.eqc">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="u6sdsc7">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="ssp5mu2"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="s_a9nrx"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="_tfpaqf"
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
                  data-oid="pn18bgz"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="0:yx5fv"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="en2pvp."
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="dvr86er">
                      <p className="text-sm font-medium" data-oid="8pk.sm-">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="dkafc9d"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="8nbo7sd"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="0owj3k9">
            <Button variant="outline" className="w-full" data-oid="1dyodq5">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="48nvn3k">
        <CardHeader data-oid="xoh1ng-">
          <CardTitle data-oid="ewuanhl">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="xai9c.x">
          <div className="grid gap-2 md:grid-cols-3" data-oid="_.lhz_a">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="e-ptd88"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="awj2glx" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="fkn1ykr"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="r32epyl" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="y4jpwqm"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="skk13h2" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="l.byo_j"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="95d1p1w" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="0jjh89q"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="ptiz25j" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="9dc08gw"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="f93:p5j" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
