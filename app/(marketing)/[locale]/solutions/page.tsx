import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="oo0bzlo"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="iir_8.-"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="o5tv-ri"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="xbcoa4f"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="rjhegdb"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="wv.r9hl"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="g3ai_.t">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="k_r9qk6"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="k-7zf5d"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="y1nh3or">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="je:o-w7"
        >
          <li data-oid="yck3l:-">Real-time tariff rate lookup</li>
          <li data-oid="b5iokv9">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="03fo1pm">Visual before/after comparisons</li>
          <li data-oid="dc62fd0">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="c0l48ko">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="t9dn82o">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="kv2kxwu"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="_yn0.qh"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="poid.rs">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="9n1:m3u"
        >
          <li data-oid="1fdgpv0">10,000+ verified supplier database</li>
          <li data-oid="68c7l-w">Country-specific tariff analysis</li>
          <li data-oid="o_95fh3">Total cost comparison with logistics</li>
          <li data-oid=":_higud">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="9n-_:ov">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="-:y3-.x">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ck2em7v"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="9s:u9af"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="tir7dd2">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="r:r9mwh"
        >
          <li data-oid="ukptlhd">3-scenario profit modeling</li>
          <li data-oid=":xwmzfu">Customer retention probability analysis</li>
          <li data-oid="w8mgk5i">Pre-written communication templates</li>
          <li data-oid="fjdsmf.">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="vu-10n8">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="ojgdq7.">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="d1peazy"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="stiptzd"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="ba_hi0s">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="6-2tyb8"
        >
          <li data-oid="gltir1.">Automated policy monitoring</li>
          <li data-oid="qq0gsg2">Product-specific alerts</li>
          <li data-oid="l57f34_">Historical pattern analysis</li>
          <li data-oid="nwy6ex5">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="0rlotmy">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="o70tgdl">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="_cmdrp0"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="y-_ox5r"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="ew0n69h">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="9738me_"
        >
          <li data-oid="u9vmhm:">Multi-country routing analysis</li>
          <li data-oid="6jcj52n">Trade agreement optimization</li>
          <li data-oid="hcefq_i">Duty drawback identification</li>
          <li data-oid="ta-jm58">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="7t6.:q5">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="-tdt4_5"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="nuufehc"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="daf5rn-">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="lethh0f"
        >
          <li data-oid="8q3i6ax">
            <b data-oid="3t8xgb-">Tracker</b> alerts you first
          </li>
          <li data-oid="131p_-p">
            <b data-oid="rnn33z4">Calculator</b> shows exact impact
          </li>
          <li data-oid="zwi6qa0">
            <b data-oid="w22ofao">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="gvohhv5">
            <b data-oid="58acucm">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="vg5j.9t">
            <b data-oid="i5zkeiu">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="0xgj-bq">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid=".gg27ki">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="a:du7hc"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="imaodwf"
        >
          <li data-oid="5fgnrxg">
            <b data-oid="cql3yux">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="vcasre0">
            <b data-oid="feys6ys">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="ge2_jdt">
            <b data-oid="b9xlkok">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="7j5yp17">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid=":v6yzj_"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="llebtow">
          <li data-oid=":ghqhyj">
            <b data-oid="o0lv._w">Q: Need to know HS codes?</b>
            <br data-oid="amfr:yy" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="3e5:z3:">
            <b data-oid="xl7psmj">Q: How current is tariff data?</b>
            <br data-oid="9e2a.gn" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="lcl8p6j">
            <b data-oid="qftxmue">Q: ERP integration?</b>
            <br data-oid="4l5ow:o" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="yhfcc09">
            <b data-oid="gtyrqfv">Q: Data security?</b>
            <br data-oid="83ajblv" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="aosiwst"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="68l9h7k">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="4lg1dsd"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="jjfqt9c">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="fub2fqx"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="tl0:cl7"
          >
            <Link href={`/${locale}/pricing`} data-oid="gz8pnp0">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="0jmbhfp"
          >
            <Link href={`/${locale}/signup`} data-oid="tny-y9.">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="r2su:ht"
        >
          <span className="font-semibold text-white" data-oid="db_-1fy">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
