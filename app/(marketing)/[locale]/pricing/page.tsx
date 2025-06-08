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
      data-oid="_-0j4-7"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="ixb8elv">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="0oj7u4_"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="o:454xh">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="_tgm56j">
        <Tabs defaultValue="monthly" className="w-full" data-oid="r.lqm6:">
          <div className="flex justify-center mb-8" data-oid="gl69w--">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="gwhbsw:"
            >
              <TabsTrigger value="monthly" data-oid="nkunzu8">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="y12i9ku">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="qlr4am4"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="6acha19">
            <div className="grid gap-6 md:grid-cols-3" data-oid="ay:0.r1">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="u.lt6ne"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="gbhr5gc"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="tg96qy-"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="5u58xd_">
                    <CardTitle className="text-xl" data-oid="278:k3t">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="pj151:v">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="i_sn6dp">
                    <div className="mb-4" data-oid="pqh33q:">
                      <span className="text-3xl font-bold" data-oid=".opdhio">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="36xwwlf"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="y0d:1t-">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="adth-.0"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="gcru-df"
                          />

                          <span data-oid="p0yy5v5">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="ifh:71.">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="3ogdkwj"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="464sc6p"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="5dtb989">
            <div className="grid gap-6 md:grid-cols-3" data-oid="p1awpv1">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="oz2fqlj"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="xbxh0dc"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="9qsmn-6"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="fexb9e6">
                    <CardTitle className="text-xl" data-oid="5-qbpf0">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="ddlf.zm">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="6o7vviy">
                    <div className="mb-4" data-oid="._kia:p">
                      <span className="text-3xl font-bold" data-oid="w71leba">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid=":p3datn"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="_i-by52">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="q5l4thz"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="l266xs5"
                          />

                          <span data-oid="vaj4q74">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="3aqk9yt">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="ovfz8bp"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="j9b5koj"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="omiy5:g">
        <h2 className="text-2xl font-bold" data-oid="9.5_4f.">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="61d113l">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="mhf9nej">
          <Button asChild variant="outline" size="lg" data-oid="gbl2mhj">
            <Link href={`/${locale}/contact`} data-oid="uct9dm.">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="wkmb3_:">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="1xta08e">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="3l3j139">
          <div className="border rounded-lg p-4" data-oid="q:3w-zp">
            <h3 className="font-medium" data-oid="qc7ggx5">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="xd7lzlb">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="q1dbwz.">
            <h3 className="font-medium" data-oid="vlxzhao">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="ci3fwz:">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="n43.67i">
            <h3 className="font-medium" data-oid="0jj8g:v">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="na:6lx6">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="hp.i3-q">
            <h3 className="font-medium" data-oid="to4fi56">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="8hdl2ho">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="c3iczyh">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="h-jmy7s">
          <h2 className="text-2xl font-bold" data-oid="1w:z:j.">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="e4c7fu7">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="4tg.uiz">
            <Button asChild size="lg" data-oid=":25ws1c">
              <Link href={`/${locale}/register`} data-oid="f9:wrmg">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
