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
      data-oid="9955i0l"
    >
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="zzejh4x"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="v_hnl37"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="jbvszgg"
          />

          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="s-5n99-"
          >
            Stop Trade Policy Surprises From Destroying Your Profits
          </h1>
          <p
            className="text-2xl text-white font-semibold mb-6"
            data-oid="z08ys_p"
          >
            Turn US trade uncertainty into competitive advantage. Calculate real
            tariff costs, find alternative suppliers, and optimize pricing in
            minutes—not months.
          </p>
          <ul
            className="text-left text-lg text-[#ffb366] font-semibold space-y-2 mb-8"
            data-oid="rh2k5ca"
          >
            <li data-oid="d:bon5n">
              • Your supplier claims 25% price increases due to "new
              tariffs"—but is that accurate?
            </li>
            <li data-oid="vlviwmm">
              • Competitors found cheaper supply routes you don't know about
            </li>
            <li data-oid="2hrwpt7">
              • Every trade announcement sends you scrambling while others stay
              ahead
            </li>
          </ul>
          <div
            className="flex flex-col md:flex-row gap-4 w-full justify-center"
            data-oid="skd09ni"
          >
            <Button
              asChild
              className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
              data-oid="gaa3b96"
            >
              <Link href={`/${locale}/solutions`} data-oid="im-nr6.">
                Discover Our 5 Essential Tools
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
              data-oid="qv08297"
            >
              <Link href={`/${locale}/signup`} data-oid="vliavbq">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="t92yucy"
      >
        <div className="max-w-3xl text-center" data-oid="4yvel1x">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="3bpa7xs"
          >
            Every Day You Wait, Your Competition Gets Further Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-6" data-oid="3a8hhs:">
            While you're manually calculating tariff impacts, smart SMBs use
            TradeNavigatorPro to make data-driven decisions in real-time.
            They're winning your customers with better prices while maintaining
            higher margins.
          </p>
          <p className="text-xl text-gray-200 font-semibold" data-oid=".3fpcvy">
            40,000+ small businesses face the same challenge:{" "}
            <span className="text-[#ffb366]" data-oid="pqs2zjd">
              trade policies change faster than they can adapt
            </span>
            . The businesses that survive turn uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Solution Preview */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="m2.6p5u"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="y8wi.rk">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ff6b3d] mb-6"
            data-oid="5tcci8f"
          >
            5 Tools That Give You Unfair Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-10"
          data-oid=":ct1qt4"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid=".0fkt_3"
          >
            <span className="text-2xl mb-2" data-oid="_3i-jyc">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="h7426x:">
              Emergency Cost Calculator
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="lmed_p6">
              Upload purchase orders → get instant landed cost breakdown. Verify
              if supplier price increases are accurate.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="mh1isss"
          >
            <span className="text-2xl mb-2" data-oid="bo8w1in">
              🌍
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="26dazia">
              Supply Chain Pivot Planner
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="5h90rfw">
              AI finds alternative suppliers in tariff-free countries. Compare
              total costs including logistics and quality.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="h-y6an."
          >
            <span className="text-2xl mb-2" data-oid="74-62q-">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid=".7hkahd">
              Pricing Strategy Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="hiwtavu">
              Model scenarios: absorb, pass-through, or split costs. Protect
              margins without losing customers.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="nz3q62:"
          >
            <span className="text-2xl mb-2" data-oid="6y3882d">
              ⏰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="9ktd7jp">
              Tariff Timeline Tracker
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="2ec9d8.">
              Get 30/60/90-day advance warnings. Know what's coming before your
              competitors do.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] md:col-span-2"
            data-oid="2xzkg.r"
          >
            <span className="text-2xl mb-2" data-oid="ci1fkmn">
              🚚
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid=":tl0a1o">
              Trade Route Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="xf:a-xg">
              Discover routing opportunities that minimize tariffs. Maximize
              trade agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="k-02kwa"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="esz_.6q">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ffb366] mb-6"
            data-oid="kzd4xlz"
          >
            Join 40,000+ SMBs Taking Control of Trade Policy
          </h2>
        </div>
        <div
          className="flex flex-col gap-6 items-center mb-6"
          data-oid="b4iatnf"
        >
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="qfue9kt"
          >
            "Saved us $180,000 in Q1 by finding alternative suppliers before
            competitors caught on."{" "}
            <span className="not-italic font-semibold" data-oid="h8us90o">
              — Sarah M., Import Manager
            </span>
          </blockquote>
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="qop2lit"
          >
            "90-day warnings let us adjust pricing properly. Retention actually
            improved during trade disputes."{" "}
            <span className="not-italic font-semibold" data-oid="r9hbmkq">
              — Mike R., CEO
            </span>
          </blockquote>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-4"
          data-oid="pg_el98"
        >
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid=":55vy.7"
          >
            SOC 2 Compliant
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="az-vrty"
          >
            99.9% Uptime
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="a8n.ac:"
          >
            Real-time USTR Data
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="1o_jcgn"
          >
            47 States
          </span>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="8m0dcyf"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="fenhsql">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid=".oy.w97"
          >
            Turn Uncertainty Into Your Biggest Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10"
          data-oid="lveqg8u"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="mpzf079"
          >
            <span className="text-2xl mb-2" data-oid="wuzcpx.">
              ⚡
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="n1qldwz">
              Lightning Decisions
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="t7vmuq0"
            >
              Calculate in minutes what takes weeks to research
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="uqzod6e"
          >
            <span className="text-2xl mb-2" data-oid="blmpki8">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="xq6khp6">
              Protect Margins
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="7qx:ern"
            >
              Find savings competitors miss
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="pkd2jl7"
          >
            <span className="text-2xl mb-2" data-oid="qnq704j">
              🎯
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="v1ttoqp">
              Stay Ahead
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="6tzdj7u"
            >
              Early warnings while others scramble
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="biqwp9e"
          >
            <span className="text-2xl mb-2" data-oid="l0.83rl">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="7lpv-h4">
              Professional Reports
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="vrk4jt-"
            >
              Data-backed recommendations for stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="wwrfnxj"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="tk.4_rf">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="1wqek2w"
          >
            Ready to Stop Reacting and Start Anticipating?
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="rhbbnfv">
            Thousands of SMBs stopped letting trade policy control their
            business. While competitors panic with each announcement, you'll be
            three steps ahead.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="liby2uu"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="ziaqk52"
          >
            <Link href={`/${locale}/solutions`} data-oid=".0-.l_i">
              See How Our 5 Tools Work Together
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="4n-z-:8"
          >
            <Link href={`/${locale}/signup`} data-oid="dc:2ykr">
              Start Free Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="2kf-nvz"
        >
          <span className="font-semibold text-white" data-oid="o.2lkw8">
            No credit card required.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
