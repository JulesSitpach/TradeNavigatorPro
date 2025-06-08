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
      data-oid="hhsu8ll"
    >
      {/* Page header */}
      <div className="mx-auto max-w-3xl text-center mb-16" data-oid="_s0q6wl">
        <h1
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          data-oid="arvmfyw"
        >
          {t.pricing}
        </h1>
        <p className="mt-4 text-xl text-muted-foreground" data-oid="e0du7yn">
          Choose the plan that works best for your business
        </p>
      </div>

      {/* Pricing tabs */}
      <div className="mx-auto max-w-5xl" data-oid="npnb_rv">
        <Tabs defaultValue="monthly" className="w-full" data-oid="kxaot13">
          <div className="flex justify-center mb-8" data-oid="sjwib7d">
            <TabsList
              className="grid w-full max-w-md grid-cols-2"
              data-oid="ygy-q3e"
            >
              <TabsTrigger value="monthly" data-oid="gguc-8z">
                Monthly Billing
              </TabsTrigger>
              <TabsTrigger value="yearly" data-oid="4jf6s_y">
                Yearly Billing
                <Badge
                  variant="secondary"
                  className="ml-2 bg-green-100 text-green-700 border-green-200"
                  data-oid="utskvvz"
                >
                  Save 20%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="w-full" data-oid="xijt-:4">
            <div className="grid gap-6 md:grid-cols-3" data-oid="chk9gjk">
              {monthlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="czeg3p3"
                >
                  {tier.id === "professional" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="ncf-4pv"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="djtnr9b"
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="gn8l.jd">
                    <CardTitle className="text-xl" data-oid="9zx8bve">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="kg7s-9v">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="pwf_y0e">
                    <div className="mb-4" data-oid="eyyc4b5">
                      <span className="text-3xl font-bold" data-oid="9de5brm">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="nnvjfap"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="p1adx8a">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid=":k8zr7g"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="89.xw3-"
                          />

                          <span data-oid="_hlk24c">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="fr6h2nt">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional" ? "default" : "outline"
                      }
                      data-oid="tg5sm69"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="j4m-0rq"
                      >
                        Get Started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="yearly" className="w-full" data-oid="2-u_hrq">
            <div className="grid gap-6 md:grid-cols-3" data-oid="7f5700j">
              {yearlyTiers.map((tier) => (
                <Card
                  key={tier.id}
                  className={`flex flex-col ${tier.id === "professional-yearly" ? "border-primary shadow-lg relative" : ""}`}
                  data-oid="-05oc:6"
                >
                  {tier.id === "professional-yearly" && (
                    <div
                      className="absolute -top-5 left-0 right-0 flex justify-center"
                      data-oid="_ncacht"
                    >
                      <Badge
                        variant="default"
                        className="bg-primary text-primary-foreground"
                        data-oid="9sknwe."
                      >
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader data-oid="1rfu77c">
                    <CardTitle className="text-xl" data-oid="a7nvxj3">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className="pt-1.5" data-oid="knn1bt3">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow" data-oid="s1u87fk">
                    <div className="mb-4" data-oid="pqw1rk:">
                      <span className="text-3xl font-bold" data-oid="c5hi1yf">
                        {formatPrice(tier.price, tier.currency)}
                      </span>
                      <span
                        className="text-muted-foreground"
                        data-oid="ge3xke6"
                      >
                        /{tier.interval}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm" data-oid="-3j:n9q">
                      {tier.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center"
                          data-oid="lumsqi3"
                        >
                          <Icons.check
                            className="mr-2 h-4 w-4 text-green-500"
                            data-oid="zv8w086"
                          />

                          <span data-oid="ghm:dm8">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-4 pb-6" data-oid="1tcl4dv">
                    <Button
                      asChild
                      className="w-full"
                      variant={
                        tier.id === "professional-yearly"
                          ? "default"
                          : "outline"
                      }
                      data-oid="a.38x9i"
                    >
                      <Link
                        href={`/${locale}/register?plan=${tier.id}`}
                        data-oid="de-it6p"
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
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="pykz:nu">
        <h2 className="text-2xl font-bold" data-oid="2-4_7yw">
          Need a custom solution?
        </h2>
        <p className="mt-4 text-muted-foreground" data-oid="v:z890t">
          Contact us for enterprise pricing, custom integrations, and dedicated
          support.
        </p>
        <div className="mt-6" data-oid="qbt4bii">
          <Button asChild variant="outline" size="lg" data-oid="jxdd2aq">
            <Link href={`/${locale}/contact`} data-oid="o3.e:sc">
              Contact Sales
            </Link>
          </Button>
        </div>
      </div>

      {/* FAQ section */}
      <div className="mx-auto max-w-3xl mt-16" data-oid="qqj_gwn">
        <h2 className="text-2xl font-bold text-center mb-8" data-oid="8j7utg6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4" data-oid="g0:w8rl">
          <div className="border rounded-lg p-4" data-oid="7-9v.nv">
            <h3 className="font-medium" data-oid="_vnt1b.">
              What's included in each plan?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="a:ddhok">
              Each plan includes access to our core tools with varying limits on
              products and features. The Starter plan includes basic
              calculations and email support. Professional adds all 5
              applications and priority alerts. Business includes unlimited
              products, API access, and phone support.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="ghiei-g">
            <h3 className="font-medium" data-oid="hq:3h83">
              Can I change plans later?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="bbo25d3">
              Yes, you can upgrade or downgrade your plan at any time. Changes
              take effect at the start of your next billing period.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid="2.tc-wn">
            <h3 className="font-medium" data-oid="fg_umhm">
              Do you offer a free trial?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="3822j:5">
              Yes, all plans include a 14-day free trial. No credit card
              required to start.
            </p>
          </div>
          <div className="border rounded-lg p-4" data-oid=".:be5lu">
            <h3 className="font-medium" data-oid="wqixp88">
              What payment methods do you accept?
            </h3>
            <p className="text-muted-foreground mt-1" data-oid="bw0dbk6">
              We accept all major credit cards including Visa, Mastercard,
              American Express, and Discover.
            </p>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="mx-auto max-w-3xl mt-16 text-center" data-oid="j1wutv-">
        <div className="bg-primary/5 rounded-lg p-8" data-oid="cn10cf-">
          <h2 className="text-2xl font-bold" data-oid="y10i:yw">
            Ready to navigate US trade with confidence?
          </h2>
          <p className="mt-4 text-muted-foreground" data-oid="0-d8kg2">
            Join thousands of businesses using TradeNavigatorPro to optimize
            their trade strategy.
          </p>
          <div className="mt-6" data-oid="b__lzfk">
            <Button asChild size="lg" data-oid="a3lf40j">
              <Link href={`/${locale}/register`} data-oid="6ft14cw">
                Start Your Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
