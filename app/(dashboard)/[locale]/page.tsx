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
      icon: <Icons.calculator className="h-6 w-6" data-oid="b23hqa1" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="zauasfn" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="-rl.mkf" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="n19hukr" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="yhr1pul" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="1ptppsv">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="15idrh5">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="kylpn7:">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="x6iqn05">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="azkhu7n"
      >
        <Card data-oid="473plqk">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid=":ny33xn"
          >
            <CardTitle className="text-sm font-medium" data-oid="bctt67m">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="4477rap"
            />
          </CardHeader>
          <CardContent data-oid="8q5wt::">
            <div className="text-2xl font-bold" data-oid="mkwspq-">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="01_uuxi"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="9zqzn7:" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="ns_6:e6" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="_1h.srg">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="606.j6o"
          >
            <CardTitle className="text-sm font-medium" data-oid="5a5mbr_">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="s3_1tsm"
            />
          </CardHeader>
          <CardContent data-oid="-o1gfiq">
            <div className="text-2xl font-bold" data-oid="e:5.8k3">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="11rnqyp"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="j9tmi4a" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid=".euzhhz" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="h7t620g">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="rss2aot"
          >
            <CardTitle className="text-sm font-medium" data-oid="ugmpf5t">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="_s-l1s5"
            />
          </CardHeader>
          <CardContent data-oid="rbrakww">
            <div className="text-2xl font-bold" data-oid="2cyh1r.">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="canvu.7"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="gzu9p7h" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="qcejjpw" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="0vxvffx">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="s0v8t-4"
          >
            <CardTitle className="text-sm font-medium" data-oid="l.gnux0">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="r2:x.fe"
            />
          </CardHeader>
          <CardContent data-oid="q7::fo1">
            <div className="text-2xl font-bold" data-oid="1-lo1us">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="996.iqd"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="q.erh9u" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="srk4ks5" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="f-uk7:s">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="7t57d5_"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid="ai096.l"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="z9183t3">
              <CardHeader className="p-4" data-oid="aljnoqm">
                <div className="flex items-center gap-2" data-oid="5lh:lli">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="-8ewq-k"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="ln9xtke">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="u1zoez:">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="17dhiyc">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="0o.71y5"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="pxu7rl." />
                  <span className="text-muted-foreground" data-oid="hfnjw6z">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="s_j6vyh">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="7thvndq"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="gz877lp"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="ho4111.">
                <Button asChild className="w-full" data-oid="adofvka">
                  <Link href={app.href} data-oid="kw3_.m3">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="fpw8vil"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="8ti6ex8">
        <Card data-oid="ipx.ha8">
          <CardHeader data-oid="wouir73">
            <CardTitle data-oid="n.f5vhy">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="h65yxm_">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="j_c.nwp"
            >
              <div className="flex items-center space-x-4" data-oid="ouwmkoa">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="ihrf4ph"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="2t7drxf"
                  />
                </div>
                <div data-oid="2c0s:qy">
                  <p className="text-sm font-medium" data-oid="0b-xscu">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="ik191f2"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="_g8qiq2">
                <Icons.eye className="h-4 w-4" data-oid="p7j8ki5" />
                <span className="sr-only" data-oid=".0v2x13">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="9:ca_:l"
            >
              <div className="flex items-center space-x-4" data-oid="o2w.bhi">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid=".q_uo3r"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="81y:jw8"
                  />
                </div>
                <div data-oid="z7327kg">
                  <p className="text-sm font-medium" data-oid="6yu:94l">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="odl:9p3"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="yek97.4">
                <Icons.eye className="h-4 w-4" data-oid="yivv1fc" />
                <span className="sr-only" data-oid="8c-d:d4">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="u0_ixve"
            >
              <div className="flex items-center space-x-4" data-oid="k422vvw">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="xc4ka22"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="6yd_mj7"
                  />
                </div>
                <div data-oid="a00f1e:">
                  <p className="text-sm font-medium" data-oid="dywfy9j">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="e_g4fb1"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="2.13l8j">
                <Icons.eye className="h-4 w-4" data-oid="3sj54b9" />
                <span className="sr-only" data-oid="y-5wzl6">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="zxrw-j2">
            <Button variant="outline" className="w-full" data-oid="qxqu4rd">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="n8y1lr1">
          <CardHeader data-oid="ywmathy">
            <CardTitle data-oid=".8bo9_e">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="iwtgwi.">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="7nnyjgu"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="4bzn5um"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="_f39v5_"
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
                  data-oid="k5opcjn"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="1fc6cn6"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="axynji."
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="zu-tbae">
                      <p className="text-sm font-medium" data-oid="1a9ye3n">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="pe-d9lx"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="ay9znxu"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="1ycomwz">
            <Button variant="outline" className="w-full" data-oid="2stfrvc">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="4axk-1s">
        <CardHeader data-oid="c97w.yy">
          <CardTitle data-oid="cu4fq.6">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="o5dsag4">
          <div className="grid gap-2 md:grid-cols-3" data-oid="z93jzlh">
            <Button
              variant="outline"
              className="justify-start"
              data-oid="12onexp"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="v4.b:yw" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="j7b4chu"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="y5cmowr" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="x6px-00"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="lq55450" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="l1msgzw"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="3s3zfzl" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="0vwl12."
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="jarfq.n" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="czlhpp0"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid="5admsg_" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
