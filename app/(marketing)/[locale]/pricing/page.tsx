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
      data-oid="c0dc.2l"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="e_fmx3d">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="udq5zqp"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid=":t6xzc3">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="lxnflji">
        <Tabs defaultValue="monthly" className="w-full" data-oid="6:yu7bw">
          <div className="flex justify-center mb-8" data-oid="_-521_3">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="v:hyu9."
            >
              <TabsTrigger value="monthly" data-oid="qepp-78">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="14dfhrf">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="m_6ikn-"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="u4.7616">
            <div className="grid gap-6 md:grid-cols-3" data-oid="695hmx3">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="e2zk3fd"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid=":iuxh95"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="u8dw8-6"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="km14f-:">
                    <CardTitle className="text-xl" data-oid="1mddnh2">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="jlj5e9g">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="recyby2">
                    <div className="mb-4" data-oid="x2p4fqr">
                      <span className="text-3xl font-bold" data-oid="c-z8970">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="yc92mk-"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="tafvxh_">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="u4a8-mw"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid=".uxyrsi"
                          />

                          <span data-oid="5yswc8p">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="is_h09e">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="qe1g87g"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="mmoh9t:"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="w5vtc7y">
            <div className="grid gap-6 md:grid-cols-3" data-oid="o.7n_po">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="7pdh.x."
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="oswupx1"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="bmh:mbq"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="o9e5gos">
                    <CardTitle className="text-xl" data-oid="tq4:9cx">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="iil-er:">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="60vu.:_">
                    <div className="mb-4" data-oid="-o_6ncg">
                      <span className="text-3xl font-bold" data-oid="efagzx-">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="ijbpuhb"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="6pzc-1v">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="r9b:o3."
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="fxcghhk"
                          />

                          <span data-oid="5ucmtyu">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="y7la..j">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="buyp2zm"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="cz-q2e4"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="-1fpao.">
        <h2 className="text-2xl font-bold" data-oid="7qq.a14">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="z2nc69j">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="sdq5n9k">
          <Button asChild variant="outline" size="lg" data-oid="2o880ob">
            <Link href={`/${locale}/contact`} data-oid="q5-8gd7">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="bqd28we">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="j_xrskf">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="k8xe2b1">
          <div className="border rounded-lg p-4" data-oid="kl9hru5">
            <h3 className="font-medium" data-oid="9bq2u46">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="az-jc2m">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="662zp_u">
            <h3 className="font-medium" data-oid="y76v52x">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="1lb667g">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="-xs211j">
            <h3 className="font-medium" data-oid="ba2aoep">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="5suz8a-">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="kev2a-h">
            <h3 className="font-medium" data-oid="tbyas7f">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="z:s5vc0">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="vimjtno">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="0iad13v">
          <h2 className="text-2xl font-bold" data-oid="rf_.3j9">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid=".4x1uck">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="4mkt4ep">
            <Button asChild size="lg" data-oid="1.0kn8_">
              <Link href={`/${locale}/register`} data-oid="ahi3p2c">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
