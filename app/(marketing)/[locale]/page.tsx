import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CORE_APPS } from "@/lib/constants";
import {
  Calculator,
  Network,
  Target,
  Clock,
  Route,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
} from "lucide-react";

const iconMap = {
  Calculator,
  Network,
  Target,
  Clock,
  Route,
};

export default function HomePage({ params }: { params: { locale: string } }) {
  return (
    <div className="flex flex-col" data-oid="01mvyrh">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        data-oid="dkytx9f"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange/10 via-background to-blue-600/10"
          data-oid="mavir5v"
        />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          data-oid="7l_kuyk"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="4wxwrug">
            <Badge variant="secondary" className="mb-6" data-oid="wxx8ppr">
              🚀 AI-Powered Trade Intelligence
            </Badge>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-oid="efys4nn"
            >
              Navigate Global Trade with{" "}
              <span className="text-orange" data-oid="rtha-fu">
                Confidence
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              data-oid="0tow9cg"
            >
              Stop guessing about tariff impacts. Get instant cost calculations,
              find alternative suppliers, and optimize your pricing strategy
              with our AI-powered trade intelligence platform.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="u-e2h4v"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="paws7l3"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="59frrmy"
                >
                  Try Cost Calculator Free
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="1a1m-gj" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="hc7bxl_">
                <Link href={`/${params.locale}/demo`} data-oid="94p:gk.">
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-4"
              data-oid="sk4jbu2"
            >
              No credit card required • Get results in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30" data-oid="d2l3ay_">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="tfa52:1"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="r2ryar5">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              data-oid="dd7aim1"
            >
              Trade Policy Changes Shouldn't Catch You Off Guard
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              data-oid="v.o3ppt"
            >
              <div className="text-center" data-oid="vqab29m">
                <div
                  className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="uel3nqb"
                >
                  <TrendingUp
                    className="h-6 w-6 text-destructive"
                    data-oid="0kbadqq"
                  />
                </div>
                <h3 className="font-semibold mb-2" data-oid="18lux4k">
                  Surprise Cost Increases
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="m-jt1ci">
                  "My supplier said costs are going up 25% - is that right?"
                </p>
              </div>
              <div className="text-center" data-oid="3h18nwr">
                <div
                  className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="2qz90:3"
                >
                  <Shield className="h-6 w-6 text-warning" data-oid="l6p9:wa" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="-hf4x:l">
                  Supply Chain Risks
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="-dxnxn-">
                  "Where else can I source without getting hit by tariffs?"
                </p>
              </div>
              <div className="text-center" data-oid="btu93rd">
                <div
                  className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="13ge857"
                >
                  <Zap className="h-6 w-6 text-info" data-oid="bt1_p9c" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="wtqa9v.">
                  Pricing Pressure
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="y5tbqiq">
                  "How do I stay profitable without losing customers?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20" data-oid="wdvpal0">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ixhlo:d"
        >
          <div className="text-center mb-16" data-oid="lzu-80q">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-oid="joof0wm"
            >
              5 Essential Tools for Trade Success
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-oid="qwohcfs"
            >
              Each tool solves a specific trade challenge with instant,
              actionable insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            data-oid="xjq39am"
          >
            {CORE_APPS.map((app, index) => {
              const Icon = iconMap[app.icon as keyof typeof iconMap];
              return (
                <Card
                  key={app.id}
                  className="card-hover group"
                  data-oid="bu4yeib"
                >
                  <CardHeader data-oid="dmqu6e_">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="ignuhwr"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${app.color}-500/10 flex items-center justify-center`}
                        data-oid="twq3hyr"
                      >
                        <Icon
                          className={`h-6 w-6 text-${app.color}-500`}
                          data-oid="glqv652"
                        />
                      </div>
                      <Badge variant="secondary" data-oid="3zc0uyh">
                        #{index + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl" data-oid="t50xd69">
                      {app.name}
                    </CardTitle>
                    <CardDescription
                      className="text-destructive font-medium"
                      data-oid="28e.rna"
                    >
                      "{app.problem}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent data-oid="yu.a0-z">
                    <p
                      className="text-muted-foreground mb-6"
                      data-oid=":fnbqfs"
                    >
                      {app.solution}
                    </p>
                    <Button
                      className="w-full group-hover:bg-orange group-hover:text-white transition-colors"
                      variant="outline"
                      asChild
                      data-oid="loskc8s"
                    >
                      <Link
                        href={`/${params.locale}${app.href}`}
                        data-oid="ycc19g2"
                      >
                        {app.name.split(" ")[0]} Now
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          data-oid="yxkao80"
                        />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30" data-oid="2d8_d:k">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="0yao-el"
        >
          <div className="max-w-4xl mx-auto" data-oid="d7eh9.b">
            <div className="text-center mb-16" data-oid="_m0dk_o">
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-oid="tgsku9_"
              >
                Why Trade Professionals Choose Us
              </h2>
              <p className="text-xl text-muted-foreground" data-oid="oe4osb0">
                Get the insights you need to make confident trade decisions
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="sv0a3tf"
            >
              <div className="space-y-6" data-oid="eh41a-8">
                <div className="flex items-start space-x-4" data-oid="xqk_:b1">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="wx3ayk5"
                  />

                  <div data-oid="x3g5nbt">
                    <h3 className="font-semibold mb-2" data-oid=":.zar8r">
                      Instant Cost Analysis
                    </h3>
                    <p className="text-muted-foreground" data-oid="nn81wmu">
                      Upload your purchase order and get landed cost
                      calculations in seconds, not hours of manual work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="8gc1ka.">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="6-kpu3p"
                  />

                  <div data-oid="2mvm_22">
                    <h3 className="font-semibold mb-2" data-oid="hf.b986">
                      AI-Powered Recommendations
                    </h3>
                    <p className="text-muted-foreground" data-oid="_1.44x3">
                      Find alternative suppliers and optimize trade routes using
                      machine learning and real-time data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="5z-bunz">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="shgaglp"
                  />

                  <div data-oid=".fu3snt">
                    <h3 className="font-semibold mb-2" data-oid="o878nxc">
                      Scenario Planning
                    </h3>
                    <p className="text-muted-foreground" data-oid="sr1k-a.">
                      Model different pricing strategies and see the impact on
                      your margins and customer relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6" data-oid="lyja:4u">
                <div className="flex items-start space-x-4" data-oid="2fr.foq">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="9f_f87f"
                  />

                  <div data-oid=":3khc2x">
                    <h3 className="font-semibold mb-2" data-oid=".zqn6fp">
                      Early Warning System
                    </h3>
                    <p className="text-muted-foreground" data-oid="i5btifo">
                      Get 30/60/90 day advance warnings about policy changes
                      that could affect your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="yj7t::s">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="k59r.r9"
                  />

                  <div data-oid="fmz-b3-">
                    <h3 className="font-semibold mb-2" data-oid="wu4zccq">
                      Professional Reports
                    </h3>
                    <p className="text-muted-foreground" data-oid="68l_afm">
                      Generate executive-ready reports and customer
                      communication templates with one click.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="vft:6pr">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="ou.w616"
                  />

                  <div data-oid=".3vqh:m">
                    <h3 className="font-semibold mb-2" data-oid="stkukvk">
                      No Setup Required
                    </h3>
                    <p className="text-muted-foreground" data-oid="cj0l3y7">
                      Start analyzing your trade impact immediately - no complex
                      integrations or lengthy onboarding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" data-oid="k4djf-.">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="-d90xus"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="wwep10r">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-oid="yno0dq4"
            >
              Ready to Take Control of Your Trade Costs?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-8"
              data-oid="865o-.2"
            >
              Join thousands of trade professionals who use TradeNavigatorPro to
              make smarter, faster decisions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="0e69v5o"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="w7.u4c8"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="6rydbcw"
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="h199wxu" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="tm1dx6w">
                <Link href={`/${params.locale}/contact`} data-oid="crp6sd5">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-6"
              data-oid=":vx:glk"
            >
              ✓ No credit card required ✓ Instant results ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
