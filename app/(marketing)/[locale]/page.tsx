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
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="y5mpvtq"
    >
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="9dc6ue_"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="r6nexln"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="3dt2m6u"
          />

          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="bf2o6fu"
          >
            Stop Trade Policy Surprises From Destroying Your Profits
          </h1>
          <p
            className="text-2xl text-white font-semibold mb-6"
            data-oid="3cv13bi"
          >
            Turn US trade uncertainty into competitive advantage. Calculate real
            tariff costs, find alternative suppliers, and optimize pricing in
            minutes—not months.
          </p>
          <ul
            className="text-left text-lg text-[#ffb366] font-semibold space-y-2 mb-8"
            data-oid="9u5h:28"
          >
            <li data-oid="an5-q6d">
              • Your supplier claims 25% price increases due to "new
              tariffs"—but is that accurate?
            </li>
            <li data-oid="p7mh78c">
              • Competitors found cheaper supply routes you don't know about
            </li>
            <li data-oid="pa55qvm">
              • Every trade announcement sends you scrambling while others stay
              ahead
            </li>
          </ul>
          <div
            className="flex flex-col md:flex-row gap-4 w-full justify-center"
            data-oid="zc1r_ik"
          >
            <Button
              asChild
              className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
              data-oid="ai8a34o"
            >
              <Link href={`/${locale}/solutions`} data-oid="b7a_i35">
                Discover Our 5 Essential Tools
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
              data-oid="flbnc1y"
            >
              <Link href={`/${locale}/signup`} data-oid="v1rsy2r">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="ugxcll6"
      >
        <div className="max-w-3xl text-center" data-oid="4zqcnr3">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid=".f:ci45"
          >
            Every Day You Wait, Your Competition Gets Further Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-6" data-oid="1pcw913">
            While you're manually calculating tariff impacts, smart SMBs use
            TradeNavigatorPro to make data-driven decisions in real-time.
            They're winning your customers with better prices while maintaining
            higher margins.
          </p>
          <p className="text-xl text-gray-200 font-semibold" data-oid="z0:3fd.">
            40,000+ small businesses face the same challenge:{" "}
            <span className="text-[#ffb366]" data-oid="-92vi3o">
              trade policies change faster than they can adapt
            </span>
            . The businesses that survive turn uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Solution Preview */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="qyf4u4c"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="uqecygb">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ff6b3d] mb-6"
            data-oid="-t9hiz0"
          >
            5 Tools That Give You Unfair Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-10"
          data-oid="hz:1yng"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="i8bj5il"
          >
            <span className="text-2xl mb-2" data-oid=".8uoa9j">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="bg0vdly">
              Emergency Cost Calculator
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid=".u91zor">
              Upload purchase orders → get instant landed cost breakdown. Verify
              if supplier price increases are accurate.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="p:x.lz-"
          >
            <span className="text-2xl mb-2" data-oid="5ng_vx3">
              🌍
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="p0eqv3o">
              Supply Chain Pivot Planner
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="98c3aw-">
              AI finds alternative suppliers in tariff-free countries. Compare
              total costs including logistics and quality.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="6:5:4sy"
          >
            <span className="text-2xl mb-2" data-oid="dmvj2fs">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="935jopp">
              Pricing Strategy Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="x.ib.9v">
              Model scenarios: absorb, pass-through, or split costs. Protect
              margins without losing customers.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="k-ao1fr"
          >
            <span className="text-2xl mb-2" data-oid="wqn1cjd">
              ⏰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="j-8yn:s">
              Tariff Timeline Tracker
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="f1fewmn">
              Get 30/60/90-day advance warnings. Know what's coming before your
              competitors do.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] md:col-span-2"
            data-oid="a53d4.l"
          >
            <span className="text-2xl mb-2" data-oid="2ctc.a5">
              🚚
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="qbp47fy">
              Trade Route Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="4g1k-zq">
              Discover routing opportunities that minimize tariffs. Maximize
              trade agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="3gegy3c"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="te7o1_1">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ffb366] mb-6"
            data-oid="s::j:.1"
          >
            Join 40,000+ SMBs Taking Control of Trade Policy
          </h2>
        </div>
        <div
          className="flex flex-col gap-6 items-center mb-6"
          data-oid="biwschv"
        >
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="-p2qwit"
          >
            "Saved us $180,000 in Q1 by finding alternative suppliers before
            competitors caught on."{" "}
            <span className="not-italic font-semibold" data-oid="w2uav:8">
              — Sarah M., Import Manager
            </span>
          </blockquote>
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="wcwjs1q"
          >
            "90-day warnings let us adjust pricing properly. Retention actually
            improved during trade disputes."{" "}
            <span className="not-italic font-semibold" data-oid="v0p01uv">
              — Mike R., CEO
            </span>
          </blockquote>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-4"
          data-oid="le9h6ut"
        >
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="7peew9y"
          >
            SOC 2 Compliant
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="fzgvahz"
          >
            99.9% Uptime
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="kdq_bec"
          >
            Real-time USTR Data
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="jvncp.w"
          >
            47 States
          </span>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="4s-wjoi"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="_5aalku">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="6.pxz6h"
          >
            Turn Uncertainty Into Your Biggest Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10"
          data-oid="jsokbt7"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="u:0iesw"
          >
            <span className="text-2xl mb-2" data-oid="0rpor6-">
              ⚡
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="t1rpnb.">
              Lightning Decisions
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="xv5barr"
            >
              Calculate in minutes what takes weeks to research
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="9nskutw"
          >
            <span className="text-2xl mb-2" data-oid="fv_xf:i">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="likrl16">
              Protect Margins
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="80p41nb"
            >
              Find savings competitors miss
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="63xotuc"
          >
            <span className="text-2xl mb-2" data-oid="jw9d_t8">
              🎯
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="w_3tb:q">
              Stay Ahead
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="2c2.ryi"
            >
              Early warnings while others scramble
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="m6g69o-"
          >
            <span className="text-2xl mb-2" data-oid="phf0.8g">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="9pqscmb">
              Professional Reports
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="-osnkd0"
            >
              Data-backed recommendations for stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="-56r.br"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="9u:6t0c">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="r59f-ue"
          >
            Ready to Stop Reacting and Start Anticipating?
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="5ro0g83">
            Thousands of SMBs stopped letting trade policy control their
            business. While competitors panic with each announcement, you'll be
            three steps ahead.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="rn.wlf7"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="une.lbe"
          >
            <Link href={`/${locale}/solutions`} data-oid="keq5cz6">
              See How Our 5 Tools Work Together
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="ky-:8lx"
          >
            <Link href={`/${locale}/signup`} data-oid="wh5g0o7">
              Start Free Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="miksh1."
        >
          <span className="font-semibold text-white" data-oid="hmoifge">
            No credit card required.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
