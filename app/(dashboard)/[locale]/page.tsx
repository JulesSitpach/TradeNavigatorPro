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
      icon: <Icons.calculator className="h-6 w-6" data-oid="af7vsos" />,
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
      icon: <Icons.network className="h-6 w-6" data-oid="xmi68sx" />,
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
      icon: <Icons.dollarSign className="h-6 w-6" data-oid="g2mz_cf" />,
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
      icon: <Icons.clock className="h-6 w-6" data-oid="z.web80" />,
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
      icon: <Icons.route className="h-6 w-6" data-oid="6mwez__" />,
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
    <div className="flex flex-col gap-6 p-6 md:gap-8" data-oid="q47vh4a">
      {/* Page header */}
      <div className="flex flex-col gap-2" data-oid="9j2tags">
        <h1 className="text-3xl font-bold tracking-tight" data-oid="mvrec-6">
          {t.title}
        </h1>
        <p className="text-muted-foreground" data-oid="j0r.ll5">
          {dictionary.common.welcome} to TradeNavigatorPro
        </p>
      </div>

      {/* Key metrics */}
      <div
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
        data-oid="l4p5bd1"
      >
        <Card data-oid="jdc2k09">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="cnmxmt7"
          >
            <CardTitle className="text-sm font-medium" data-oid="t3lu6pc">
              {t.costImpact}
            </CardTitle>
            <Icons.dollarSign
              className="h-4 w-4 text-muted-foreground"
              data-oid="wpcb0bi"
            />
          </CardHeader>
          <CardContent data-oid="pt8wo97">
            <div className="text-2xl font-bold" data-oid=".r80mf8">
              {metrics.costImpact.value}
            </div>
            <p
              className={`text-xs ${metrics.costImpact.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="ph.t719"
            >
              {metrics.costImpact.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="rya3mw6" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="f2e40-e" />
              )}
              {metrics.costImpact.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="vhjp:x7">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="8dymb8t"
          >
            <CardTitle className="text-sm font-medium" data-oid="4hsysjx">
              {t.upcomingChanges}
            </CardTitle>
            <Icons.alertTriangle
              className="h-4 w-4 text-muted-foreground"
              data-oid="09xlaul"
            />
          </CardHeader>
          <CardContent data-oid="hsmtqk7">
            <div className="text-2xl font-bold" data-oid="igsj.or">
              {metrics.tariffChanges.value}
            </div>
            <p
              className={`text-xs ${metrics.tariffChanges.increasing ? "text-amber-500" : "text-green-500"} flex items-center`}
              data-oid="fdqnj0n"
            >
              {metrics.tariffChanges.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="shh7-oz" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="5v98ivi" />
              )}
              {metrics.tariffChanges.change} from last month
            </p>
          </CardContent>
        </Card>
        <Card data-oid="ybc.7lb">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="0eezf16"
          >
            <CardTitle className="text-sm font-medium" data-oid="7i5lb5e">
              Supplier Alternatives
            </CardTitle>
            <Icons.network
              className="h-4 w-4 text-muted-foreground"
              data-oid="bfk_8-0"
            />
          </CardHeader>
          <CardContent data-oid="yuulaqr">
            <div className="text-2xl font-bold" data-oid="9kl5hgy">
              {metrics.supplierAlternatives.value}
            </div>
            <p
              className={`text-xs ${metrics.supplierAlternatives.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="j.rtdwq"
            >
              {metrics.supplierAlternatives.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="-99s2t3" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="_edkpa6" />
              )}
              {metrics.supplierAlternatives.change} new options
            </p>
          </CardContent>
        </Card>
        <Card data-oid="-xpswlr">
          <CardHeader
            className="flex flex-row items-center justify-between pb-2"
            data-oid="699yzg:"
          >
            <CardTitle className="text-sm font-medium" data-oid="dkelh74">
              Duty Drawbacks
            </CardTitle>
            <Icons.fileCheck
              className="h-4 w-4 text-muted-foreground"
              data-oid="gnwgvtp"
            />
          </CardHeader>
          <CardContent data-oid="f9eg2bp">
            <div className="text-2xl font-bold" data-oid="qptqnxn">
              {metrics.dutyDrawbacks.value}
            </div>
            <p
              className={`text-xs ${metrics.dutyDrawbacks.increasing ? "text-green-500" : "text-red-500"} flex items-center`}
              data-oid="_1qzv3-"
            >
              {metrics.dutyDrawbacks.increasing ? (
                <Icons.arrowUp className="mr-1 h-3 w-3" data-oid="wrhs:to" />
              ) : (
                <Icons.arrowDown className="mr-1 h-3 w-3" data-oid="d:.4pac" />
              )}
              {metrics.dutyDrawbacks.change} available
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core applications */}
      <div data-oid="-7c-fy-">
        <h2
          className="mb-4 text-xl font-semibold tracking-tight"
          data-oid="i3ldaxq"
        >
          {dictionary.navigation.applications}
        </h2>
        <div
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          data-oid=":8oevue"
        >
          {coreApplications.map((app) => (
            <Card key={app.id} className="overflow-hidden" data-oid="yzj1sf-">
              <CardHeader className="p-4" data-oid=":m6r8_:">
                <div className="flex items-center gap-2" data-oid="1yvaj8-">
                  <div
                    className={`rounded-md p-2 ${app.color}`}
                    data-oid="8wh9dx:"
                  >
                    {app.icon}
                  </div>
                  <CardTitle className="text-lg" data-oid="lmpal.e">
                    {app.title}
                  </CardTitle>
                </div>
                <CardDescription data-oid="f-50gvq">
                  {app.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0" data-oid="gq-8xgw">
                <div
                  className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm"
                  data-oid="bw9xg-l"
                >
                  <Icons.info className="mr-1 h-4 w-4" data-oid="4.ni5c7" />
                  <span className="text-muted-foreground" data-oid="11baf27">
                    {app.problem}
                  </span>
                </div>
                <ul className="mt-2 space-y-1 text-sm" data-oid="o0sqhu1">
                  {app.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center"
                      data-oid="rnyg65e"
                    >
                      <Icons.check
                        className="mr-2 h-4 w-4 text-green-500"
                        data-oid="-kvqa:o"
                      />

                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-4 pt-0" data-oid="a3vo7lq">
                <Button asChild className="w-full" data-oid="3tlft5-">
                  <Link href={app.href} data-oid="miivmup">
                    {dictionary.common.open}
                    <Icons.chevronRight
                      className="ml-2 h-4 w-4"
                      data-oid="gy-ykpo"
                    />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent activity and alerts */}
      <div className="grid gap-4 md:grid-cols-2" data-oid="xe-v0vz">
        <Card data-oid="nqz8ag:">
          <CardHeader data-oid="64u:wxt">
            <CardTitle data-oid="zoqfw9a">{t.recentActivity}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="4ag1:xf">
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="097f.5."
            >
              <div className="flex items-center space-x-4" data-oid="ygzcu7v">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="-ibqhvw"
                >
                  <Icons.calculator
                    className="h-4 w-4 text-primary"
                    data-oid="zmnjk2-"
                  />
                </div>
                <div data-oid="x7do7cf">
                  <p className="text-sm font-medium" data-oid="lb4uu-e">
                    Cost calculation completed
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="xi3my_v"
                  >
                    Today, 10:30 AM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="vi43.q7">
                <Icons.eye className="h-4 w-4" data-oid="8djai:x" />
                <span className="sr-only" data-oid="5jtt9n8">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="12tw91d"
            >
              <div className="flex items-center space-x-4" data-oid="bn4-:fc">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="aj8xrb1"
                >
                  <Icons.upload
                    className="h-4 w-4 text-primary"
                    data-oid="282si.1"
                  />
                </div>
                <div data-oid="uguwbqu">
                  <p className="text-sm font-medium" data-oid="dyeqm8c">
                    Data uploaded
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="m.mhdjc"
                  >
                    Yesterday, 4:45 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid="3bi2u9f">
                <Icons.eye className="h-4 w-4" data-oid="g2z6pdo" />
                <span className="sr-only" data-oid="ix.c2f2">
                  View
                </span>
              </Button>
            </div>
            <div
              className="flex items-center justify-between space-x-4"
              data-oid="8m2dce8"
            >
              <div className="flex items-center space-x-4" data-oid="d--87_b">
                <div
                  className="rounded-md bg-primary/10 p-2"
                  data-oid="o5gtu5n"
                >
                  <Icons.fileChart
                    className="h-4 w-4 text-primary"
                    data-oid="_akg3c6"
                  />
                </div>
                <div data-oid="m:18i:j">
                  <p className="text-sm font-medium" data-oid="7haly85">
                    Report generated
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    data-oid="u:paucg"
                  >
                    Yesterday, 2:20 PM
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" data-oid=":om3buq">
                <Icons.eye className="h-4 w-4" data-oid="ciml8jn" />
                <span className="sr-only" data-oid="rv4e.hu">
                  View
                </span>
              </Button>
            </div>
          </CardContent>
          <CardFooter data-oid="2n1veri">
            <Button variant="outline" className="w-full" data-oid="vqh9z.h">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>

        <Card data-oid="dswcunv">
          <CardHeader data-oid="wre_lbw">
            <CardTitle data-oid="opy-erh">{t.alerts}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4" data-oid="k58:.o9">
            {recentAlerts.map((alert) => {
              const alertIcon =
                alert.type === "tariff" ? (
                  <Icons.alertTriangle
                    className="h-4 w-4 text-red-500"
                    data-oid="fsu9ei9"
                  />
                ) : alert.type === "supplier" ? (
                  <Icons.network
                    className="h-4 w-4 text-blue-500"
                    data-oid="wdc8hl6"
                  />
                ) : (
                  <Icons.fileCheck
                    className="h-4 w-4 text-green-500"
                    data-oid="8kl3wz3"
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
                  data-oid="9fjckqi"
                >
                  <div
                    className="flex items-center space-x-4"
                    data-oid="32ng9:h"
                  >
                    <div
                      className="rounded-md bg-primary/10 p-2"
                      data-oid="5lx1d4m"
                    >
                      {alertIcon}
                    </div>
                    <div data-oid="5239cx-">
                      <p className="text-sm font-medium" data-oid=".3ehpnx">
                        {alert.title}
                      </p>
                      <p
                        className="text-xs text-muted-foreground"
                        data-oid="vue0609"
                      >
                        {alert.date}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={impactBadgeClass}
                    data-oid="v.:gkhw"
                  >
                    {alert.impact}
                  </Badge>
                </div>
              );
            })}
          </CardContent>
          <CardFooter data-oid="zbx0uff">
            <Button variant="outline" className="w-full" data-oid="pv6hkc3">
              {dictionary.common.viewAll}
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Quick actions */}
      <Card data-oid="_aep3ak">
        <CardHeader data-oid=":om4l6z">
          <CardTitle data-oid="pk8.3_m">{t.quickActions}</CardTitle>
        </CardHeader>
        <CardContent data-oid="qhblk5s">
          <div className="grid gap-2 md:grid-cols-3" data-oid="_1zrf98">
            <Button
              variant="outline"
              className="justify-start"
              data-oid=".g7ljdt"
            >
              <Icons.upload className="mr-2 h-4 w-4" data-oid="3cb-v51" />
              {dictionary.common.upload}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="b2axie_"
            >
              <Icons.calculator className="mr-2 h-4 w-4" data-oid="sklx.th" />
              {apps.costCalculator.calculateImpact}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="cczu21v"
            >
              <Icons.fileChart className="mr-2 h-4 w-4" data-oid="wji0y2-" />
              {dictionary.reports.generateReport}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="bs5ff3-"
            >
              <Icons.bell className="mr-2 h-4 w-4" data-oid="gdbu0o8" />
              {apps.tariffTracker.setAlerts}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="h6zo_1x"
            >
              <Icons.route className="mr-2 h-4 w-4" data-oid="4ug8w99" />
              {apps.routeOptimizer.compareRoutes}
            </Button>
            <Button
              variant="outline"
              className="justify-start"
              data-oid="wke55t0"
            >
              <Icons.dollarSign className="mr-2 h-4 w-4" data-oid=".a_yasa" />
              {apps.pricingOptimizer.optimizedPrice}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
