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
      data-oid="fnks8wl"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="44duwvd">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="uaa_v_t"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="zr-494j">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="aw9j8p1">
        <Tabs defaultValue="monthly" className="w-full" data-oid="82jgfel">
          <div className="flex justify-center mb-8" data-oid="d0g67gm">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="96f8fw-"
            >
              <TabsTrigger value="monthly" data-oid="edjnojc">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="s_paeuq">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="laee8c_"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="fx3x6t.">
            <div className="grid gap-6 md:grid-cols-3" data-oid=":ebr_g5">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="u.9giku"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="u5j3bu4"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="lvim1nz"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="3gjxukz">
                    <CardTitle className="text-xl" data-oid="r1:z4f7">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="jcct3lc">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="0jfq.rw">
                    <div className="mb-4" data-oid="giwrt1m">
                      <span className="text-3xl font-bold" data-oid="-845ys_">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="t55zptg"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="a80j7aj">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="uswta0l"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="mt_8l0."
                          />

                          <span data-oid="2u:8x4o">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="4-bz6.s">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="fs85n81"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="5jwdp7c"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="5957omm">
            <div className="grid gap-6 md:grid-cols-3" data-oid="90s1zy4">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="v.l5w.s"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="p8_97q3"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="u0qhw.h"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="0p-wux0">
                    <CardTitle className="text-xl" data-oid=".w:vad9">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="5fia35v">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="h5vza1:">
                    <div className="mb-4" data-oid="v93szgw">
                      <span className="text-3xl font-bold" data-oid="ij3uk9-">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="l5.4p-7"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="wqu-rtc">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="8x_arix"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="097lpgy"
                          />

                          <span data-oid="wf-1p_-">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="b.6._ec">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="ba5jqx5"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="jncv5wo"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid=".tcn8wb">
        <h2 className="text-2xl font-bold" data-oid="r7x:i2h">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="9fff:rk">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="r4g4_ah">
          <Button asChild variant="outline" size="lg" data-oid=":u3sova">
            <Link href={`/${locale}/contact`} data-oid="z6.4fws">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="--gtn_4">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="3irz943">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="-8rtk4u">
          <div className="border rounded-lg p-4" data-oid="w0g0dke">
            <h3 className="font-medium" data-oid="6wqoanl">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="nje3fqd">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="i3::-4v">
            <h3 className="font-medium" data-oid="s9fzio8">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="s:xhuzj">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="cpmvbhr">
            <h3 className="font-medium" data-oid="dykh91d">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="smcykr:">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="110suo7">
            <h3 className="font-medium" data-oid="e5m26m-">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="rjb830p">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="4puqfbw">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="limiu16">
          <h2 className="text-2xl font-bold" data-oid="a:.oe60">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="819u04w">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="j6_j_mk">
            <Button asChild size="lg" data-oid="7.37o:l">
              <Link href={`/${locale}/register`} data-oid="7oa.lze">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
