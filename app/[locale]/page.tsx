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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            TradeNavigatorPro
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Navigate US trade policy changes and tariff impacts with
            professional trading tools
          </p>
        </header>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-4 mb-8">
            <Link href={`/${locale}/dashboard`}>
              <Button size="lg" className="px-8 py-3">
                Go to Dashboard
              </Button>
            </Link>
            <Link href={`/${locale}/login`}>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Trade Management</CardTitle>
              <CardDescription>
                Manage your trades with advanced tracking and analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Real-time trade tracking</li>
                <li>• Portfolio analytics</li>
                <li>• Risk management tools</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Analysis</CardTitle>
              <CardDescription>
                Stay informed with comprehensive market insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Market trend analysis</li>
                <li>• Price predictions</li>
                <li>• Economic indicators</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tariff Impact</CardTitle>
              <CardDescription>
                Understand how trade policies affect your business
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tariff calculators</li>
                <li>• Policy change alerts</li>
                <li>• Supply chain optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
          <div className="flex justify-center space-x-4">
            <Link href={`/${locale}/signup`}>
              <Button variant="outline">Sign Up</Button>
            </Link>
            <Link href={`/${locale}/dashboard`}>
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
