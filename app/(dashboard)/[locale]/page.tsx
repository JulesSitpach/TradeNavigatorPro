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
      icon: <Icons.calculator className="h-6 w-6" data-oid="d6abyvx" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="6i8uw9v" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="jktz9n7" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="uu-5xly" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="bwg2yfe" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="yo5gez7">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="dznr_.s">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="wz.9kph">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="_aga:h_">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="w1xfs_7"
      >
        <Card data-oid="8v:l3ek">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="0zivyo-"
          >
            <CardTitle className="text-sm font-medium" data-oid="8_v8r.8">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="ileohrp"
            />
          </CardHeader>
          <CardContent data-oid="zbksvh.">
            <div className="text-2xl font-bold" data-oid=":ewuy6n">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="3s5zgfo"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="j5s8jho" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="w1q7zja" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="p:h2lxm">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="ianvgf-"
          >
            <CardTitle className="text-sm font-medium" data-oid="qzrinv4">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid=":l8n4mi"
            />
          </CardHeader>
          <CardContent data-oid=".sl48co">
            <div className="text-2xl font-bold" data-oid="pf09m.o">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="7t.bzjh"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="w-:-bwo" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="7j26:e0" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="1hhj7bp">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="tx:_jq9"
          >
            <CardTitle className="text-sm font-medium" data-oid="2_o.jws">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="3cfq-xc"
            />
          </CardHeader>
          <CardContent data-oid="ixxj.jk">
            <div className="text-2xl font-bold" data-oid="7:wdhx5">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="5iq10dq"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="0mowdn0" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="bs.hiky" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="lkj0hxz">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="jq8ns1m"
          >
            <CardTitle className="text-sm font-medium" data-oid="a1sx.t:">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="2_wyxqu"
            />
          </CardHeader>
          <CardContent data-oid="a_qxoh:">
            <div className="text-2xl font-bold" data-oid="klxr55-">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="yi8iwn5"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="_u8e1z:" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="b-2vdsg" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="5.kuq06">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="1to:v:f"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="fvv3vsu"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="2r_uxbq">
              <CardHeader className="p-4" data-oid="9zp5-ve">
                <div className="flex items-center gap-2" data-oid="kc0:.bg">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="r90g3as"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="hsuv7y6">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="oi_5pk_">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="pur7uoz">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="e_vg:80"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="bj4mxxy" />
                  <span className="text-muted-foreground" data-oid="fwrq643">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="lewcbxm">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="8j3qclk"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="3-9w79d"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="1kb59j1">
                <Button asChild className="w-full" data-oid="-3igzbg">
                  <Link href={app.href} data-oid="3-p6pjz">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="w8xq9y."
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="xvqpjvb">
        <Card data-oid="pi9w0cs">
          <CardHeader data-oid="vxopjo6">
            <CardTitle data-oid="dj-gzv3">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="bg9qsp5">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="3sd.c3j"
            >
              <div className="flex items-center space-x-4" data-oid="zuo5v.3">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ii2jl2q"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="9t701qs"
                  />
                </div>
                <div data-oid="5oxd42a">
                  <p className="text-sm font-medium" data-oid="3gs3tac">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="o1nb9rt"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="yj750d:">
                <Icons.eye className="h-4 w-4" data-oid="xm_1:ge" />
                <span className="sr-only" data-oid="mau2164">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="1m3ghzt"
            >
              <div className="flex items-center space-x-4" data-oid="4mrdxv3">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ew99vb4"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="0fi58ll"
                  />
                </div>
                <div data-oid="_fhw4fx">
                  <p className="text-sm font-medium" data-oid="r-ukozb">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="831avj3"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="6f1:vpk">
                <Icons.eye className="h-4 w-4" data-oid="z-rhh8s" />
                <span className="sr-only" data-oid="7is.44h">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="brs6.hf"
            >
              <div className="flex items-center space-x-4" data-oid=".z5:.m-">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="rmh35zw"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="w_kj3z6"
                  />
                </div>
                <div data-oid="q3bk5bg">
                  <p className="text-sm font-medium" data-oid=":k7gkt1">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="5axm0:0"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="6w17k.k">
                <Icons.eye className="h-4 w-4" data-oid="00lr6-7" />
                <span className="sr-only" data-oid="__0_9lh">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="7xyp7oy">
            <Button variant="outline" className="w-full" data-oid="94vtydg">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="1cshkyy">
          <CardHeader data-oid="t70:bt_">
            <CardTitle data-oid="-rewruh">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="e-sa6h6">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="oykzwps"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid=":qo3l6i"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="20gua2b"
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
                  data-oid="eka.y-7"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="qneof-e"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="lw3wvc9"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="zt7e-1f">
                      <p className="text-sm font-medium" data-oid="--5q4.o">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="o2kdidn"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="4edi9kp"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="06l76m8">
            <Button variant="outline" className="w-full" data-oid="wzptv0j">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="wrx0n96">
        <CardHeader data-oid="_77c4hl">
          <CardTitle data-oid="yu2bn2z">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="d0f9-ae">
          <div className="grid gap-2 md:grid-cols-3" data-oid="s1gcjst">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="8s23-w-"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid=".1x_ths" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid=":-7_ymf"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="bjo3s0b" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="t47up-r"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="-8j-0:n" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="-8:0mua"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid=":fkl2q_" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="0eau_93"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="ejxlsz9" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="fjs09-s"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="yd7i7zk" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
