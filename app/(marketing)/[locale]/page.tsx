import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary, i18n, LocaleKey } from '@/lib/i18n/config';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Generate metadata for SEO
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  if (!i18n.locales.includes(locale as LocaleKey)) {
    return {};
  }

  const dictionary = await getDictionary(locale as LocaleKey);
  
  return {
    title: `${dictionary.common.appName} - ${dictionary.common.tagline}`,
    description: 'Navigate US trade policy changes and tariff impacts with 5 essential tools',
    keywords: 'trade, tariffs, supply chain, pricing, shipping, SMB',
  };
}

// Marketing landing page component
export default async function MarketingPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  // Validate locale or return 404
  if (!i18n.locales.includes(locale as LocaleKey)) {
    notFound();
  }

  // Get dictionary for the current locale
  const dictionary = await getDictionary(locale as LocaleKey);
  const t = dictionary.common;
  const apps = dictionary.apps;

  // Core applications data
  const coreApplications = [
    {
      id: 'cost-calculator',
      title: apps.costCalculator.title,
      description: apps.costCalculator.description,
      problem: apps.costCalculator.problem,
      icon: <Icons.calculator className="h-10 w-10 text-primary" />,
      color: 'bg-red-100 text-red-700',
    },
    {
      id: 'supply-pivot',
      title: apps.supplyChainPlanner.title,
      description: apps.supplyChainPlanner.description,
      problem: apps.supplyChainPlanner.problem,
      icon: <Icons.network className="h-10 w-10 text-primary" />,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      id: 'pricing-optimizer',
      title: apps.pricingOptimizer.title,
      description: apps.pricingOptimizer.description,
      problem: apps.pricingOptimizer.problem,
      icon: <Icons.dollarSign className="h-10 w-10 text-primary" />,
      color: 'bg-green-100 text-green-700',
    },
    {
      id: 'tariff-tracker',
      title: apps.tariffTracker.title,
      description: apps.tariffTracker.description,
      problem: apps.tariffTracker.problem,
      icon: <Icons.clock className="h-10 w-10 text-primary" />,
      color: 'bg-amber-100 text-amber-700',
    },
    {
      id: 'route-optimizer',
      title: apps.routeOptimizer.title,
      description: apps.routeOptimizer.description,
      problem: apps.routeOptimizer.problem,
      icon: <Icons.route className="h-10 w-10 text-primary" />,
      color: 'bg-purple-100 text-purple-700',
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-block" variant="secondary">
                  US Trade Impact SaaS
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  {t.appName}
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  {t.tagline}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href={`/${locale}/register`}>
                  <Button size="lg" className="px-8">
                    {t.register}
                    <Icons.arrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={`/${locale}/login`}>
                  <Button size="lg" variant="outline" className="px-8">
                    {t.login}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-full overflow-hidden rounded-xl border bg-gradient-to-b from-primary/20 to-background p-2">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-md">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm">
                        <Icons.calculator className="h-10 w-10 text-primary" />
                        <div className="space-y-1">
                          <h3 className="font-medium">{apps.costCalculator.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {apps.costCalculator.problem}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm">
                        <Icons.network className="h-10 w-10 text-primary" />
                        <div className="space-y-1">
                          <h3 className="font-medium">{apps.supplyChainPlanner.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {apps.supplyChainPlanner.problem}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 rounded-lg border bg-background p-4 shadow-sm">
                        <Icons.dollarSign className="h-10 w-10 text-primary" />
                        <div className="space-y-1">
                          <h3 className="font-medium">{apps.pricingOptimizer.title}</h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {apps.pricingOptimizer.problem}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement section */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Problem We Solve
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              US trade policies create massive cost uncertainty for small businesses. With tariffs changing rapidly and supply chains disrupted, SMBs need immediate, actionable intelligence.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full border bg-background p-2.5 shadow-sm">
                <Icons.alertTriangle className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-xl font-bold">Unpredictable Tariffs</h3>
              <p className="text-center text-sm text-muted-foreground">
                Sudden policy changes can increase costs by 25% overnight
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full border bg-background p-2.5 shadow-sm">
                <Icons.network className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold">Supply Chain Disruption</h3>
              <p className="text-center text-sm text-muted-foreground">
                Finding alternative suppliers without tariffs is complex and time-consuming
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
              <div className="rounded-full border bg-background p-2.5 shadow-sm">
                <Icons.dollarSign className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold">Pricing Challenges</h3>
              <p className="text-center text-sm text-muted-foreground">
                Balancing cost absorption vs. passing costs to customers threatens margins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core applications section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              5 Core Applications
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              Powerful tools designed specifically for SMBs navigating complex trade challenges
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {coreApplications.map((app) => (
              <Card key={app.id} className="flex flex-col overflow-hidden">
                <CardHeader className="p-4">
                  <div className="flex items-center gap-2">
                    <div className={`rounded-md p-2 ${app.color}`}>
                      {app.icon}
                    </div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                  </div>
                  <CardDescription>{app.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <div className="mb-3 inline-flex items-center rounded-md bg-muted px-3 py-1 text-sm">
                    <Icons.info className="mr-1 h-4 w-4" />
                    <span className="text-muted-foreground">{app.problem}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section className="w-full bg-muted/40 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by SMBs Nationwide
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              See how businesses like yours are navigating trade challenges with confidence
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icons.user className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">CEO, TechImports Inc.</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 italic">
                  "When tariffs on our Chinese electronics suddenly increased, TradeNavigatorPro helped us find alternative suppliers in Vietnam and saved us over $120,000 in just three months."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icons.user className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Michael Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">COO, Global Textiles</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 italic">
                  "The Pricing Strategy Optimizer helped us model different scenarios when Section 301 tariffs hit. We maintained our margins while keeping customers happy with transparent communication."
                </blockquote>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icons.user className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Jennifer Lee</h3>
                    <p className="text-sm text-muted-foreground">Founder, Pacific Imports</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 italic">
                  "The Tariff Timeline Tracker alerted us to upcoming changes weeks before our competitors knew. That early warning gave us time to stock up and avoid $75,000 in additional costs."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Navigate US Trade with Confidence?
            </h2>
            <p className="max-w-[85%] text-muted-foreground sm:text-xl">
              Join thousands of businesses using TradeNavigatorPro to optimize their trade strategy
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href={`/${locale}/register`}>
                <Button size="lg" className="px-8">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link href={`/${locale}/pricing`}>
                <Button size="lg" variant="outline" className="px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
