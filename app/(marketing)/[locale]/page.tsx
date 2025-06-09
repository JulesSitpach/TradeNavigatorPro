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
    <div className="flex flex-col" data-oid="tobwrpk">
      {/* Hero Section */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        data-oid="dp.8tk7"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-orange/10 via-background to-blue-600/10"
          data-oid="a4at9vl"
        />

        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative"
          data-oid="-t3:7d0"
        >
          <div className="max-w-4xl mx-auto text-center" data-oid="ai_tw2x">
            <Badge variant="secondary" className="mb-6" data-oid="j.rps59">
              🚀 AI-Powered Trade Intelligence
            </Badge>
            <h1
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6"
              data-oid="mds5i:1"
            >
              Navigate Global Trade with{" "}
              <span className="text-orange" data-oid="x9ln__0">
                Confidence
              </span>
            </h1>
            <p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              data-oid="sldwca6"
            >
              Stop guessing about tariff impacts. Get instant cost calculations,
              find alternative suppliers, and optimize your pricing strategy
              with our AI-powered trade intelligence platform.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="j_nekzs"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid=".2v1294"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="fcmtx-x"
                >
                  Try Cost Calculator Free
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="u1e28r:" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="28n3v48">
                <Link href={`/${params.locale}/demo`} data-oid="dfetc.6">
                  Watch Demo
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-4"
              data-oid="q9iu_9t"
            >
              No credit card required • Get results in seconds
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-muted/30" data-oid="66u5_w-">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="n5mh5or"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="t0:kp_6">
            <h2
              className="text-3xl font-bold text-foreground mb-6"
              data-oid="8kvch3q"
            >
              Trade Policy Changes Shouldn't Catch You Off Guard
            </h2>
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              data-oid="zs9m62h"
            >
              <div className="text-center" data-oid="qca-g-x">
                <div
                  className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="qxpmpci"
                >
                  <TrendingUp
                    className="h-6 w-6 text-destructive"
                    data-oid="zzqy:oh"
                  />
                </div>
                <h3 className="font-semibold mb-2" data-oid="8ts7kdd">
                  Surprise Cost Increases
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="f:h6qx2">
                  "My supplier said costs are going up 25% - is that right?"
                </p>
              </div>
              <div className="text-center" data-oid="v1gfdbu">
                <div
                  className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="-84yaax"
                >
                  <Shield className="h-6 w-6 text-warning" data-oid="m1mq2z." />
                </div>
                <h3 className="font-semibold mb-2" data-oid=":_6l3rt">
                  Supply Chain Risks
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="7wd.vqb">
                  "Where else can I source without getting hit by tariffs?"
                </p>
              </div>
              <div className="text-center" data-oid="74dj3di">
                <div
                  className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto mb-4"
                  data-oid="nboo08r"
                >
                  <Zap className="h-6 w-6 text-info" data-oid="1fmk8p8" />
                </div>
                <h3 className="font-semibold mb-2" data-oid="1qfhe7j">
                  Pricing Pressure
                </h3>
                <p className="text-sm text-muted-foreground" data-oid="loh.8gw">
                  "How do I stay profitable without losing customers?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Applications */}
      <section className="py-20" data-oid="bf4lfbo">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="9iryyo5"
        >
          <div className="text-center mb-16" data-oid="sphc8e_">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
              data-oid="z.s8whh"
            >
              5 Essential Tools for Trade Success
            </h2>
            <p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              data-oid="polp4te"
            >
              Each tool solves a specific trade challenge with instant,
              actionable insights
            </p>
          </div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            data-oid="lhc7igk"
          >
            {CORE_APPS.map((app, index) => {
              const Icon = iconMap[app.icon as keyof typeof iconMap];
              return (
                <Card
                  key={app.id}
                  className="card-hover group"
                  data-oid="ebxghd4"
                >
                  <CardHeader data-oid="65ame13">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="n0l2meh"
                    >
                      <div
                        className={`w-12 h-12 rounded-lg bg-${app.color}-500/10 flex items-center justify-center`}
                        data-oid=":oghhtq"
                      >
                        <Icon
                          className={`h-6 w-6 text-${app.color}-500`}
                          data-oid="hnus80d"
                        />
                      </div>
                      <Badge variant="secondary" data-oid="q34f_8-">
                        #{index + 1}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl" data-oid=".dh6eg:">
                      {app.name}
                    </CardTitle>
                    <CardDescription
                      className="text-destructive font-medium"
                      data-oid="wzcujtn"
                    >
                      "{app.problem}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent data-oid="1syg3ew">
                    <p
                      className="text-muted-foreground mb-6"
                      data-oid="lqgg40x"
                    >
                      {app.solution}
                    </p>
                    <Button
                      className="w-full group-hover:bg-orange group-hover:text-white transition-colors"
                      variant="outline"
                      asChild
                      data-oid="1:vz1rb"
                    >
                      <Link
                        href={`/${params.locale}${app.href}`}
                        data-oid=".q-6:rr"
                      >
                        {app.name.split(" ")[0]} Now
                        <ArrowRight
                          className="ml-2 h-4 w-4"
                          data-oid="fzzidah"
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
      <section className="py-20 bg-muted/30" data-oid="jqtwyrw">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ldzlnzo"
        >
          <div className="max-w-4xl mx-auto" data-oid="x330kup">
            <div className="text-center mb-16" data-oid="4ie8cxa">
              <h2
                className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
                data-oid="k3so-li"
              >
                Why Trade Professionals Choose Us
              </h2>
              <p className="text-xl text-muted-foreground" data-oid="ykrxx--">
                Get the insights you need to make confident trade decisions
              </p>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-oid="1799a9t"
            >
              <div className="space-y-6" data-oid="0w9clyc">
                <div className="flex items-start space-x-4" data-oid="319n9ck">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="vbt4kw_"
                  />

                  <div data-oid="bfd8erb">
                    <h3 className="font-semibold mb-2" data-oid="dkpbqri">
                      Instant Cost Analysis
                    </h3>
                    <p className="text-muted-foreground" data-oid="7g5sdo2">
                      Upload your purchase order and get landed cost
                      calculations in seconds, not hours of manual work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="pzeijm.">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="9xpri:x"
                  />

                  <div data-oid="q-5fcyn">
                    <h3 className="font-semibold mb-2" data-oid="fb_nh7a">
                      AI-Powered Recommendations
                    </h3>
                    <p className="text-muted-foreground" data-oid="o9d7_tq">
                      Find alternative suppliers and optimize trade routes using
                      machine learning and real-time data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid=".pg2ble">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="l2vd.5h"
                  />

                  <div data-oid="dm_zvfl">
                    <h3 className="font-semibold mb-2" data-oid="o6js:ak">
                      Scenario Planning
                    </h3>
                    <p className="text-muted-foreground" data-oid="vfz_sow">
                      Model different pricing strategies and see the impact on
                      your margins and customer relationships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6" data-oid="5_p8jd8">
                <div className="flex items-start space-x-4" data-oid="35s5gdv">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="veq-ipe"
                  />

                  <div data-oid="s020s31">
                    <h3 className="font-semibold mb-2" data-oid="_.g-q5l">
                      Early Warning System
                    </h3>
                    <p className="text-muted-foreground" data-oid="24hf61h">
                      Get 30/60/90 day advance warnings about policy changes
                      that could affect your business.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="tdkol1w">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="6uu-a53"
                  />

                  <div data-oid="5rgwbc5">
                    <h3 className="font-semibold mb-2" data-oid="o6bk8xc">
                      Professional Reports
                    </h3>
                    <p className="text-muted-foreground" data-oid="e:q_4p_">
                      Generate executive-ready reports and customer
                      communication templates with one click.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-oid="928g6wq">
                  <CheckCircle
                    className="h-6 w-6 text-success mt-1 flex-shrink-0"
                    data-oid="-9e14ok"
                  />

                  <div data-oid="::ef-22">
                    <h3 className="font-semibold mb-2" data-oid="xz-grqm">
                      No Setup Required
                    </h3>
                    <p className="text-muted-foreground" data-oid="jxol3aq">
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
      <section className="py-20" data-oid="_2gl0gv">
        <div
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="7dh1pju"
        >
          <div className="max-w-3xl mx-auto text-center" data-oid="5.slx6w">
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6"
              data-oid="jtsn5ci"
            >
              Ready to Take Control of Your Trade Costs?
            </h2>
            <p
              className="text-xl text-muted-foreground mb-8"
              data-oid="q1:0nuq"
            >
              Join thousands of trade professionals who use TradeNavigatorPro to
              make smarter, faster decisions.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="c27wgye"
            >
              <Button
                size="lg"
                className="btn-orange"
                asChild
                data-oid="2w5vbnv"
              >
                <Link
                  href={`/${params.locale}/apps/cost-calculator`}
                  data-oid="xhcsdze"
                >
                  Start Free Analysis
                  <ArrowRight className="ml-2 h-5 w-5" data-oid="cdxhy6c" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild data-oid="5_j.rp0">
                <Link href={`/${params.locale}/contact`} data-oid="u.zsvfk">
                  Talk to an Expert
                </Link>
              </Button>
            </div>
            <p
              className="text-sm text-muted-foreground mt-6"
              data-oid="d.o9qph"
            >
              ✓ No credit card required ✓ Instant results ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
