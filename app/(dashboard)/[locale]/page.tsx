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
      icon: <Icons.calculator className="h-6 w-6" data-oid="ae9c7r4" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="4zba7de" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="ldekhpo" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="itlgg6-" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="_2w54ix" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="-r.lp8x">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="zc0q_7i">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="qbk6gnk">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="0zek7r3">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="po6zpil"
      >
        <Card data-oid="0_nhr7z">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="yagkohw"
          >
            <CardTitle className="text-sm font-medium" data-oid="y-teefh">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="ec9.w4m"
            />
          </CardHeader>
          <CardContent data-oid="2v8w_1e">
            <div className="text-2xl font-bold" data-oid="1u:x9do">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="1u:x.mu"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="lkzois5" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="dg29g.g" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="kje7sv-">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="kfb8har"
          >
            <CardTitle className="text-sm font-medium" data-oid="8w9fki8">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="musd41l"
            />
          </CardHeader>
          <CardContent data-oid="ow9xtmt">
            <div className="text-2xl font-bold" data-oid="69r.l2-">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="e2:4eu."
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="_1o770l" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="tz.o147" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="8posh7g">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="a1ppnrk"
          >
            <CardTitle className="text-sm font-medium" data-oid="zb.yqty">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid=".4n_th2"
            />
          </CardHeader>
          <CardContent data-oid="lwjspkc">
            <div className="text-2xl font-bold" data-oid=":i7590b">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="x835:.v"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="vabtagi" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="d6.3lz5" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="0ogzrgp">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="yxhua1t"
          >
            <CardTitle className="text-sm font-medium" data-oid="ic-u5of">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="dd2ew7c"
            />
          </CardHeader>
          <CardContent data-oid=":65lwkm">
            <div className="text-2xl font-bold" data-oid="yvb9hk9">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="ffgyuaf"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="qrm4-bv" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="b74.88w" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="--wl173">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="i.7cwfr"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="7t4au0n"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="33r60yt">
              <CardHeader className="p-4" data-oid="00-m3w2">
                <div className="flex items-center gap-2" data-oid="70l0m7-">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="k7af8p7"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="83umk6.">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="s47xrb.">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="06prs.4">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="-oiyri8"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="bmed-71" />
                  <span className="text-muted-foreground" data-oid="d4w6jxr">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="oj1fxdm">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="l0t_vtm"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="dhdimsm"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="zasoqbc">
                <Button asChild className="w-full" data-oid="u8ax4nr">
                  <Link href={app.href} data-oid="-griqww">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="r7bkkm2"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="5ck3161">
        <Card data-oid="vjf9_j4">
          <CardHeader data-oid="fw5r6x_">
            <CardTitle data-oid="p16espy">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="zpuzzl.">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="l:pwk6n"
            >
              <div className="flex items-center space-x-4" data-oid="u-.46ef">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="lipzz2g"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="npbuj9i"
                  />
                </div>
                <div data-oid=":v9iavg">
                  <p className="text-sm font-medium" data-oid="5tngf:k">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="v7t2r1e"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="tpcdh77">
                <Icons.eye className="h-4 w-4" data-oid="xtv47-2" />
                <span className="sr-only" data-oid="nlarf73">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="35pyyvg"
            >
              <div className="flex items-center space-x-4" data-oid="y:xztfy">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ccca:c8"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid=".wr1eco"
                  />
                </div>
                <div data-oid="uxtymhy">
                  <p className="text-sm font-medium" data-oid="xg6ewnn">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="0kusws7"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="ul.p5ns">
                <Icons.eye className="h-4 w-4" data-oid="6pqhun0" />
                <span className="sr-only" data-oid="of4oof:">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="cjqaqs4"
            >
              <div className="flex items-center space-x-4" data-oid=":gv40fm">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="yq4ufdv"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="_1g.7ot"
                  />
                </div>
                <div data-oid="0:t:-9w">
                  <p className="text-sm font-medium" data-oid="6.s99t:">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="2fb1z_c"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="m3gef._">
                <Icons.eye className="h-4 w-4" data-oid="2k6.0ct" />
                <span className="sr-only" data-oid="7quk57_">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="hntwb7b">
            <Button variant="outline" className="w-full" data-oid="8qsia7q">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="nzk5okp">
          <CardHeader data-oid="eu9.r4o">
            <CardTitle data-oid="ltg20wn">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="aow6zq.">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="wgo01vo"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="x99ef97"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="8_ta00s"
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
                  data-oid="aa3doz1"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="mc9wcdv"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="0s3ta.i"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="ss17zdy">
                      <p className="text-sm font-medium" data-oid="4-f7qvl">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="ozqnvc8"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="qx_a.hh"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="s_1niui">
            <Button variant="outline" className="w-full" data-oid="acwphs4">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid=".qmkxhz">
        <CardHeader data-oid="pl:._5_">
          <CardTitle data-oid="bwk_k88">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="qvmuj7u">
          <div className="grid gap-2 md:grid-cols-3" data-oid="mxvbrx.">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="jmq:a0f"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="zhdy584" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="tb7l-5-"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="a2v97ub" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="uer2pls"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="00u1rur" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="4dzwlrr"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="vllydyr" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="z2tmj45"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="u9x44.q" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="opfw_e1"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="q9m46tp" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
