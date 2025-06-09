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
    <div className="flex flex-col" data-oid="h21bt2w">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        data-oid="mw:rped"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange/10 via-background to-blue-600/10"
          data-oid="aasnmos"
        />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          data-oid="fkq3wq3"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="2hfe1wl">
            <Badge variant="secondary" className="mb-6" data-oid="qf1n29c">
              🚀 AI-Powered Trade Intelligence
            </Badge>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-oid="bf-inmk"
            >
              Navigate Global Trade with{" "}
              <span className="text-orange" data-oid="gg3bqew">
                Confidence
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              data-oid="6yoi86s"
            >
              Stop guessing about tariff impacts. Get instant cost calculations,
              find alternative suppliers, and optimize your pricing strategy
              with our AI-powered trade intelligence platform.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="571ye_v"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="_hx4kyc"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="m7qrrzj"
                >
                  Try Cost Calculator Free
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="uf4f44f" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="4:w0pjs">
                <Link href={`/${params.locale}/demo`} data-oid="qm6nafx">
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-4"
              data-oid="fqu6_:b"
            >
              No credit card required • Get results in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30" data-oid="ti_6bi.">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="k:ckabq"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="us722qp">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              data-oid="pxu5kwb"
            >
              Trade Policy Changes Shouldn't Catch You Off Guard
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              data-oid=":1tcuvg"
            >
              <div className="text-center" data-oid="p5x_5fu">
                <div
                  className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="z31qeg8"
                >
                  <TrendingUp
                    className="h-6 w-6 text-destructive"
                    data-oid="1hpy:y."
                  />
                </div>
                <h3 className="font-semibold mb-2" data-oid="2vb0wmj">
                  Surprise Cost Increases
                </h3>
                <p className="text-sm text-muted-foreground" data-oid=":y1bvja">
                  "My supplier said costs are going up 25% - is that right?"
                </p>
              </div>
              <div className="text-center" data-oid="8zrsuor">
                <div
                  className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="qwmt2ol"
                >
                  <Shield className="h-6 w-6 text-warning" data-oid="kws:xe9" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="fxvh7:i">
                  Supply Chain Risks
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="dz08o19">
                  "Where else can I source without getting hit by tariffs?"
                </p>
              </div>
              <div className="text-center" data-oid="09krxk0">
                <div
                  className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="-h.gu_y"
                >
                  <Zap className="h-6 w-6 text-info" data-oid="vmirq--" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="ydb:hz.">
                  Pricing Pressure
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="--y3rwy">
                  "How do I stay profitable without losing customers?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20" data-oid="ff9wg.w">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="nnubj99"
        >
          <div className="text-center mb-16" data-oid="fl-rslq">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-oid="8c1m.mf"
            >
              5 Essential Tools for Trade Success
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-oid="mcj8k:b"
            >
              Each tool solves a specific trade challenge with instant,
              actionable insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            data-oid=":e5fo_9"
          >
            {CORE_APPS.map((app, index) => {
              const Icon = iconMap[app.icon as keyof typeof iconMap];
              return (
                <Card
                  key={app.id}
                  className="card-hover group"
                  data-oid="62u-gb7"
                >
                  <CardHeader data-oid="b11c0e6">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid=".z9:ovk"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${app.color}-500/10 flex items-center justify-center`}
                        data-oid="1ef618j"
                      >
                        <Icon
                          className={`h-6 w-6 text-${app.color}-500`}
                          data-oid="9k.o48l"
                        />
                      </div>
                      <Badge variant="secondary" data-oid="8i:d93j">
                        #{index + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl" data-oid="y-dyna7">
                      {app.name}
                    </CardTitle>
                    <CardDescription
                      className="text-destructive font-medium"
                      data-oid="6bqw7td"
                    >
                      "{app.problem}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent data-oid="02z2.z3">
                    <p
                      className="text-muted-foreground mb-6"
                      data-oid="p_6xmb8"
                    >
                      {app.solution}
                    </p>
                    <Button
                      className="w-full group-hover:bg-orange group-hover:text-white transition-colors"
                      variant="outline"
                      asChild
                      data-oid="1rja58i"
                    >
                      <Link
                        href={`/${params.locale}${app.href}`}
                        data-oid="mefui_7"
                      >
                        {app.name.split(" ")[0]} Now
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          data-oid="21pa8lg"
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
      <section className="py-20 bg-muted/30" data-oid="flp.i:1">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="kul:45y"
        >
          <div className="max-w-4xl mx-auto" data-oid="j2kp604">
            <div className="text-center mb-16" data-oid="pb-.9wr">
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-oid="y22y7nc"
              >
                Why Trade Professionals Choose Us
              </h2>
              <p className="text-xl text-muted-foreground" data-oid="yjsfasz">
                Get the insights you need to make confident trade decisions
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="an5ij1:"
            >
              <div className="space-y-6" data-oid="vbh8ipb">
                <div className="flex items-start space-x-4" data-oid="z6dn2k3">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="i.npfqj"
                  />

                  <div data-oid="6-b.11c">
                    <h3 className="font-semibold mb-2" data-oid="f0931w:">
                      Instant Cost Analysis
                    </h3>
                    <p className="text-muted-foreground" data-oid="6:vw-8c">
                      Upload your purchase order and get landed cost
                      calculations in seconds, not hours of manual work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="u-ye0w7">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="k3z61a4"
                  />

                  <div data-oid="wnhsd6r">
                    <h3 className="font-semibold mb-2" data-oid="f5252qo">
                      AI-Powered Recommendations
                    </h3>
                    <p className="text-muted-foreground" data-oid="xdrrrvm">
                      Find alternative suppliers and optimize trade routes using
                      machine learning and real-time data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="xx.h.4l">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="xtlq76t"
                  />

                  <div data-oid="7ho7omh">
                    <h3 className="font-semibold mb-2" data-oid="249y.wl">
                      Scenario Planning
                    </h3>
                    <p className="text-muted-foreground" data-oid="wtmhv57">
                      Model different pricing strategies and see the impact on
                      your margins and customer relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6" data-oid="v1igq4y">
                <div className="flex items-start space-x-4" data-oid="8.t:u7t">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="7b-v20m"
                  />

                  <div data-oid="kq62sqe">
                    <h3 className="font-semibold mb-2" data-oid=".4mqtis">
                      Early Warning System
                    </h3>
                    <p className="text-muted-foreground" data-oid="cgq:ypy">
                      Get 30/60/90 day advance warnings about policy changes
                      that could affect your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="kbjelhu">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="6dy2vmx"
                  />

                  <div data-oid="jhu.67b">
                    <h3 className="font-semibold mb-2" data-oid="r519z4f">
                      Professional Reports
                    </h3>
                    <p className="text-muted-foreground" data-oid="p1stpi8">
                      Generate executive-ready reports and customer
                      communication templates with one click.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="ky_r0h3">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="_aejaj1"
                  />

                  <div data-oid="_gyaoae">
                    <h3 className="font-semibold mb-2" data-oid="j127q16">
                      No Setup Required
                    </h3>
                    <p className="text-muted-foreground" data-oid="l3p3i-v">
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
      <section className="py-20" data-oid="n0h5t75">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="i0.sbwt"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="hax3tn6">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-oid="a.-lj97"
            >
              Ready to Take Control of Your Trade Costs?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-8"
              data-oid="o0kv6:n"
            >
              Join thousands of trade professionals who use TradeNavigatorPro to
              make smarter, faster decisions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="hhbx4da"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="5ays4a8"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="e1cdzag"
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="y373g4v" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="z8wfnji">
                <Link href={`/${params.locale}/contact`} data-oid="u3kqf:5">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-6"
              data-oid="1.89os0"
            >
              ✓ No credit card required ✓ Instant results ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
