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
      data-oid="b5dte2."
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="401b47u">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="o3w0yba"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid=".7j38bf">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="uzltvfk">
        <Tabs defaultValue="monthly" className="w-full" data-oid="hduqovg">
          <div className="flex justify-center mb-8" data-oid="po58gr8">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="lx9m75i"
            >
              <TabsTrigger value="monthly" data-oid="697savp">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="kjfyt50">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="kipm-o1"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="jv42ty7">
            <div className="grid gap-6 md:grid-cols-3" data-oid="wklp5b6">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="ajr.nyh"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="dxqcfa2"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="1zug:gu"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="dgi:avi">
                    <CardTitle className="text-xl" data-oid="tn1cdnk">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="g:g6u4g">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="s78bp3j">
                    <div className="mb-4" data-oid="5c9ne12">
                      <span className="text-3xl font-bold" data-oid="hgd4l-z">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="gm_u.ly"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="ojok603">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="v:csfc5"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="omf2j1:"
                          />

                          <span data-oid="g96fv83">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="92j6xg3">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="o0v-ean"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="23h_6.e"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="29f7up_">
            <div className="grid gap-6 md:grid-cols-3" data-oid="tmw8b_b">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="yk2z2iu"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="ueg1sds"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="f8xma6z"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="3g.o1rh">
                    <CardTitle className="text-xl" data-oid="1nbgtum">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid=".pqhxwy">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="oey--d5">
                    <div className="mb-4" data-oid="9mm7r_9">
                      <span className="text-3xl font-bold" data-oid="-1u.2o:">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="i.gtbli"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="h1vpij:">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="r253jnz"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="nt8036."
                          />

                          <span data-oid="pnhizx7">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="yix8jhx">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="1r3drou"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="gqsh7g1"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="v7uc70b">
        <h2 className="text-2xl font-bold" data-oid="dez.7u2">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="fuifu7a">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="we:0.7l">
          <Button asChild variant="outline" size="lg" data-oid="a2lul:3">
            <Link href={`/${locale}/contact`} data-oid="13851tc">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="jxvmov1">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="v.qxxb8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="2zkr4js">
          <div className="border rounded-lg p-4" data-oid="0zl988x">
            <h3 className="font-medium" data-oid="lbb3ywi">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="q02us-_">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="mq:hjl2">
            <h3 className="font-medium" data-oid="z-w7ml8">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="_-9m_-x">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="d4fnfon">
            <h3 className="font-medium" data-oid="u8ei6e-">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="e8izij4">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="nbrmsvm">
            <h3 className="font-medium" data-oid="erleu1k">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="p5gcdm6">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="3s-tzd3">
        <div className="bg-primary/5 rounded-lg p-8" data-oid=":joigcp">
          <h2 className="text-2xl font-bold" data-oid="bhd7kx0">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="7gnrudj">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="tiqt78e">
            <Button asChild size="lg" data-oid="usws5kc">
              <Link href={`/${locale}/register`} data-oid=":yai3sd">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
