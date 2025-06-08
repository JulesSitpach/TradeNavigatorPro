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
      data-oid="14c:r:x"
    >
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="_j..f-:"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="6k45v7_"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="fg-y2w1"
          />

          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="x4lu7uk"
          >
            Stop Trade Policy Surprises From Destroying Your Profits
          </h1>
          <p
            className="text-2xl text-white font-semibold mb-6"
            data-oid="09o-m1z"
          >
            Turn US trade uncertainty into competitive advantage. Calculate real
            tariff costs, find alternative suppliers, and optimize pricing in
            minutes—not months.
          </p>
          <ul
            className="text-left text-lg text-[#ffb366] font-semibold space-y-2 mb-8"
            data-oid="mhgq8zl"
          >
            <li data-oid="fvrdsx_">
              • Your supplier claims 25% price increases due to "new
              tariffs"—but is that accurate?
            </li>
            <li data-oid="v.s:k:l">
              • Competitors found cheaper supply routes you don't know about
            </li>
            <li data-oid="sqadesd">
              • Every trade announcement sends you scrambling while others stay
              ahead
            </li>
          </ul>
          <div
            className="flex flex-col md:flex-row gap-4 w-full justify-center"
            data-oid="q799ar_"
          >
            <Button
              asChild
              className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
              data-oid="rmm0aua"
            >
              <Link href={`/${locale}/solutions`} data-oid="ljjj4.3">
                Discover Our 5 Essential Tools
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
              data-oid="m0p4zlo"
            >
              <Link href={`/${locale}/signup`} data-oid="ua362nb">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="t1rkf3u"
      >
        <div className="max-w-3xl text-center" data-oid="a97myh5">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="_c98_d4"
          >
            Every Day You Wait, Your Competition Gets Further Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-6" data-oid="9t3cpta">
            While you're manually calculating tariff impacts, smart SMBs use
            TradeNavigatorPro to make data-driven decisions in real-time.
            They're winning your customers with better prices while maintaining
            higher margins.
          </p>
          <p className="text-xl text-gray-200 font-semibold" data-oid="19xzdee">
            40,000+ small businesses face the same challenge:{" "}
            <span className="text-[#ffb366]" data-oid="eadgh3z">
              trade policies change faster than they can adapt
            </span>
            . The businesses that survive turn uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Solution Preview */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="u58-oiy"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="98:ls8e">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ff6b3d] mb-6"
            data-oid="ol0rx-0"
          >
            5 Tools That Give You Unfair Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-10"
          data-oid="hdoalku"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="vghi3gw"
          >
            <span className="text-2xl mb-2" data-oid="iuesw2p">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="g:at62g">
              Emergency Cost Calculator
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="qrq8eph">
              Upload purchase orders → get instant landed cost breakdown. Verify
              if supplier price increases are accurate.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="80vspx:"
          >
            <span className="text-2xl mb-2" data-oid="54k1858">
              🌍
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid=".lwixfh">
              Supply Chain Pivot Planner
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="k6:vazw">
              AI finds alternative suppliers in tariff-free countries. Compare
              total costs including logistics and quality.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="ffpfp1."
          >
            <span className="text-2xl mb-2" data-oid="a7_4bbh">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="95ukcdo">
              Pricing Strategy Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="1f-ib.u">
              Model scenarios: absorb, pass-through, or split costs. Protect
              margins without losing customers.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="h6nwvf6"
          >
            <span className="text-2xl mb-2" data-oid="2hv6pjx">
              ⏰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="leeryc1">
              Tariff Timeline Tracker
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="hnwp1iv">
              Get 30/60/90-day advance warnings. Know what's coming before your
              competitors do.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] md:col-span-2"
            data-oid="vtul7eb"
          >
            <span className="text-2xl mb-2" data-oid="m2xa2:4">
              🚚
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="etp97-k">
              Trade Route Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="2:_d7qi">
              Discover routing opportunities that minimize tariffs. Maximize
              trade agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="m9sscy5"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="c:4i-9l">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ffb366] mb-6"
            data-oid="pkqs0fh"
          >
            Join 40,000+ SMBs Taking Control of Trade Policy
          </h2>
        </div>
        <div
          className="flex flex-col gap-6 items-center mb-6"
          data-oid="jiv7ekr"
        >
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="sojtl5c"
          >
            "Saved us $180,000 in Q1 by finding alternative suppliers before
            competitors caught on."{" "}
            <span className="not-italic font-semibold" data-oid="g0dazde">
              — Sarah M., Import Manager
            </span>
          </blockquote>
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="x_1kc.x"
          >
            "90-day warnings let us adjust pricing properly. Retention actually
            improved during trade disputes."{" "}
            <span className="not-italic font-semibold" data-oid="44g5nzv">
              — Mike R., CEO
            </span>
          </blockquote>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-4"
          data-oid="jilysgb"
        >
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid=":_5xd0d"
          >
            SOC 2 Compliant
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="ulhutq6"
          >
            99.9% Uptime
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="e4o7mzl"
          >
            Real-time USTR Data
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="p613f4y"
          >
            47 States
          </span>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="40vbg-i"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="e:ys.r0">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="94m8txn"
          >
            Turn Uncertainty Into Your Biggest Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10"
          data-oid="h_j.f9x"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="oa3iypm"
          >
            <span className="text-2xl mb-2" data-oid="a93yh72">
              ⚡
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="emx:x0a">
              Lightning Decisions
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="n0kcd4x"
            >
              Calculate in minutes what takes weeks to research
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid=".il8x.1"
          >
            <span className="text-2xl mb-2" data-oid="r0r4zf9">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="u7tx967">
              Protect Margins
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="9a5w13-"
            >
              Find savings competitors miss
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="g-25_88"
          >
            <span className="text-2xl mb-2" data-oid="mlu258v">
              🎯
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="q5bn_1r">
              Stay Ahead
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="xrlyzow"
            >
              Early warnings while others scramble
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid=":viorv3"
          >
            <span className="text-2xl mb-2" data-oid="-dxo7ox">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="b271wxf">
              Professional Reports
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="2t.fkfc"
            >
              Data-backed recommendations for stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="1hjtxsy"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="311id9d">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="x8l.jl6"
          >
            Ready to Stop Reacting and Start Anticipating?
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="p9hd1_:">
            Thousands of SMBs stopped letting trade policy control their
            business. While competitors panic with each announcement, you'll be
            three steps ahead.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="ce5c_y:"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="5kgrrgi"
          >
            <Link href={`/${locale}/solutions`} data-oid="mdlik54">
              See How Our 5 Tools Work Together
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="l61aexw"
          >
            <Link href={`/${locale}/signup`} data-oid="h7ybgo9">
              Start Free Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="m__yx-r"
        >
          <span className="font-semibold text-white" data-oid="5e6ksu7">
            No credit card required.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
