import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="yrgpspy"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="aop39gu"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="yzdkqhg"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="he1q8ui"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid=".au0nyu"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="t_xnzou"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="vg4ihxq">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="wf77qjk"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid=".ev3rnd"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="9mu1mja">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="g_breaa"
        >
          <li data-oid="-.4lzq8">Real-time tariff rate lookup</li>
          <li data-oid="snluqnq">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="v_asee_">Visual before/after comparisons</li>
          <li data-oid="lx9b5x0">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid=".c4md-3">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="egcbyxo">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="k.3oz6_"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="gvilf74"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="lwcw-fs">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="-:g2.1d"
        >
          <li data-oid="5wf8iit">10,000+ verified supplier database</li>
          <li data-oid="24x:x7e">Country-specific tariff analysis</li>
          <li data-oid="p9b36ky">Total cost comparison with logistics</li>
          <li data-oid="qtf5xwq">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="nk3ex58">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="97_twvh">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ddfz9oo"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="m09dpsm"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="5einut8">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="pty3n6j"
        >
          <li data-oid="uka5us4">3-scenario profit modeling</li>
          <li data-oid="fccm-et">Customer retention probability analysis</li>
          <li data-oid="b_gtinc">Pre-written communication templates</li>
          <li data-oid="ckh5ki5">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid=".wx78xf">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="3p.omdp">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="b:__e26"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid=":9nkkh4"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="9xv99wz">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="-z2ljyy"
        >
          <li data-oid="-ldo8yp">Automated policy monitoring</li>
          <li data-oid="cg2w9h6">Product-specific alerts</li>
          <li data-oid="m7.v8mg">Historical pattern analysis</li>
          <li data-oid="0689bkj">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="17:rdyd">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="5.:_321">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="0cfje-1"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="olwzg5w"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="sn0pbar">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="-4xi2fp"
        >
          <li data-oid="g9-6wi9">Multi-country routing analysis</li>
          <li data-oid="_r97z1q">Trade agreement optimization</li>
          <li data-oid="6vysxhm">Duty drawback identification</li>
          <li data-oid="tkiyx4c">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="rx838:1">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="hup-jc8"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="jcwro5w"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="xplrmt3">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="ify-p70"
        >
          <li data-oid="sqrdxiq">
            <b data-oid="g.d:.mu">Tracker</b> alerts you first
          </li>
          <li data-oid="m4pr0b5">
            <b data-oid="y_:kubc">Calculator</b> shows exact impact
          </li>
          <li data-oid="fwbgh3-">
            <b data-oid="98axbcr">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="iiu0vw6">
            <b data-oid="f53j_cq">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="djmm.wp">
            <b data-oid="9jzti33">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="mvx1eir">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="dxtrw_a">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="340uotj"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="pew:3zx"
        >
          <li data-oid="og5.:tr">
            <b data-oid="oo6iuq_">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="54e9r0r">
            <b data-oid="z18m7ab">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="q:f7a4n">
            <b data-oid="s67vci9">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="38c5zi0">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="0b226ay"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="88zom2l">
          <li data-oid="slfge:e">
            <b data-oid="flkyo3p">Q: Need to know HS codes?</b>
            <br data-oid="878ejhz" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="137mqvz">
            <b data-oid="7saf5n4">Q: How current is tariff data?</b>
            <br data-oid="hb4x7--" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="trdrvvv">
            <b data-oid="o_oechl">Q: ERP integration?</b>
            <br data-oid="pnqtzcw" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid=":04zqcq">
            <b data-oid="o1o:2t0">Q: Data security?</b>
            <br data-oid="-d39p9p" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="p65zgyz"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="1erzc5w">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="4rqby:u"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="sg.av4m">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="at6owgt"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="p2ff44l"
          >
            <Link href={`/${locale}/pricing`} data-oid="_db723g">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="ispmtl0"
          >
            <Link href={`/${locale}/signup`} data-oid="vcgy78k">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="t3j62nk"
        >
          <span className="font-semibold text-white" data-oid="mrm6ory">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
