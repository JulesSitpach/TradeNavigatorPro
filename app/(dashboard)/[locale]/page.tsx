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
      icon: <Icons.calculator className="h-6 w-6" data-oid="0vtxt21" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="qc:f43." />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="prvkvf0" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="pv4w030" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="kdbs9yl" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="s5h530p">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="-rop-07">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="yfyhl8b">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="_a4h9pi">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="m5vmmfr"
      >
        <Card data-oid="mr:k:jx">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="s6unc3d"
          >
            <CardTitle className="text-sm font-medium" data-oid="95ko0h_">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="3o1037y"
            />
          </CardHeader>
          <CardContent data-oid=":znvxhn">
            <div className="text-2xl font-bold" data-oid="g1yy2ex">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="f07p1ed"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="q.7snkt" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="ut1d.7k" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="zxbxha-">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="srfwdb1"
          >
            <CardTitle className="text-sm font-medium" data-oid="jy7n0vu">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="u6jlpfd"
            />
          </CardHeader>
          <CardContent data-oid="accaufs">
            <div className="text-2xl font-bold" data-oid="chqnq.z">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="dqtj3pt"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="ksap-wa" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="dizxwsa" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="gbw8vg2">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="d9ilkte"
          >
            <CardTitle className="text-sm font-medium" data-oid="143ye_k">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="kul.-30"
            />
          </CardHeader>
          <CardContent data-oid=".-4cdhj">
            <div className="text-2xl font-bold" data-oid="o4mmkbj">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="22g5xa7"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="o8-zf:g" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="4g:qfn6" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="djmqm-u">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="._lub43"
          >
            <CardTitle className="text-sm font-medium" data-oid="h5_9c8_">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="4yl0y-t"
            />
          </CardHeader>
          <CardContent data-oid="yh5qwfk">
            <div className="text-2xl font-bold" data-oid="88pqe1z">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="p-.7n6d"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="uxq2.vz" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=":a.veq:" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="eg7-cw4">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid=":bou:u2"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="wofktrw"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="xt6ppx8">
              <CardHeader className="p-4" data-oid="scic62h">
                <div className="flex items-center gap-2" data-oid=":smbcu4">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="dzxc7zm"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="89rk554">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="w.v7ot_">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="famjp5g">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="tam5cus"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="tzy6d6p" />
                  <span className="text-muted-foreground" data-oid="9jh1exj">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="yaksnt8">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="zap5p0_"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="xd4a1k3"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="d_v83-w">
                <Button asChild className="w-full" data-oid="6oj8v2w">
                  <Link href={app.href} data-oid="0sd7_ra">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="gyfso4y"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="k3fcvca">
        <Card data-oid="5hwca3k">
          <CardHeader data-oid=":zy1l4h">
            <CardTitle data-oid="s_usqv7">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="0239z9.">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="e4t.68g"
            >
              <div className="flex items-center space-x-4" data-oid="3ycy4m5">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="-rakqtl"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="2f:gqye"
                  />
                </div>
                <div data-oid="l.at1e_">
                  <p className="text-sm font-medium" data-oid="3xy:9lu">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="ujf5zzj"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="_xf16im">
                <Icons.eye className="h-4 w-4" data-oid="1q38z_x" />
                <span className="sr-only" data-oid="j3kfz23">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="rjq.3d6"
            >
              <div className="flex items-center space-x-4" data-oid="p01oob.">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="-085nav"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="unfct18"
                  />
                </div>
                <div data-oid="tgsu8go">
                  <p className="text-sm font-medium" data-oid="agyi7rh">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="8xbm2kw"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="y7c20y6">
                <Icons.eye className="h-4 w-4" data-oid="ua-g_wz" />
                <span className="sr-only" data-oid="rn4su.l">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="d0u:nri"
            >
              <div className="flex items-center space-x-4" data-oid="hhs6ohf">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="b-sev3i"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="uw9:5ol"
                  />
                </div>
                <div data-oid="9_kew0_">
                  <p className="text-sm font-medium" data-oid=".y8yrf:">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="rnhub45"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="z:hcx02">
                <Icons.eye className="h-4 w-4" data-oid="scjtkv5" />
                <span className="sr-only" data-oid="jfyl_v0">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="do3enob">
            <Button variant="outline" className="w-full" data-oid="nf_zqpi">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="cvi245k">
          <CardHeader data-oid="2pcpo4:">
            <CardTitle data-oid="cg1v3dd">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="om400p4">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="di_pa3f"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="dm1:fq2"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="0vz-7wb"
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
                  data-oid="8-0k2rf"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="b_l0-tw"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="99em4:l"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="c2_3_n_">
                      <p className="text-sm font-medium" data-oid="xnu60mi">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="w70l:ft"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="4ze6f3q"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="pulwq9y">
            <Button variant="outline" className="w-full" data-oid="njsmcpc">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="z6.b0e8">
        <CardHeader data-oid="0h2pzxs">
          <CardTitle data-oid="lvn1oui">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="030u64f">
          <div className="grid gap-2 md:grid-cols-3" data-oid="hn:d946">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="1em9zbc"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="ve_7l7a" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="jagd.n."
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="bno5a5p" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="q7w5az_"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="xkkbi:f" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="eqpd5d8"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="_0td-66" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="l.zt.of"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="1-oz56t" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="625k659"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="n4bsl41" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
