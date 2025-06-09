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
      icon: <Icons.calculator className="h-6 w-6" data-oid="71vdohx" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="j-_0673" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="0j2xg19" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="6rqnws4" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid=":gd1z:5" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="6xoxu9e">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="3aq7_ho">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="u8m2wft">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="sbl-i:.">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="v9vjnys"
      >
        <Card data-oid="apsxwju">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="38_y51k"
          >
            <CardTitle className="text-sm font-medium" data-oid="ui50ik9">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="mp7amrr"
            />
          </CardHeader>
          <CardContent data-oid="6mr1.1d">
            <div className="text-2xl font-bold" data-oid="qy5165:">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="5iy7p1n"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="da7vrvi" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="5o1l.qk" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="zqv8grs">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="kie2.j6"
          >
            <CardTitle className="text-sm font-medium" data-oid="ox-vavp">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="khyctwh"
            />
          </CardHeader>
          <CardContent data-oid="m4t3acy">
            <div className="text-2xl font-bold" data-oid="mztea._">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="8eozftr"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="7ra_xa-" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="1ubnhw." />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="e6t4z:p">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="vdanq6i"
          >
            <CardTitle className="text-sm font-medium" data-oid="9ox3yzm">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="wuwm7kr"
            />
          </CardHeader>
          <CardContent data-oid="1cp7vx_">
            <div className="text-2xl font-bold" data-oid="iui0y5h">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="_ykx0hl"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="-28.ir9" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="oak94nh" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="n3_8937">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="udriir4"
          >
            <CardTitle className="text-sm font-medium" data-oid="i25.m89">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="kzn:wme"
            />
          </CardHeader>
          <CardContent data-oid="kz:lktg">
            <div className="text-2xl font-bold" data-oid=":ejjpg2">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="cyj-d5w"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="u6ywwj9" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="ong2jy8" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="ju:-9f6">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="x_rxlw9"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="tsulaha"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="4w5_-.x">
              <CardHeader className="p-4" data-oid="--hqvgq">
                <div className="flex items-center gap-2" data-oid="m55wd-0">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="l:hdb2y"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="i.-kwdz">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="1df5j_.">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="ro5_7o3">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="1hcanxr"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="o:kdbtv" />
                  <span className="text-muted-foreground" data-oid=":nby5-3">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="0m1ggyy">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="h5:6maj"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="igppfr_"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="ook_lhw">
                <Button asChild className="w-full" data-oid="4t100zm">
                  <Link href={app.href} data-oid="-2a5yoy">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="j.nhhtl"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="czts:64">
        <Card data-oid="w44hvst">
          <CardHeader data-oid="iw-z06.">
            <CardTitle data-oid="6xfb--x">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="v9ndk:1">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="dy1xlhg"
            >
              <div className="flex items-center space-x-4" data-oid="04wodku">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="h0.k_hj"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="eyowmzr"
                  />
                </div>
                <div data-oid="erokoum">
                  <p className="text-sm font-medium" data-oid="qta3cq_">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="9z4h1mu"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="cqh3e_x">
                <Icons.eye className="h-4 w-4" data-oid="xaf02g1" />
                <span className="sr-only" data-oid="a_ow0u6">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="92m7skg"
            >
              <div className="flex items-center space-x-4" data-oid="dvt101r">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="5v2tva4"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="6nnirn9"
                  />
                </div>
                <div data-oid="5.ela7g">
                  <p className="text-sm font-medium" data-oid="x86ed.2">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="x7nc820"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="tm8ai7j">
                <Icons.eye className="h-4 w-4" data-oid="rd2.cd8" />
                <span className="sr-only" data-oid="4rfp2vv">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="zh_mt8w"
            >
              <div className="flex items-center space-x-4" data-oid="mkbd:hm">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="xs_xwum"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="..mb6gu"
                  />
                </div>
                <div data-oid="4ab7mh.">
                  <p className="text-sm font-medium" data-oid="cect674">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="mth0z8:"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="6vi44_1">
                <Icons.eye className="h-4 w-4" data-oid="4rw03lf" />
                <span className="sr-only" data-oid="sf:6a2u">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="wo.6v:c">
            <Button variant="outline" className="w-full" data-oid="vax701k">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="bxs.60k">
          <CardHeader data-oid="fd2o_fj">
            <CardTitle data-oid="-gp.bsd">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="4qn-21e">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="db6x9qm"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="m9dy3iu"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="pf-sg88"
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
                  data-oid="0-q6pwm"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="36asj-d"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="ttlrvxp"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="v39rsmi">
                      <p className="text-sm font-medium" data-oid="9yqx7ll">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="02rx.0m"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="fdytsni"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="ausq.ii">
            <Button variant="outline" className="w-full" data-oid="ioje:i0">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="rlhucb6">
        <CardHeader data-oid="80h-jus">
          <CardTitle data-oid="ct78w3t">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="qh57fxi">
          <div className="grid gap-2 md:grid-cols-3" data-oid="n3u1.d8">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="uf-7hit"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="_4i:f3v" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="twh62fm"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="._52_pp" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="kwix_-r"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid=":190z9:" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="0ltw15q"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="tetwq:b" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="if0l6rr"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="x409_-n" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="ziw19o_"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="917j351" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
