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
      data-oid="htxdbpy"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="mxo3gm2">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="24v_l4x"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="w846q0n">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="1.2hgrp">
        <Tabs defaultValue="monthly" className="w-full" data-oid="-2h9vab">
          <div className="flex justify-center mb-8" data-oid="lcg0f-u">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="qt3w6mu"
            >
              <TabsTrigger value="monthly" data-oid="-dk9_h6">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="6ttb99-">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="v346.yd"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="svvcj2a">
            <div className="grid gap-6 md:grid-cols-3" data-oid=".upm.1u">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="h4lx6q:"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="7fth1lm"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="ksvxm5-"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="ecoyku.">
                    <CardTitle className="text-xl" data-oid="uo_j1zz">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="79188py">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="7ojj329">
                    <div className="mb-4" data-oid="yig:ghg">
                      <span className="text-3xl font-bold" data-oid="nyqsh53">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="gnwcruo"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="lmr:qfg">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="9as5y89"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="pce4-8p"
                          />

                          <span data-oid="9:o_bs-">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="ybk39hz">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="04pudeu"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="lozw9t4"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="v3b:2:6">
            <div className="grid gap-6 md:grid-cols-3" data-oid="ft_5dn0">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="nti7c5n"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="1l9ky4x"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="44l9h0:"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="wkipz8b">
                    <CardTitle className="text-xl" data-oid="36-p1cz">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="ty__c9m">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid=":605l1f">
                    <div className="mb-4" data-oid="p2_nmc-">
                      <span className="text-3xl font-bold" data-oid="b.nm2ju">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="35j07mk"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="l1mjsoe">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="_dkli89"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="mj9ljc1"
                          />

                          <span data-oid="xotbh-a">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="lv:vggm">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="u_b9tnx"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="7l2ubqb"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="qr0idw6">
        <h2 className="text-2xl font-bold" data-oid="6.p7_:1">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="nwg-o7:">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="ghwre10">
          <Button asChild variant="outline" size="lg" data-oid="fg94y8-">
            <Link href={`/${locale}/contact`} data-oid="04j5zox">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="g83wr4y">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="tgva:rm">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="r819ed7">
          <div className="border rounded-lg p-4" data-oid="43w_m6w">
            <h3 className="font-medium" data-oid="3q32zbv">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="e451mkn">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="zen96q_">
            <h3 className="font-medium" data-oid="x8v-ugb">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="8m:r_tq">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="n5qzlwi">
            <h3 className="font-medium" data-oid="hq2h7ie">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="pff7a9p">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="t6929km">
            <h3 className="font-medium" data-oid="r_q.3uk">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="5mflec5">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="gi2eda1">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="cas-8a-">
          <h2 className="text-2xl font-bold" data-oid="9ebghbw">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="x48.3tu">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="z6kc35g">
            <Button asChild size="lg" data-oid="ajx1psv">
              <Link href={`/${locale}/register`} data-oid="xhw_6ji">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
