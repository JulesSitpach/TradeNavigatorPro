import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      data-oid="16xvkry"
    >
      <div className="container mx-auto px-4 py-16" data-oid="pmvk6mu">
        {/* Header */}
        <header className="text-center mb-16" data-oid="pk2.te:">
          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            data-oid="esp6c4q"
          >
            TradeNavigatorPro
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-oid="dfq-4ht"
          >
            Navigate US trade policy changes and tariff impacts with
            professional trading tools
          </p>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16" data-oid="zp_::31">
          <div
            className="flex justify-center space-x-4 mb-8"
            data-oid="3ub5:9a"
          >
            <Link href={`/${locale}/dashboard`} data-oid="cls28qs">
              <Button size="lg" className="px-8 py-3" data-oid="_mybpqh">
                Go to Dashboard
              </Button>
            </Link>
            <Link href={`/${locale}/login`} data-oid="lj0tbbs">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                data-oid="7z47rvw"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" data-oid="invkco8">
          <Card data-oid="1k.m214">
            <CardHeader data-oid="217g2z6">
              <CardTitle data-oid="s.340t7">Trade Management</CardTitle>
              <CardDescription data-oid="5s7_-p0">
                Manage your trades with advanced tracking and analytics
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="6-utqgp">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="ijcq_dl"
              >
                <li data-oid="s2wybkh">• Real-time trade tracking</li>
                <li data-oid="rnsm:j7">• Portfolio analytics</li>
                <li data-oid="ym40-8h">• Risk management tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-oid="vnlrnpv">
            <CardHeader data-oid="f1je1np">
              <CardTitle data-oid="1ewg_n5">Market Analysis</CardTitle>
              <CardDescription data-oid="s1tjvtf">
                Stay informed with comprehensive market insights
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="5rs_w8-">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="nvtr:.s"
              >
                <li data-oid="by_ibg:">• Market trend analysis</li>
                <li data-oid="ut75_le">• Price predictions</li>
                <li data-oid="3k7xyzd">• Economic indicators</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-oid="npb01fo">
            <CardHeader data-oid="36ebd0w">
              <CardTitle data-oid="j3bjl0a">Tariff Impact</CardTitle>
              <CardDescription data-oid=":x3vkmy">
                Understand how trade policies affect your business
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="-ta6_ks">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="w-il2kf"
              >
                <li data-oid="myuv9_b">• Tariff calculators</li>
                <li data-oid="9v9flli">• Policy change alerts</li>
                <li data-oid="1ir7zvk">• Supply chain optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="text-center" data-oid="8pwm57s">
          <h2 className="text-2xl font-bold mb-6" data-oid="xrhncaj">
            Quick Access
          </h2>
          <div className="flex justify-center space-x-4" data-oid="jrr5knp">
            <Link href={`/${locale}/signup`} data-oid="oyt.nbs">
              <Button variant="outline" data-oid="c2epga:">
                Sign Up
              </Button>
            </Link>
            <Link href={`/${locale}/dashboard`} data-oid="01.nx_6">
              <Button variant="outline" data-oid="ybh9-d5">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
