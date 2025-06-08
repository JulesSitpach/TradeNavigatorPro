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
      data-oid="6014c2b"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid=".wh5rce">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="mneer5i"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="-.xagsr">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="t67k.o4">
        <Tabs defaultValue="monthly" className="w-full" data-oid="3n9qfsw">
          <div className="flex justify-center mb-8" data-oid="ts.emdh">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="klnerni"
            >
              <TabsTrigger value="monthly" data-oid="y2xqf07">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="ub6qtl1">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid=".u29sxm"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="hgj:ggr">
            <div className="grid gap-6 md:grid-cols-3" data-oid="z2:-cj:">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="69syw5s"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="c7tmjq7"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="k4.3ids"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="rxo73x3">
                    <CardTitle className="text-xl" data-oid="q8xj30l">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="2gfuqm6">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="ksyfwui">
                    <div className="mb-4" data-oid="cvcxew.">
                      <span className="text-3xl font-bold" data-oid="51iqfz1">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="4xks8x8"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="dtv87q2">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="tj97-r1"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="..4adwc"
                          />

                          <span data-oid="4p.trl4">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="hnkt37k">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="2hrccit"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="k1yei5m"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="::sabbx">
            <div className="grid gap-6 md:grid-cols-3" data-oid=":-d1kq-">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="xq7h6xn"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="6wiauno"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="wgs30bf"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="7i7rlf.">
                    <CardTitle className="text-xl" data-oid="2-:1epm">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="zvvr:so">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid=".hrw6r-">
                    <div className="mb-4" data-oid="lrdc5cu">
                      <span className="text-3xl font-bold" data-oid="qzyabyz">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="t2x-my2"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="o1u3gvk">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="5qr_49f"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="nso6rfy"
                          />

                          <span data-oid="3jp21ff">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="hhr9rrg">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="mit7g1b"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="2kk8a:i"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="g:bm140">
        <h2 className="text-2xl font-bold" data-oid="aw4pdpw">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="u7100g7">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="ktdcql1">
          <Button asChild variant="outline" size="lg" data-oid="m9g4cas">
            <Link href={`/${locale}/contact`} data-oid="-nca::8">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="_z20:dk">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="b5ttq-m">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="p1pn_y3">
          <div className="border rounded-lg p-4" data-oid="5xkw-xs">
            <h3 className="font-medium" data-oid="51ksu8i">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="chyr-3w">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid=".3hpu1w">
            <h3 className="font-medium" data-oid="kbu-624">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="gxk1o2u">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="3_f8u95">
            <h3 className="font-medium" data-oid="3v5yhq_">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="smrmq4p">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="eaq8xjh">
            <h3 className="font-medium" data-oid="9d1jc43">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="a__o:_l">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="uz2yw-e">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="ok36a66">
          <h2 className="text-2xl font-bold" data-oid="qkvnf0n">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="6:w76x7">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="mn:agaw">
            <Button asChild size="lg" data-oid="04jclss">
              <Link href={`/${locale}/register`} data-oid="p6qvlvn">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
