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
    <div className="flex flex-col" data-oid="3qlr3u_">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        data-oid="aksx18w"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange/10 via-background to-blue-600/10"
          data-oid="jvd2_ez"
        />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          data-oid="dklvmdf"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="l0ji47m">
            <Badge variant="secondary" className="mb-6" data-oid="8ariq54">
              🚀 AI-Powered Trade Intelligence
            </Badge>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-oid="s7r-x1f"
            >
              Navigate Global Trade with{" "}
              <span className="text-orange" data-oid="s9ghjgx">
                Confidence
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              data-oid="z282eg8"
            >
              Stop guessing about tariff impacts. Get instant cost calculations,
              find alternative suppliers, and optimize your pricing strategy
              with our AI-powered trade intelligence platform.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="i:vjsuc"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="79m46_t"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="kx3fu77"
                >
                  Try Cost Calculator Free
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="ih4mk12" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid=":m4.7uv">
                <Link href={`/${params.locale}/demo`} data-oid="8dl65f5">
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-4"
              data-oid=".incvqx"
            >
              No credit card required • Get results in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30" data-oid="ne_s.5x">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="vv3t0m:"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="coxn94k">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              data-oid="qheql8:"
            >
              Trade Policy Changes Shouldn't Catch You Off Guard
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              data-oid="rn:ycup"
            >
              <div className="text-center" data-oid="9d4ksc_">
                <div
                  className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="zsmpwvi"
                >
                  <TrendingUp
                    className="h-6 w-6 text-destructive"
                    data-oid="-mc863b"
                  />
                </div>
                <h3 className="font-semibold mb-2" data-oid="jtmt416">
                  Surprise Cost Increases
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="::2ro:a">
                  "My supplier said costs are going up 25% - is that right?"
                </p>
              </div>
              <div className="text-center" data-oid="77ji2vj">
                <div
                  className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="oe-_qi5"
                >
                  <Shield className="h-6 w-6 text-warning" data-oid="vtr28r8" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="xf56jr4">
                  Supply Chain Risks
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="c:50eif">
                  "Where else can I source without getting hit by tariffs?"
                </p>
              </div>
              <div className="text-center" data-oid="ma2f9u7">
                <div
                  className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="yp34j3x"
                >
                  <Zap className="h-6 w-6 text-info" data-oid="0g3psr3" />
                </div>
                <h3 className="font-semibold mb-2" data-oid=":djduye">
                  Pricing Pressure
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="aigrd8o">
                  "How do I stay profitable without losing customers?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20" data-oid="i5zhzjj">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="1bhpk_u"
        >
          <div className="text-center mb-16" data-oid="w22ja-r">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-oid="zji6-b8"
            >
              5 Essential Tools for Trade Success
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-oid="e162b09"
            >
              Each tool solves a specific trade challenge with instant,
              actionable insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            data-oid="qpfz:e2"
          >
            {CORE_APPS.map((app, index) => {
              const Icon = iconMap[app.icon as keyof typeof iconMap];
              return (
                <Card
                  key={app.id}
                  className="card-hover group"
                  data-oid="c_eunjh"
                >
                  <CardHeader data-oid="r5lml:f">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="yu:2jo8"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${app.color}-500/10 flex items-center justify-center`}
                        data-oid="4vjf.qh"
                      >
                        <Icon
                          className={`h-6 w-6 text-${app.color}-500`}
                          data-oid="a6-74kv"
                        />
                      </div>
                      <Badge variant="secondary" data-oid="fza.wp8">
                        #{index + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl" data-oid=":5_xc.r">
                      {app.name}
                    </CardTitle>
                    <CardDescription
                      className="text-destructive font-medium"
                      data-oid="qw7ljhc"
                    >
                      "{app.problem}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent data-oid="c:mxqeh">
                    <p
                      className="text-muted-foreground mb-6"
                      data-oid="2-wst:4"
                    >
                      {app.solution}
                    </p>
                    <Button
                      className="w-full group-hover:bg-orange group-hover:text-white transition-colors"
                      variant="outline"
                      asChild
                      data-oid="s11wijs"
                    >
                      <Link
                        href={`/${params.locale}${app.href}`}
                        data-oid="wf1cbqq"
                      >
                        {app.name.split(" ")[0]} Now
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          data-oid="foebn3j"
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
      <section className="py-20 bg-muted/30" data-oid="aqqb6vl">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="i1j-j08"
        >
          <div className="max-w-4xl mx-auto" data-oid="4blsykz">
            <div className="text-center mb-16" data-oid="t_4hxfx">
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-oid="2i7-gzq"
              >
                Why Trade Professionals Choose Us
              </h2>
              <p className="text-xl text-muted-foreground" data-oid="8rv:bd4">
                Get the insights you need to make confident trade decisions
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="w6-gmw6"
            >
              <div className="space-y-6" data-oid="7k0-s5y">
                <div className="flex items-start space-x-4" data-oid="5cntuyl">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="xja9fv-"
                  />

                  <div data-oid="hl6nyy0">
                    <h3 className="font-semibold mb-2" data-oid="y40g09z">
                      Instant Cost Analysis
                    </h3>
                    <p className="text-muted-foreground" data-oid="q_r1g-h">
                      Upload your purchase order and get landed cost
                      calculations in seconds, not hours of manual work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="syoo_49">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="fbty997"
                  />

                  <div data-oid="uep916r">
                    <h3 className="font-semibold mb-2" data-oid="88jsp0o">
                      AI-Powered Recommendations
                    </h3>
                    <p className="text-muted-foreground" data-oid="ucauwi0">
                      Find alternative suppliers and optimize trade routes using
                      machine learning and real-time data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="sotlaxx">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="zexgr5l"
                  />

                  <div data-oid="rpmo6xo">
                    <h3 className="font-semibold mb-2" data-oid="p1q1du_">
                      Scenario Planning
                    </h3>
                    <p className="text-muted-foreground" data-oid="nkelpii">
                      Model different pricing strategies and see the impact on
                      your margins and customer relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6" data-oid="watha7q">
                <div className="flex items-start space-x-4" data-oid="ubqcqnp">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="76bzmnt"
                  />

                  <div data-oid="tbvvtox">
                    <h3 className="font-semibold mb-2" data-oid="jial4hh">
                      Early Warning System
                    </h3>
                    <p className="text-muted-foreground" data-oid="cd44zue">
                      Get 30/60/90 day advance warnings about policy changes
                      that could affect your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="z5:l2-7">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="flvq:88"
                  />

                  <div data-oid="gk3r4h7">
                    <h3 className="font-semibold mb-2" data-oid="h89.u74">
                      Professional Reports
                    </h3>
                    <p className="text-muted-foreground" data-oid="5:hdxn2">
                      Generate executive-ready reports and customer
                      communication templates with one click.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="xv_b_x3">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="e44diin"
                  />

                  <div data-oid="0.1tbl9">
                    <h3 className="font-semibold mb-2" data-oid="o_54b6o">
                      No Setup Required
                    </h3>
                    <p className="text-muted-foreground" data-oid="pknmmpl">
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
      <section className="py-20" data-oid="tjhrxi-">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rm-dbc2"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="2j1e5uq">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-oid="bki9zpg"
            >
              Ready to Take Control of Your Trade Costs?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-8"
              data-oid="yc9r3g3"
            >
              Join thousands of trade professionals who use TradeNavigatorPro to
              make smarter, faster decisions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="3l0fh_m"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="wavg3ak"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="edykznr"
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="bknlo:e" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="nmj2k3b">
                <Link href={`/${params.locale}/contact`} data-oid="-nm2wk8">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-6"
              data-oid="j:5y7me"
            >
              ✓ No credit card required ✓ Instant results ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
