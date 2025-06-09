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
      icon: <Icons.calculator className="h-6 w-6" data-oid=":5ox_gg" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="nv5madx" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="zhcpqy_" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="6ycskmm" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="di3:me4" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="9.iapjp">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="3dqdzzo">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="koak55-">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="577dmdc">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="cfcxcw_"
      >
        <Card data-oid="ani0pks">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="qvz.jfp"
          >
            <CardTitle className="text-sm font-medium" data-oid="13r.n0r">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="7groamw"
            />
          </CardHeader>
          <CardContent data-oid="81:7ehj">
            <div className="text-2xl font-bold" data-oid="blwkqjs">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="g93lp_0"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="no5awzs" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="b:gga6w" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="8amqckt">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="j5:bmk_"
          >
            <CardTitle className="text-sm font-medium" data-oid="0y4xan.">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="fft:.x:"
            />
          </CardHeader>
          <CardContent data-oid="j7b2uxc">
            <div className="text-2xl font-bold" data-oid="vsa0c-k">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="lunyu7j"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="9lui.ps" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="rq18_gg" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="5y4m3.z">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="izz1_s:"
          >
            <CardTitle className="text-sm font-medium" data-oid="gdaj8lp">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="eh9fm5l"
            />
          </CardHeader>
          <CardContent data-oid="qmxmh5h">
            <div className="text-2xl font-bold" data-oid="l:y4qen">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="y_mk8xg"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="zmgh7u6" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="vj8qj7u" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="3o7f9gl">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="lozntvz"
          >
            <CardTitle className="text-sm font-medium" data-oid="p5:tqq4">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="ur0wt_9"
            />
          </CardHeader>
          <CardContent data-oid="8bqr0e3">
            <div className="text-2xl font-bold" data-oid="7im1p_e">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="vz8.38l"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="b4pn8d1" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="nicnhmf" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="tyn5ryp">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="1upo4fi"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="rc32ym2"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="pwc228e">
              <CardHeader className="p-4" data-oid="x_25qdx">
                <div className="flex items-center gap-2" data-oid="71skd.t">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="jq6x_nx"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="m.2_z5u">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="to__fev">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="egp:mq0">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="d6gsww7"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="9iwknze" />
                  <span className="text-muted-foreground" data-oid="03p6-:q">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="3grlf.v">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid=":4nppex"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="aeac:9c"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="ni4q6w5">
                <Button asChild className="w-full" data-oid="icwykha">
                  <Link href={app.href} data-oid="vnnsr-2">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="ig:bx01"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid=":hkhu2i">
        <Card data-oid="kp_ue3h">
          <CardHeader data-oid="v::xwco">
            <CardTitle data-oid="qk13d0s">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="ufgi-n4">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="3e2w26a"
            >
              <div className="flex items-center space-x-4" data-oid="mdqi4k4">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ekhstj0"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="4qknx25"
                  />
                </div>
                <div data-oid="usju-rg">
                  <p className="text-sm font-medium" data-oid="0x.6asv">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="7yfasvn"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="y6kj9iv">
                <Icons.eye className="h-4 w-4" data-oid="icr_0:7" />
                <span className="sr-only" data-oid="77xfd5b">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="b:lsmrn"
            >
              <div className="flex items-center space-x-4" data-oid="s7ks7h8">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="fx_n3_6"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="uv:ix8l"
                  />
                </div>
                <div data-oid="1g2_a0h">
                  <p className="text-sm font-medium" data-oid="d8c:fdi">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="t9aw8ki"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="nl:7u7r">
                <Icons.eye className="h-4 w-4" data-oid="3wmha2m" />
                <span className="sr-only" data-oid="xwei-lr">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="24-..3r"
            >
              <div className="flex items-center space-x-4" data-oid="kgmgwq6">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="998a8.o"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="6_g0r33"
                  />
                </div>
                <div data-oid="_fr9fue">
                  <p className="text-sm font-medium" data-oid="xfjont_">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="-ylkra4"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="h5dx0r7">
                <Icons.eye className="h-4 w-4" data-oid="s.2i1pv" />
                <span className="sr-only" data-oid="70jpaco">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="jouhit4">
            <Button variant="outline" className="w-full" data-oid="q59x8pq">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="2q3c0ne">
          <CardHeader data-oid="bc4lpn1">
            <CardTitle data-oid="vjz9l7b">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="b-ascnr">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="i7wpws4"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="d4ikq0r"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="p1r59j-"
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
                  data-oid="893:vax"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="ms4g8st"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="q51b..t"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="hu9tomb">
                      <p className="text-sm font-medium" data-oid="q-l8o4m">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="ik0p2d2"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="41tfmoh"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="4ef2r3p">
            <Button variant="outline" className="w-full" data-oid="qnnim2d">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="w3i2t65">
        <CardHeader data-oid="ep4_1z.">
          <CardTitle data-oid="ah2xd7.">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="watm_c_">
          <div className="grid gap-2 md:grid-cols-3" data-oid="fgctkyz">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="lkucmtg"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="23wqey9" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="50nj1kg"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="cm2xc9n" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="m5t76kx"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="8izj3x0" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="f-3nndt"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="chw:6em" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="oft3uii"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="t7_e3aq" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="iqmn9ss"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="2m3_db6" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
