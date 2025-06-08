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
      data-oid="r0.9hfe"
    >
      {/* Hero Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="g30_os8"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="jny4iq5"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="yjphk41"
          />

          <h1
            className="text-5xl md:text-6xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="ra9-avu"
          >
            Stop Trade Policy Surprises From Destroying Your Profits
          </h1>
          <p
            className="text-2xl text-white font-semibold mb-6"
            data-oid="jp:cj.q"
          >
            Turn US trade uncertainty into competitive advantage. Calculate real
            tariff costs, find alternative suppliers, and optimize pricing in
            minutes—not months.
          </p>
          <ul
            className="text-left text-lg text-[#ffb366] font-semibold space-y-2 mb-8"
            data-oid="xhpgo.7"
          >
            <li data-oid="xtva6zw">
              • Your supplier claims 25% price increases due to "new
              tariffs"—but is that accurate?
            </li>
            <li data-oid="8wz4me_">
              • Competitors found cheaper supply routes you don't know about
            </li>
            <li data-oid="jqycwpb">
              • Every trade announcement sends you scrambling while others stay
              ahead
            </li>
          </ul>
          <div
            className="flex flex-col md:flex-row gap-4 w-full justify-center"
            data-oid="m.15gkc"
          >
            <Button
              asChild
              className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
              data-oid="tmbk0u1"
            >
              <Link href={`/${locale}/solutions`} data-oid="hoorka8">
                Discover Our 5 Essential Tools
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
              data-oid="0nosnor"
            >
              <Link href={`/${locale}/signup`} data-oid="j87sh7j">
                Start Free Trial
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="lf6ib05"
      >
        <div className="max-w-3xl text-center" data-oid="ih5gey9">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="_vc6myb"
          >
            Every Day You Wait, Your Competition Gets Further Ahead
          </h2>
          <p className="text-xl text-gray-300 mb-6" data-oid="dlihgq3">
            While you're manually calculating tariff impacts, smart SMBs use
            TradeNavigatorPro to make data-driven decisions in real-time.
            They're winning your customers with better prices while maintaining
            higher margins.
          </p>
          <p className="text-xl text-gray-200 font-semibold" data-oid="9lqvp5i">
            40,000+ small businesses face the same challenge:{" "}
            <span className="text-[#ffb366]" data-oid="n58nkso">
              trade policies change faster than they can adapt
            </span>
            . The businesses that survive turn uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Solution Preview */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="ro3hcbt"
      >
        <div className="max-w-4xl text-center mb-10" data-oid=".wx444x">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ff6b3d] mb-6"
            data-oid="5drbok7"
          >
            5 Tools That Give You Unfair Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-10"
          data-oid="pt8v.3m"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="422ld.d"
          >
            <span className="text-2xl mb-2" data-oid=".r456pj">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid=".dw6ybg">
              Emergency Cost Calculator
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="z89ewz1">
              Upload purchase orders → get instant landed cost breakdown. Verify
              if supplier price increases are accurate.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="fvzanhy"
          >
            <span className="text-2xl mb-2" data-oid="sjz._8i">
              🌍
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="p9shrjy">
              Supply Chain Pivot Planner
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="k-gue09">
              AI finds alternative suppliers in tariff-free countries. Compare
              total costs including logistics and quality.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="w_ene_e"
          >
            <span className="text-2xl mb-2" data-oid="k3k4dwb">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="pqhcsr:">
              Pricing Strategy Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="_9::0pt">
              Model scenarios: absorb, pass-through, or split costs. Protect
              margins without losing customers.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d]"
            data-oid="dy3eacz"
          >
            <span className="text-2xl mb-2" data-oid="s7oyhph">
              ⏰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="-xl0-01">
              Tariff Timeline Tracker
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="v9g17jl">
              Get 30/60/90-day advance warnings. Know what's coming before your
              competitors do.
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] md:col-span-2"
            data-oid="m25xbbz"
          >
            <span className="text-2xl mb-2" data-oid="b:up3xd">
              🚚
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="aiq1h4-">
              Trade Route Optimizer
            </h3>
            <p className="text-gray-400 text-base mb-2" data-oid="gtpjkhd">
              Discover routing opportunities that minimize tariffs. Maximize
              trade agreements automatically.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="qhynzcm"
      >
        <div className="max-w-4xl text-center mb-10" data-oid=".duuz8s">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ffb366] mb-6"
            data-oid="sj13ch8"
          >
            Join 40,000+ SMBs Taking Control of Trade Policy
          </h2>
        </div>
        <div
          className="flex flex-col gap-6 items-center mb-6"
          data-oid=".ene8ur"
        >
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid="d80t524"
          >
            "Saved us $180,000 in Q1 by finding alternative suppliers before
            competitors caught on."{" "}
            <span className="not-italic font-semibold" data-oid="ag:-9m3">
              — Sarah M., Import Manager
            </span>
          </blockquote>
          <blockquote
            className="text-lg text-gray-200 italic border-l-4 border-[#ff6b3d] pl-4 max-w-xl"
            data-oid=".s8cgl0"
          >
            "90-day warnings let us adjust pricing properly. Retention actually
            improved during trade disputes."{" "}
            <span className="not-italic font-semibold" data-oid="96f0c3m">
              — Mike R., CEO
            </span>
          </blockquote>
        </div>
        <div
          className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mt-4"
          data-oid="q3.r.ff"
        >
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="jbdmf_p"
          >
            SOC 2 Compliant
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="xget_an"
          >
            99.9% Uptime
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="5hfgspe"
          >
            Real-time USTR Data
          </span>
          <span
            className="bg-[#18171c] rounded px-4 py-2 text-base text-gray-200 border border-[#33323a]"
            data-oid="b1ahcko"
          >
            47 States
          </span>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#18171c] mb-12"
        data-oid="m6_o95d"
      >
        <div className="max-w-4xl text-center mb-10" data-oid="f8t1ufu">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#ffb366] mb-6"
            data-oid="k:2t1hk"
          >
            Turn Uncertainty Into Your Biggest Advantage
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-10"
          data-oid=":576i5u"
        >
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="83hos2l"
          >
            <span className="text-2xl mb-2" data-oid="tx6vcrs">
              ⚡
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="b823d53">
              Lightning Decisions
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="6lt2w9c"
            >
              Calculate in minutes what takes weeks to research
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="a0x4:nu"
          >
            <span className="text-2xl mb-2" data-oid="ssbzw9j">
              💰
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="1u7d_:9">
              Protect Margins
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="qk5t4vo"
            >
              Find savings competitors miss
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="g5e.npx"
          >
            <span className="text-2xl mb-2" data-oid=".fpu2zl">
              🎯
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="eesl9jj">
              Stay Ahead
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid="nkivblm"
            >
              Early warnings while others scramble
            </p>
          </div>
          <div
            className="bg-[#23222a] rounded-lg p-6 flex flex-col shadow-lg border-t-4 border-[#ff6b3d] items-center"
            data-oid="dgs:5.b"
          >
            <span className="text-2xl mb-2" data-oid="jvq5ytf">
              📊
            </span>
            <h3 className="font-bold text-lg mb-1" data-oid="zuvlu:3">
              Professional Reports
            </h3>
            <p
              className="text-gray-400 text-base text-center"
              data-oid=":t8.nke"
            >
              Data-backed recommendations for stakeholders
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="wxsm8nw"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="iwtdz:z">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="ili7iru"
          >
            Ready to Stop Reacting and Start Anticipating?
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="a80f8dv">
            Thousands of SMBs stopped letting trade policy control their
            business. While competitors panic with each announcement, you'll be
            three steps ahead.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="hvsdti0"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="bm2sg-7"
          >
            <Link href={`/${locale}/solutions`} data-oid="sy6cnb7">
              See How Our 5 Tools Work Together
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="-.6c9eq"
          >
            <Link href={`/${locale}/signup`} data-oid="jfuz5e:">
              Start Free Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="1kxnt:8"
        >
          <span className="font-semibold text-white" data-oid="rcxb3oy">
            No credit card required.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
