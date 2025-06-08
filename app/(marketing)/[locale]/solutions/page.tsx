import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="s_m.w5l"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="jpbhufn"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid=".q9n6_t"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="4nfqliw"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="2x0.1uh"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="kqaw06a"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="a8ag:wb">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid=".62:rr8"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="i9tdab6"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="miyo4un">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="t1c3:ag"
        >
          <li data-oid="hgm7ktv">Real-time tariff rate lookup</li>
          <li data-oid="1l3c-ey">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="do2q0_g">Visual before/after comparisons</li>
          <li data-oid="0fqaj:z">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="559odr0">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="ewce8s:">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="9wso642"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="1_2twcy"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="q1yso6w">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="uy5o.gr"
        >
          <li data-oid=":v7nsnm">10,000+ verified supplier database</li>
          <li data-oid="edogrx2">Country-specific tariff analysis</li>
          <li data-oid="vui-no9">Total cost comparison with logistics</li>
          <li data-oid="u7w-4v-">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="xvg5k71">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="uhv2bph">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="j379nc0"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="6-c8yi_"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="ysf6-0f">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="q95rp5l"
        >
          <li data-oid="9awr8k.">3-scenario profit modeling</li>
          <li data-oid="8o609d5">Customer retention probability analysis</li>
          <li data-oid="4j8qorx">Pre-written communication templates</li>
          <li data-oid=":70k-go">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="y9j4.:-">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="et2n61e">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="otqtzg0"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="pcxd07f"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="kkrd6zu">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid=":tnpomd"
        >
          <li data-oid="m9yheax">Automated policy monitoring</li>
          <li data-oid=":mv.oyj">Product-specific alerts</li>
          <li data-oid="_v.q5ub">Historical pattern analysis</li>
          <li data-oid="9jxhg-z">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="uay6hqz">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="khtpcj0">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="9_q00tq"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="ivi7vft"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="hjw.xy:">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="17fdbva"
        >
          <li data-oid="4aqtusa">Multi-country routing analysis</li>
          <li data-oid="dus1db9">Trade agreement optimization</li>
          <li data-oid="qdjnn8v">Duty drawback identification</li>
          <li data-oid="uzi1i-i">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="gywra1-">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="5-d.1gw"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="_dm9qmv"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="w.wq498">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="okw3a92"
        >
          <li data-oid="3s9g84e">
            <b data-oid="enr9_io">Tracker</b> alerts you first
          </li>
          <li data-oid="y3an9ub">
            <b data-oid="r3evzs5">Calculator</b> shows exact impact
          </li>
          <li data-oid="rtp70kl">
            <b data-oid="wy7s4.i">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="lew5-0p">
            <b data-oid="q6tjt3r">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="e.f7o57">
            <b data-oid="8musjvx">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="9clqhi-">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="5th55x_">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="92:v5-4"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="cgqxdhg"
        >
          <li data-oid="e3.q7dd">
            <b data-oid=":-sorkl">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="o86wf67">
            <b data-oid="4d63r.w">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="txx64tz">
            <b data-oid="xk1is.x">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="ywr-.lj">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="h:nopbp"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="x1op3-5">
          <li data-oid="8sdedj5">
            <b data-oid="50o5wzm">Q: Need to know HS codes?</b>
            <br data-oid="odmsihq" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="0z38wuh">
            <b data-oid="cy:65am">Q: How current is tariff data?</b>
            <br data-oid="eak6lqq" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="uml2f4p">
            <b data-oid="j3c74hq">Q: ERP integration?</b>
            <br data-oid="1n-rio_" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="_6.j:3h">
            <b data-oid="1ca9rjv">Q: Data security?</b>
            <br data-oid="ual1bog" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="tmn5w2i"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="gd_k2kt">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="ytazp8b"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="oxdwv5d">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="altnl52"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="2yjiwd1"
          >
            <Link href={`/${locale}/pricing`} data-oid="8qe92bm">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="yac-0lk"
          >
            <Link href={`/${locale}/signup`} data-oid="e698h-7">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="fs6l2.9"
        >
          <span className="font-semibold text-white" data-oid="ao5.l4b">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
