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
      icon: <Icons.calculator className="h-6 w-6" data-oid="8ow5i0g" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="48nj_p2" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="p7dtio." />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="x:ivkoq" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="wyy1dyt" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="mauf2cn">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="vg3b04p">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="kh-c:ry">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="5z6d40j">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="ouae:y:"
      >
        <Card data-oid="v0i1njq">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="zt5eq40"
          >
            <CardTitle className="text-sm font-medium" data-oid="ld1wdmq">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="e1yncn9"
            />
          </CardHeader>
          <CardContent data-oid="e0q:i07">
            <div className="text-2xl font-bold" data-oid="l:0gfsy">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="5:6_b-q"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="r80pv_q" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="5tmjnn-" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="lw.o:kn">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="dv.chhv"
          >
            <CardTitle className="text-sm font-medium" data-oid="m_-3qu4">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="axq.6kh"
            />
          </CardHeader>
          <CardContent data-oid="4aog5b2">
            <div className="text-2xl font-bold" data-oid="i051cf6">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="tcf769."
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="33xjksp" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="a1r_yq6" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="9yn1wml">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="9qsdgvf"
          >
            <CardTitle className="text-sm font-medium" data-oid="hvbbaaw">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="5130ow3"
            />
          </CardHeader>
          <CardContent data-oid="ofbta-8">
            <div className="text-2xl font-bold" data-oid="quhlvxv">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="wisj44_"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="1puz_nr" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="_m70:8d" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="kdxej-n">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="a1dbeje"
          >
            <CardTitle className="text-sm font-medium" data-oid="dzgjk2x">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid=".39.41p"
            />
          </CardHeader>
          <CardContent data-oid="xnq46h3">
            <div className="text-2xl font-bold" data-oid="80eqone">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="rh4lq7l"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="1icwrla" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="uyh0zh6" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid=".uu7t-l">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid=":9tomr9"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="ro7yxr:"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="gwmw9vp">
              <CardHeader className="p-4" data-oid="g8o:7fs">
                <div className="flex items-center gap-2" data-oid="wib6h5k">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="_3xmv18"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="ue3u0on">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="r2wsv6g">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="_4t6fd3">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="s9dtn__"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="2rmwy4j" />
                  <span className="text-muted-foreground" data-oid="wwkgmi1">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="0k6jzpm">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="tdw5:ha"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="d-dw7qw"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid=".7nm.an">
                <Button asChild className="w-full" data-oid="sze3-sa">
                  <Link href={app.href} data-oid="vvjdko4">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="6gpj0-:"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="_aiuciq">
        <Card data-oid="xh:.hup">
          <CardHeader data-oid="rqsblqx">
            <CardTitle data-oid="wxdhk0o">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="-._y-gg">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="dt7d8rl"
            >
              <div className="flex items-center space-x-4" data-oid="jd4.ovr">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="3-jtzcs"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="rsig7fs"
                  />
                </div>
                <div data-oid="e2lod35">
                  <p className="text-sm font-medium" data-oid="58fxks4">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="krdqhyi"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="-gyvpki">
                <Icons.eye className="h-4 w-4" data-oid="wsohn29" />
                <span className="sr-only" data-oid="riidv73">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="vw1.y9v"
            >
              <div className="flex items-center space-x-4" data-oid="8_2cjyc">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="j:n-pd4"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="yn7kfjn"
                  />
                </div>
                <div data-oid="o2u29nl">
                  <p className="text-sm font-medium" data-oid="coqf4ob">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="ockmbw3"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="i3dean1">
                <Icons.eye className="h-4 w-4" data-oid="u752qh." />
                <span className="sr-only" data-oid="xw-zoa7">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="n-c-ue6"
            >
              <div className="flex items-center space-x-4" data-oid="o-6:wxa">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="_epo44b"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="3clt7h2"
                  />
                </div>
                <div data-oid="jp4.fmw">
                  <p className="text-sm font-medium" data-oid="hh7cf4_">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="10m8-ih"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="qw4st7w">
                <Icons.eye className="h-4 w-4" data-oid="ml1ng4." />
                <span className="sr-only" data-oid="6vsrztu">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="g-sye14">
            <Button variant="outline" className="w-full" data-oid="vfy2cnh">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="j5r_lmz">
          <CardHeader data-oid="c.xqam3">
            <CardTitle data-oid="jz:ya4:">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="k20otld">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="weeay6s"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="uwrxdv-"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="dun8cql"
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
                  data-oid="nzkcvf6"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="zsn14jx"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="-wt.gks"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="5if7udx">
                      <p className="text-sm font-medium" data-oid=".:vtbym">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="8hjyaw0"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="zv88zf_"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="xssjll0">
            <Button variant="outline" className="w-full" data-oid="pzc-2hv">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="5_bh4ai">
        <CardHeader data-oid="rmjt3hl">
          <CardTitle data-oid="_ll2fi2">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid=".a631oc">
          <div className="grid gap-2 md:grid-cols-3" data-oid="q7irx-b">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="avdsny0"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="uu77n4g" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="24_vch:"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="o:nq6zz" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="qo8mr7j"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="y563b9a" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="6-iy69h"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="mjs20p9" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="vek.hxc"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="-scy7en" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="tpe4g_5"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="qr9y8wn" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
