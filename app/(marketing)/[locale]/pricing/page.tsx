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
      data-oid="ppq_.iz"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="ik442em">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid=".v9iqi:"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="0rgs5pr">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="h.:f0e0">
        <Tabs defaultValue="monthly" className="w-full" data-oid="ptha4-8">
          <div className="flex justify-center mb-8" data-oid="krw86hv">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="gf8t0ij"
            >
              <TabsTrigger value="monthly" data-oid="bhsukt2">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="-jr03p8">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="v87xl-t"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="rc5nr47">
            <div className="grid gap-6 md:grid-cols-3" data-oid="yma:2n_">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="m6..a0v"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="b3gilf6"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="94c61l7"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="g8q-c4b">
                    <CardTitle className="text-xl" data-oid="m:f59iw">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="46npr87">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid=".leh8:x">
                    <div className="mb-4" data-oid="tvfryez">
                      <span className="text-3xl font-bold" data-oid="vs9t0r8">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="1e09t.m"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="o3ucj51">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="1txpe:6"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="huwr:9a"
                          />

                          <span data-oid="y-iswbv">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="in8vura">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid=":nx_vtw"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="zcs6sls"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="ocx5djy">
            <div className="grid gap-6 md:grid-cols-3" data-oid=".:z4npl">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="s-t81zm"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="cooc6y7"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="vwee1ex"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="s_ydu_d">
                    <CardTitle className="text-xl" data-oid="img6f3e">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="49-g3ju">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="5n:pe12">
                    <div className="mb-4" data-oid="zc.__c4">
                      <span className="text-3xl font-bold" data-oid="k-rnkkz">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="hqswh:6"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="uvqghbi">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="vyusq-t"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="9o:tfwk"
                          />

                          <span data-oid="c:0qjtb">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="i:skrsh">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="zlqar2t"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="t-gizj2"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid=".z:13v.">
        <h2 className="text-2xl font-bold" data-oid="0kif.jy">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="2y4bq08">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="xper0lh">
          <Button asChild variant="outline" size="lg" data-oid="_wozn8n">
            <Link href={`/${locale}/contact`} data-oid="-0o8905">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="-58g3d8">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="__y.9qa">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="tt:.plw">
          <div className="border rounded-lg p-4" data-oid="zbnj49z">
            <h3 className="font-medium" data-oid="-_ga.ck">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid=":f-csb4">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="chmj1_d">
            <h3 className="font-medium" data-oid="zx.jlsh">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid=":p_j2:p">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="vlm4e0w">
            <h3 className="font-medium" data-oid=":vi36zx">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="9atu2x.">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="j_7b.o7">
            <h3 className="font-medium" data-oid="ofl-r9n">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="ibfqod_">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="3t6.ksd">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="744.f4a">
          <h2 className="text-2xl font-bold" data-oid="tdeviex">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid=".wo1mr1">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid=":e_vsvw">
            <Button asChild size="lg" data-oid="7keuv7p">
              <Link href={`/${locale}/register`} data-oid="89jrxsd">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
