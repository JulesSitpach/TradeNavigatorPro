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
      data-oid="ej9p4n0"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="prqa.79">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="_y0e0:y"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="yg159ig">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="y:59fve">
        <Tabs defaultValue="monthly" className="w-full" data-oid="a-hb8p_">
          <div className="flex justify-center mb-8" data-oid="cbaknaq">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="x:wrt82"
            >
              <TabsTrigger value="monthly" data-oid="ae99xob">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="whh-03z">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="tybfbny"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid=".xe7szj">
            <div className="grid gap-6 md:grid-cols-3" data-oid="65:f2:1">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="8hzkfwc"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="go7bip-"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="e-6jll2"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="r18yi4l">
                    <CardTitle className="text-xl" data-oid="5do0_k9">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="uu4guf3">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="818w45o">
                    <div className="mb-4" data-oid="dg7ubp.">
                      <span className="text-3xl font-bold" data-oid="d20:vs9">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="kg-0.km"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="z2faw7.">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="5xcfqj:"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="w7vyu4a"
                          />

                          <span data-oid="oxv4zxs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="xt2ry6g">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid=":qgwqks"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="_is7myg"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="mo6demp">
            <div className="grid gap-6 md:grid-cols-3" data-oid="a8oe6ps">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="i2zggl0"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="r74spxk"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="4buakp6"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="_b90h0v">
                    <CardTitle className="text-xl" data-oid="ke84d__">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="t7yhk3-">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="syxpk9q">
                    <div className="mb-4" data-oid="3pnqo4:">
                      <span className="text-3xl font-bold" data-oid="w2sq27j">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="6i7ek6."
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="s2ojwae">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="mchwg_o"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid=":97hufp"
                          />

                          <span data-oid="-nucuu_">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="rpob4zc">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="912725q"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="91eb0in"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid=":91u2vj">
        <h2 className="text-2xl font-bold" data-oid="my39-ey">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="93j3h6w">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="mqw648i">
          <Button asChild variant="outline" size="lg" data-oid=".e25g0u">
            <Link href={`/${locale}/contact`} data-oid="jk0rry5">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="p7.xhbc">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="gqvb34q">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="5vuo9nq">
          <div className="border rounded-lg p-4" data-oid="2m4idb4">
            <h3 className="font-medium" data-oid="6ldt.07">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="01fn454">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="tw7usw6">
            <h3 className="font-medium" data-oid="rv4xg-9">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="zz661x_">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="z7_m4ch">
            <h3 className="font-medium" data-oid="29j85br">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="6p1xx:a">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="6qa:p2z">
            <h3 className="font-medium" data-oid="vg7i7tz">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="i52ns7y">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="qncjibj">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="1z1041l">
          <h2 className="text-2xl font-bold" data-oid="b3...ey">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="f1n8--1">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="in:9i1r">
            <Button asChild size="lg" data-oid="lzc0yxk">
              <Link href={`/${locale}/register`} data-oid=":b5vgkf">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
