import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getDictionary, i18n, LocaleKey } from "@/lib/i18n/config";
import { PRICE_TIERS, formatPrice } from "@/lib/stripe";
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

// Generate metadata for SEO
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (!i18n.locales.includes(locale as LocaleKey)) {
    return {};
  }

  const dictionary = await getDictionary(locale as LocaleKey);

  return {
    title: `${dictionary.navigation.pricing} | ${dictionary.common.appName}`,
    description:
      "US Trade Impact SaaS pricing plans for small and medium businesses",
  };
}

// Pricing page component for marketing site
export default async function PricingPage({
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
  const t = dictionary.navigation;

  // Filter tiers by interval for display
  const monthlyTiers = PRICE_TIERS.filter((tier) => tier.interval === "month");

  // Create yearly tiers with 20% discount if they don't exist
  const yearlyTiers = monthlyTiers.map((tier) => ({
    ...tier,
    id: `${tier.id}-yearly`,
    interval: "year" as const,
    price: tier.price * 12 * 0.8, // 20% discount
    stripePriceId: `${tier.stripePriceId}_yearly`,
  }));

  return (
    <div
      className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      data-oid="g3xmf9u"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="o2_rme5">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="7lnh6.c"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="1b4wp27">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="kbvnt5k">
        <Tabs defaultValue="monthly" className="w-full" data-oid="zkm.4ku">
          <div className="flex justify-center mb-8" data-oid="_t8oehn">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="mlg:8l."
            >
              <TabsTrigger value="monthly" data-oid="dpitx3.">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="_szie.m">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="6c-3ix7"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="rzs688a">
            <div className="grid gap-6 md:grid-cols-3" data-oid="ar9f9w0">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="0468:zz"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="ixd1v_c"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="li6kivx"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="p.4h.9b">
                    <CardTitle className="text-xl" data-oid="e10:0ly">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="5:t27g8">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="h79iaon">
                    <div className="mb-4" data-oid="xlixtcx">
                      <span className="text-3xl font-bold" data-oid="q1n60:k">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="0xu7le."
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="xbn2g-r">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="h2u8913"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="q96i5yr"
                          />

                          <span data-oid="61qz_0n">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="uwqsf7j">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="aexyg:h"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="w5mitw2"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="k.sfbi5">
            <div className="grid gap-6 md:grid-cols-3" data-oid="g22x1am">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="6:55jo_"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="wfgw-e:"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="z_tnliz"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="-us82nj">
                    <CardTitle className="text-xl" data-oid="ryt9de6">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="u:5snfv">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="hostgu4">
                    <div className="mb-4" data-oid="4sjc0a2">
                      <span className="text-3xl font-bold" data-oid="3udol2f">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="digqnbz"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="91lz1v1">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="9st8zh."
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="zv0xo9w"
                          />

                          <span data-oid="z4qkqo.">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="l06-p-0">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="35uvfh0"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="08ka7_h"
                      >
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="s6phza_">
        <h2 className="text-2xl font-bold" data-oid="azhgnx1">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="8lgk6hk">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid=".w59194">
          <Button asChild variant="outline" size="lg" data-oid="68.-s9d">
            <Link href={`/${locale}/contact`} data-oid="3hzp1z5">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="ilm4ua:">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="n4rz7pe">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="5o0cra:">
          <div className="border rounded-lg p-4" data-oid="oso__1g">
            <h3 className="font-medium" data-oid="w3stjx:">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="as1ck7r">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid=":8l5.lc">
            <h3 className="font-medium" data-oid="h7y:k5a">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="4exi5f4">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="775yckn">
            <h3 className="font-medium" data-oid="sjnibps">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="ey6qxqi">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="gp.m662">
            <h3 className="font-medium" data-oid="g6p5qms">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="s5qmr2g">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="gpa41j5">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="w6a27o:">
          <h2 className="text-2xl font-bold" data-oid="lyak:16">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="kxvbebh">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="0n79kpq">
            <Button asChild size="lg" data-oid="e3745qt">
              <Link href={`/${locale}/register`} data-oid="5hg.pez">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
