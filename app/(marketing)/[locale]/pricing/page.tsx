import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getDictionary, i18n, LocaleKey } from '@/lib/i18n/config';
import { PRICE_TIERS, formatPrice } from '@/lib/stripe';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Icons } from '@/components/ui/icons';

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
    title: `${dictionary.navigation.pricing} | ${dictionary.common.appName}`,
    description: 'US Trade Impact SaaS pricing plans for small and medium businesses',
  };
}

// Pricing page component for marketing site
export default async function PricingPage({
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
  const t = dictionary.navigation;

  // Filter tiers by interval for display
  const monthlyTiers = PRICE_TIERS.filter(tier => tier.interval === 'month');
  
  // Create yearly tiers with 20% discount if they don't exist
  const yearlyTiers = monthlyTiers.map(tier => ({
    ...tier,
    id: `${tier.id}-yearly`,
    interval: 'year' as const,
    price: tier.price * 12 * 0.8, // 20% discount
    stripePriceId: `${tier.stripePriceId}_yearly`
  }));

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue="monthly" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly Billing
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-700 border-green-200">
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="monthly" className="w-full">
            <div className="grid gap-6 md:grid-cols-3">
              {monthlyTiers.map((tier) => (
                <Card key={tier.id} className={`flex flex-col ${tier.id === 'professional' ? 'border-primary shadow-lg relative' : ''}`}>
                  {tier.id === 'professional' && (
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="pt-1.5">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4">
                      <span className="text-3xl font-bold">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span className="text-muted-foreground">/{tier.interval}</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6">
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.id === 'professional' ? 'default' : 'outline'}
                    >
                      <Link href={`/${locale}/register?plan=${tier.id}`}>
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="yearly" className="w-full">
            <div className="grid gap-6 md:grid-cols-3">
              {yearlyTiers.map((tier) => (
                <Card key={tier.id} className={`flex flex-col ${tier.id === 'professional-yearly' ? 'border-primary shadow-lg relative' : ''}`}>
                  {tier.id === 'professional-yearly' && (
                    <div className="absolute -top-5 left-0 right-0 flex justify-center">
                      <Badge variant="default" className="bg-primary text-primary-foreground">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <CardDescription className="pt-1.5">{tier.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-4">
                      <span className="text-3xl font-bold">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span className="text-muted-foreground">/{tier.interval}</span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      {tier.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Icons.check className="mr-2 h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6">
                    <Button
                      asChild
                      className="w-full"
                      variant={tier.id === 'professional-yearly' ? 'default' : 'outline'}
                    >
                      <Link href={`/${locale}/register?plan=${tier.id}`}>
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Enterprise section */}
      <div className="mx-auto max-w-3xl mt-16 text-center">
        <h2 className="text-2xl font-bold">Need a custom solution?</h2>
        <p className="mt-4 text-muted-foreground">
          Contact us for enterprise pricing, custom integrations, and dedicated support.
        </p>
        <div className="mt-6">
          <Button asChild variant="outline" size="lg">
            <Link href={`/${locale}/contact`}>
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">What's included in each plan?</h3>
            <p className="text-muted-foreground mt-1">
              Each plan includes access to our core tools with varying limits on products and features. 
              The Starter plan includes basic calculations and email support. Professional adds all 5 applications 
              and priority alerts. Business includes unlimited products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Can I change plans later?</h3>
            <p className="text-muted-foreground mt-1">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">Do you offer a free trial?</h3>
            <p className="text-muted-foreground mt-1">
              Yes, all plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-medium">What payment methods do you accept?</h3>
            <p className="text-muted-foreground mt-1">
              We accept all major credit cards including Visa, Mastercard, American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center">
        <div className="bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold">Ready to navigate US trade with confidence?</h2>
          <p className="mt-4 text-muted-foreground">
            Join thousands of businesses using TradeNavigatorPro to optimize their trade strategy.
          </p>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href={`/${locale}/register`}>
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
