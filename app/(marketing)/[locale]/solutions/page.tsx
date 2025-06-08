import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="k_z1v.w"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="h-kdurd"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="rk220zl"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="qnthj46"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="hzhxl:5"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="8v9bj4o"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="vriwd84">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="pesp77g"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="gtxyf.:"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="04z1why">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="ameqr_s"
        >
          <li data-oid="uvh2.tx">Real-time tariff rate lookup</li>
          <li data-oid="vk_yl5c">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="w7kfr2v">Visual before/after comparisons</li>
          <li data-oid="mcj23xd">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="ueg.9d3">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="gjvnr9:">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="o4urz.d"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="5dp.ho2"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="hrukoyq">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="_6dy4jv"
        >
          <li data-oid="bxsmr0k">10,000+ verified supplier database</li>
          <li data-oid="3:p5olp">Country-specific tariff analysis</li>
          <li data-oid="gl2if7g">Total cost comparison with logistics</li>
          <li data-oid="80j-g2l">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="z-te7cq">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="izgh1-s">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="qk.jnd1"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="q79qhdi"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="rxovpw.">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="94cwmed"
        >
          <li data-oid="d4u7r7c">3-scenario profit modeling</li>
          <li data-oid="pu.4a48">Customer retention probability analysis</li>
          <li data-oid="mow-.-1">Pre-written communication templates</li>
          <li data-oid="7.1z6sh">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="42ix:0q">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="y83hb_-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="b.qqt_f"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="0i33e7x"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="ls0o3ra">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="ls1ucbv"
        >
          <li data-oid="8k8zoox">Automated policy monitoring</li>
          <li data-oid="67rf7mx">Product-specific alerts</li>
          <li data-oid="z3jea1:">Historical pattern analysis</li>
          <li data-oid="np1rm:i">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="wpfhg2j">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="2wn303-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="0rqnyl5"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="59kec-r"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="79n1vwe">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="aca7-v9"
        >
          <li data-oid="z1fmxu.">Multi-country routing analysis</li>
          <li data-oid="v-g4isy">Trade agreement optimization</li>
          <li data-oid="xe2bzia">Duty drawback identification</li>
          <li data-oid="h1uh-k6">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="m1sjhkx">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="sjxwdt6"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="uz9q9-m"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="d2dnvrw">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="giz88_3"
        >
          <li data-oid="19t0033">
            <b data-oid="laz37li">Tracker</b> alerts you first
          </li>
          <li data-oid=".8yb9.u">
            <b data-oid="vujt6fa">Calculator</b> shows exact impact
          </li>
          <li data-oid="oeri506">
            <b data-oid="2i-ur7u">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="y8bllpa">
            <b data-oid="0zisv1c">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="uhcuvlj">
            <b data-oid="r0s9k_j">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="p2r9_xb">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid=".oarnqp">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="kekgy7q"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="::xama."
        >
          <li data-oid="hv2e7ub">
            <b data-oid="oo:es2s">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="7ogvs5b">
            <b data-oid="buaw9_b">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="2a7:tin">
            <b data-oid="kasdf4.">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid=".io5b2t">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="k:ri:m1"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="unni0-n">
          <li data-oid="e5n7qdp">
            <b data-oid="t44yi6f">Q: Need to know HS codes?</b>
            <br data-oid="460dya2" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="r6xdjn8">
            <b data-oid="npe_g38">Q: How current is tariff data?</b>
            <br data-oid="gdyf2wi" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="5okl5y_">
            <b data-oid="hhb_erw">Q: ERP integration?</b>
            <br data-oid="1ucw9gl" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="14-gs.7">
            <b data-oid="6fj-shq">Q: Data security?</b>
            <br data-oid="jozn.zx" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="zbxfpwh"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="vb8dze-">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="y6d0u0o"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="7-pxtu-">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="gl0ir9v"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="klyfdmo"
          >
            <Link href={`/${locale}/pricing`} data-oid="mxyi8hx">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="lb-.nij"
          >
            <Link href={`/${locale}/signup`} data-oid="ejg_c.1">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="lynxtts"
        >
          <span className="font-semibold text-white" data-oid="koen7jz">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
