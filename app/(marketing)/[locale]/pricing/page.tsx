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
      data-oid="fvb2b45"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="xvcdddr">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="akezeou"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="l176:cy">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="_o:k8w4">
        <Tabs defaultValue="monthly" className="w-full" data-oid="f8yj0qb">
          <div className="flex justify-center mb-8" data-oid=".rrikg:">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="6v_jih."
            >
              <TabsTrigger value="monthly" data-oid="49tga9k">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="f-e75ii">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="e6.e9zg"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="u10usru">
            <div className="grid gap-6 md:grid-cols-3" data-oid="9vxxa9_">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="00yiyqd"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="fwhm5uk"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="p94n3j8"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="8w6xf-1">
                    <CardTitle className="text-xl" data-oid="u3-lpj:">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="j1b:d5e">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="nvjuo36">
                    <div className="mb-4" data-oid="37ik84e">
                      <span className="text-3xl font-bold" data-oid="vpo486z">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="pivwnjf"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid=":399uje">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="wifttwm"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="957odop"
                          />

                          <span data-oid="u67s699">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="854k0zx">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="_:glw1p"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="3k6zbji"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="c_yau6c">
            <div className="grid gap-6 md:grid-cols-3" data-oid="bpo3244">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="wdrdg_0"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="lp8sxf5"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="mnpcq_9"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="68iual_">
                    <CardTitle className="text-xl" data-oid="t.43z_f">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="3nxfout">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="ny509tk">
                    <div className="mb-4" data-oid="n_nhy8y">
                      <span className="text-3xl font-bold" data-oid="67dc:cb">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="-ru1tfe"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="vkczwuy">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="82yxmt2"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="_n4yeip"
                          />

                          <span data-oid="43r:pe6">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="bifulss">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid=":b3uwkq"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="9v4-o7."
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="ke1i4ju">
        <h2 className="text-2xl font-bold" data-oid="nssb6y7">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="ixqo2q4">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid=".gtx0lg">
          <Button asChild variant="outline" size="lg" data-oid="ms6ap5u">
            <Link href={`/${locale}/contact`} data-oid="gbxalr5">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="3j2p7bm">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="2sdqxky">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="qskvd09">
          <div className="border rounded-lg p-4" data-oid="_tjk:6n">
            <h3 className="font-medium" data-oid="1iov0i.">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="yseg57z">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="osi1fcf">
            <h3 className="font-medium" data-oid="cl00ujx">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="_y8iiz8">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="_0qwnyc">
            <h3 className="font-medium" data-oid="86pe2qf">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="x061jxo">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="-0jctvh">
            <h3 className="font-medium" data-oid="x8qugb0">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="mc6l5y.">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="xj-3qv9">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="b6j2c.s">
          <h2 className="text-2xl font-bold" data-oid="c-7jw8z">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="0ylt-yx">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="73.x.2t">
            <Button asChild size="lg" data-oid="w1lkko4">
              <Link href={`/${locale}/register`} data-oid="vt3702d">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
