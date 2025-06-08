import { Metadata } from "next";
import { getDictionary, type LocaleKey } from "@/lib/i18n/config";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title:
      "TradeNavigatorPro - Stop Trade Policy Surprises From Destroying Your Profits",
    description:
      "Calculate tariff impacts instantly, find alternative suppliers, and optimize pricing strategies. TradeNavigatorPro helps 40,000+ SMBs navigate US trade policy changes profitably.",
    keywords: [
      "trade policy software for small business",
      "tariff calculator",
      "supply chain management",
      "import cost calculator",
      "how to prepare for trade policy changes",
      "alternative supplier finder",
    ],
  };
}

// Marketing landing page component
export default async function MarketingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <Icons.logo className="h-14 w-14 text-[#ff6b3d] mb-2" />

          <h1 className="text-5xl md:text-6xl font-extrabold text-[#ff6b3d] mb-2">
            Stop Trade Policy Surprises From Destroying Your Profits
          </h1>
          <p className="text-2xl text-white font-semibold mb-6">
            Turn US trade uncertainty into competitive advantage. Calculate real
            tariff costs, find alternative suppliers, and optimize pricing in
            minutes—not months.
          </p>
          <ul className="text-left text-lg text-[#ffb366] font-semibold space-y-2 mb-8">
            <li>
              • Your supplier claims 25% price increases due to "new
              tariffs"—but is that accurate?
            </li>
            <li>
              • Competitors found cheaper supply routes you don't know about
            </li>
            <li>
              • Every trade announcement sends you scrambling while others stay
              ahead
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <Button
              asChild
              className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            >
              <Link href={`/${locale}/solutions`}>
                Discover Our 5 Essential Tools
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            >
              <Link href={`/${locale}/signup`}>Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6">
            Every Day You Wait, Your Competition Gets Further Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            While you're manually calculating tariff impacts, smart SMBs use
            TradeNavigatorPro to make data-driven decisions in real-time.
            They're winning your customers with better prices while maintaining
            higher margins.
          </p>
          <p className="text-xl text-gray-200 font-semibold">
            40,000+ small businesses face the same challenge:{" "}
            <span className="text-[#ffb366]">
              trade policies change faster than they can adapt
            </span>
            . The businesses that survive turn uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Solution Preview */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12">
        <div className="max-w-4xl text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff6b3d] mb-6">
            5 Tools That Give You Unfair Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-10">
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]">
            <span className="text-2xl mb-2">💰</span>
            <h3 className="font-bold text-lg mb-1">
              Emergency Cost Calculator
            </h3>
            <p className="text-gray-400 text-base mb-2">
              Upload purchase orders → get instant landed cost breakdown. Verify
              if supplier price increases are accurate.
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]">
            <span className="text-2xl mb-2">🌍</span>
            <h3 className="font-bold text-lg mb-1">
              Supply Chain Pivot Planner
            </h3>
            <p className="text-gray-400 text-base mb-2">
              AI finds alternative suppliers in tariff-free countries. Compare
              total costs including logistics and quality.
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]">
            <span className="text-2xl mb-2">📊</span>
            <h3 className="font-bold text-lg mb-1">
              Pricing Strategy Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2">
              Model scenarios: absorb, pass-through, or split costs. Protect
              margins without losing customers.
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]">
            <span className="text-2xl mb-2">⏰</span>
            <h3 className="font-bold text-lg mb-1">Tariff Timeline Tracker</h3>
            <p className="text-gray-400 text-base mb-2">
              Get 30/60/90-day advance warnings. Know what's coming before your
              competitors do.
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] md:col-span-2">
            <span className="text-2xl mb-2">🚚</span>
            <h3 className="font-bold text-lg mb-1">Trade Route Optimizer</h3>
            <p className="text-gray-400 text-base mb-2">
              Discover routing opportunities that minimize tariffs. Maximize
              trade agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12">
        <div className="max-w-4xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ffb366] mb-6">
            Join 40,000+ SMBs Taking Control of Trade Policy
          </h2>
        </div>
        <div className="flex flex-col gap-6 items-center mb-6">
          <blockquote className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl">
            "Saved us $180,000 in Q1 by finding alternative suppliers before
            competitors caught on."{" "}
            <span className="not-italic font-semibold">
              — Sarah M., Import Manager
            </span>
          </blockquote>
          <blockquote className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl">
            "90-day warnings let us adjust pricing properly. Retention actually
            improved during trade disputes."{" "}
            <span className="not-italic font-semibold">— Mike R., CEO</span>
          </blockquote>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-4">
          <span className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]">
            SOC 2 Compliant
          </span>
          <span className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]">
            99.9% Uptime
          </span>
          <span className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]">
            Real-time USTR Data
          </span>
          <span className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]">
            47 States
          </span>
        </div>
      </section>

      {/* Benefits */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12">
        <div className="max-w-4xl text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6">
            Turn Uncertainty Into Your Biggest Advantage
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10">
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center">
            <span className="text-2xl mb-2">⚡</span>
            <h3 className="font-bold text-lg mb-1">Lightning Decisions</h3>
            <p className="text-gray-400 text-base text-center">
              Calculate in minutes what takes weeks to research
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center">
            <span className="text-2xl mb-2">💰</span>
            <h3 className="font-bold text-lg mb-1">Protect Margins</h3>
            <p className="text-gray-400 text-base text-center">
              Find savings competitors miss
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center">
            <span className="text-2xl mb-2">🎯</span>
            <h3 className="font-bold text-lg mb-1">Stay Ahead</h3>
            <p className="text-gray-400 text-base text-center">
              Early warnings while others scramble
            </p>
          </div>
          <div className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center">
            <span className="text-2xl mb-2">📊</span>
            <h3 className="font-bold text-lg mb-1">Professional Reports</h3>
            <p className="text-gray-400 text-base text-center">
              Data-backed recommendations for stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12">
        <div className="max-w-2xl text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4">
            Ready to Stop Reacting and Start Anticipating?
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Thousands of SMBs stopped letting trade policy control their
            business. While competitors panic with each announcement, you'll be
            three steps ahead.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6">
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
          >
            <Link href={`/${locale}/solutions`}>
              See How Our 5 Tools Work Together
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
          >
            <Link href={`/${locale}/signup`}>Start Free Trial</Link>
          </Button>
        </div>
        <div className="text-gray-300 text-lg text-center max-w-xl mx-auto">
          <span className="font-semibold text-white">
            No credit card required.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
