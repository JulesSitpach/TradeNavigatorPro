import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid=":5aoprz"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="2b5rqs."
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="8rm8nnc"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="f40io7e"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="nnikq_r"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="3g9.ifg"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="wub7tbz">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="y8:ojj."
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="b0m.28g"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="upk1dln">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="-dvx85e"
        >
          <li data-oid="nbxzwg3">Real-time tariff rate lookup</li>
          <li data-oid="zric.1x">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="s2d.bqq">Visual before/after comparisons</li>
          <li data-oid="_n4190u">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="8-.br54">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="4bs94_4">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ksdeqnd"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="uyy3_99"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="gi8ain-">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="arbrifr"
        >
          <li data-oid="z6a-2y2">10,000+ verified supplier database</li>
          <li data-oid=".lsv.2v">Country-specific tariff analysis</li>
          <li data-oid="wdpou0h">Total cost comparison with logistics</li>
          <li data-oid="9mfxge.">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="f0lc3k.">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="am8bxlw">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="r12:osn"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="j1bmyj0"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="7hl3t_l">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="yh3w-bu"
        >
          <li data-oid="03xzj5n">3-scenario profit modeling</li>
          <li data-oid="8p:vs_y">Customer retention probability analysis</li>
          <li data-oid="1bmctfa">Pre-written communication templates</li>
          <li data-oid=".yufn.9">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="5h-:x8y">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid=".qdufy0">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="3x50l06"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="s1ha386"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="ly80.v:">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="sdjwj2f"
        >
          <li data-oid="tq:58kk">Automated policy monitoring</li>
          <li data-oid="8e1503w">Product-specific alerts</li>
          <li data-oid="-op9u3x">Historical pattern analysis</li>
          <li data-oid="c-3td.x">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="yhs1641">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="2.s4pux">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="8r3lkcv"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="99gz9kt"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="hzmsb5y">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="l_85w1m"
        >
          <li data-oid="k:4wnlv">Multi-country routing analysis</li>
          <li data-oid="jsaic2y">Trade agreement optimization</li>
          <li data-oid="co46_dz">Duty drawback identification</li>
          <li data-oid="w.klh8p">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="t-y_ams">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="2otmrvt"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="-1:j4rj"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="l880lh_">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="nix4yxf"
        >
          <li data-oid="e3_9pun">
            <b data-oid="c3uc8md">Tracker</b> alerts you first
          </li>
          <li data-oid="4.b314.">
            <b data-oid="v996612">Calculator</b> shows exact impact
          </li>
          <li data-oid="odgrjru">
            <b data-oid="fo8znvi">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="sqa2pi_">
            <b data-oid="mapy48f">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="cit2gof">
            <b data-oid="7b8557v">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="k8og:ou">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="u7sq6fk">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="2ijza8x"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="jaazfi6"
        >
          <li data-oid="wltfo_k">
            <b data-oid="hllig7e">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="tl:8n.2">
            <b data-oid="mdtxo:i">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="2g2y.kx">
            <b data-oid="ue3up7c">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="eg32bql">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="j_cnpt4"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="2y7o3e1">
          <li data-oid="gi8b99d">
            <b data-oid="v-glrqm">Q: Need to know HS codes?</b>
            <br data-oid="5.2.y1e" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="b4s34q2">
            <b data-oid="eebv7sb">Q: How current is tariff data?</b>
            <br data-oid="fk3z4ej" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="4q-4b-n">
            <b data-oid="i47z-_q">Q: ERP integration?</b>
            <br data-oid="do-79jz" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="hyg5grk">
            <b data-oid="2mzqni:">Q: Data security?</b>
            <br data-oid="8njso.q" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="5zre53y"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="0:1ro8:">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="riag::y"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="8vtg_ux">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="corohfo"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="tj4rp6b"
          >
            <Link href={`/${locale}/pricing`} data-oid="3nh2a5e">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="9j00oti"
          >
            <Link href={`/${locale}/signup`} data-oid="-4j1xw7">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="66nhssi"
        >
          <span className="font-semibold text-white" data-oid="lc5a0tk">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
