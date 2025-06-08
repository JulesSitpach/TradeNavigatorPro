import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="x93isnv"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="kd2.mcm"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="xkz1zwr"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="gffp5i8"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="7e5i-g5"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="l:ql.46"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="gdwcn87">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="fi2js99"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="rvmkt9r"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="zvbchvd">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="n3lxgzf"
        >
          <li data-oid="ojxbzfq">Real-time tariff rate lookup</li>
          <li data-oid="5c3sbqv">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="atkkj9c">Visual before/after comparisons</li>
          <li data-oid="bcmdqe_">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="owqz9zv">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="zfr64kc">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="8mf44qg"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="_lu:ip5"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="mn69_yv">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="-sk0z09"
        >
          <li data-oid="od6n_k_">10,000+ verified supplier database</li>
          <li data-oid="wealpl-">Country-specific tariff analysis</li>
          <li data-oid="s:.x_5w">Total cost comparison with logistics</li>
          <li data-oid="c5bqhwb">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="oimt8m1">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="4hjmo.t">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="4iv95om"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="ze_0yzz"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid=".1rwops">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="xa1j1w6"
        >
          <li data-oid="fcugtec">3-scenario profit modeling</li>
          <li data-oid="fg:diig">Customer retention probability analysis</li>
          <li data-oid="7.3.kn4">Pre-written communication templates</li>
          <li data-oid="7x4koba">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="87n.:sb">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="qsugw3n">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="u4slf8p"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="kv12vyf"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="uaz.8hz">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="9t8ve0b"
        >
          <li data-oid="ej.2496">Automated policy monitoring</li>
          <li data-oid="yg-hi30">Product-specific alerts</li>
          <li data-oid="asrvkce">Historical pattern analysis</li>
          <li data-oid="nndz0qv">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="eyp-d:1">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="_8y5tli">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="1ehyeg0"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="e9djypl"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="c5ozz_v">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="ee6yxxx"
        >
          <li data-oid="x_dsgvs">Multi-country routing analysis</li>
          <li data-oid="9bqggvv">Trade agreement optimization</li>
          <li data-oid="fik.g6j">Duty drawback identification</li>
          <li data-oid="9a_5_81">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="njbj924">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="5cumnr:"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="ix-.ey7"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="27t42w:">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="wroffov"
        >
          <li data-oid="klc.9u3">
            <b data-oid="vnj544r">Tracker</b> alerts you first
          </li>
          <li data-oid="t8.o8f0">
            <b data-oid="jitdhpz">Calculator</b> shows exact impact
          </li>
          <li data-oid="iod8joi">
            <b data-oid=".cjno3a">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="-r7adh:">
            <b data-oid="p2akp0u">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid=".h074-b">
            <b data-oid="r5d4gx9">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="vug7ca8">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="r-6hh5-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="sic:n57"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="ajkgcjd"
        >
          <li data-oid="46_vcel">
            <b data-oid="pbrqg22">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="exvwzbm">
            <b data-oid="sbuwc_.">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="0jqfqfr">
            <b data-oid=":6w.jn.">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="lzqfoim">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="3radkg2"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="b8ji3hf">
          <li data-oid="18thhw1">
            <b data-oid="a5xrnfw">Q: Need to know HS codes?</b>
            <br data-oid="3k-0k7a" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="jao6mt2">
            <b data-oid="8al_tks">Q: How current is tariff data?</b>
            <br data-oid="c04fhbe" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="3r.siiq">
            <b data-oid="ey2dcsd">Q: ERP integration?</b>
            <br data-oid="odx8zun" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="n7ko50q">
            <b data-oid="g5e99vm">Q: Data security?</b>
            <br data-oid="53.bb4n" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="o1hvr4."
      >
        <div className="max-w-2xl text-center mb-8" data-oid="xwk3h:p">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="wc-g:o."
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="b7t.8b:">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="6821336"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="xb5o-qg"
          >
            <Link href={`/${locale}/pricing`} data-oid="w0.48i9">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="ry4olwx"
          >
            <Link href={`/${locale}/signup`} data-oid="3oay9tx">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="qqewm7x"
        >
          <span className="font-semibold text-white" data-oid="7.sbyl8">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
