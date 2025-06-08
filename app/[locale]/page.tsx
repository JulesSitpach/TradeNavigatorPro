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
      data-oid="1_3x63k"
    >
      <div className="container mx-auto px-4 py-16" data-oid="d8vnoo:">
        {/* Header */}
        <header className="text-center mb-16" data-oid="-d.qae3">
          <h1
            className="text-5xl font-bold text-gray-900 mb-4"
            data-oid="t2t2yhg"
          >
            TradeNavigatorPro
          </h1>
          <p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            data-oid="479ejp-"
          >
            Navigate US trade policy changes and tariff impacts with
            professional trading tools
          </p>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16" data-oid="8v68hsm">
          <div
            className="flex justify-center space-x-4 mb-8"
            data-oid="eq12dmp"
          >
            <Link href={`/${locale}/dashboard`} data-oid="m_b-fsn">
              <Button size="lg" className="px-8 py-3" data-oid="oeoklcw">
                Go to Dashboard
              </Button>
            </Link>
            <Link href={`/${locale}/login`} data-oid="uqaj-am">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3"
                data-oid="p:u.i_-"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" data-oid="5x9xq5u">
          <Card data-oid="cfi46y0">
            <CardHeader data-oid="sr-p2zp">
              <CardTitle data-oid="sh8p.-_">Trade Management</CardTitle>
              <CardDescription data-oid="g7c0er1">
                Manage your trades with advanced tracking and analytics
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="l07ajhv">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="ms3h475"
              >
                <li data-oid="d5r-7k2">• Real-time trade tracking</li>
                <li data-oid="rx0uljz">• Portfolio analytics</li>
                <li data-oid="25qoqu.">• Risk management tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-oid="gud0h1-">
            <CardHeader data-oid="z4:c_4r">
              <CardTitle data-oid="2zdkpvr">Market Analysis</CardTitle>
              <CardDescription data-oid="er43j0h">
                Stay informed with comprehensive market insights
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="1a69n-.">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="jlgoyax"
              >
                <li data-oid="zha_9b7">• Market trend analysis</li>
                <li data-oid="uymr0yv">• Price predictions</li>
                <li data-oid="y8vs9w8">• Economic indicators</li>
              </ul>
            </CardContent>
          </Card>

          <Card data-oid="gcuu9ui">
            <CardHeader data-oid="2k05to7">
              <CardTitle data-oid="-rmkntl">Tariff Impact</CardTitle>
              <CardDescription data-oid="::wkku1">
                Understand how trade policies affect your business
              </CardDescription>
            </CardHeader>
            <CardContent data-oid="uo1h8vw">
              <ul
                className="space-y-2 text-sm text-gray-600"
                data-oid="opz7a:t"
              >
                <li data-oid="mdtpjo2">• Tariff calculators</li>
                <li data-oid="ipc9f-a">• Policy change alerts</li>
                <li data-oid=".eltl1n">• Supply chain optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="text-center" data-oid="jislr_q">
          <h2 className="text-2xl font-bold mb-6" data-oid="w_bwexa">
            Quick Access
          </h2>
          <div className="flex justify-center space-x-4" data-oid="cartc9z">
            <Link href={`/${locale}/signup`} data-oid="5ir-ahd">
              <Button variant="outline" data-oid="otl2poa">
                Sign Up
              </Button>
            </Link>
            <Link href={`/${locale}/dashboard`} data-oid="kl9-ao5">
              <Button variant="outline" data-oid="r1rt0a8">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
