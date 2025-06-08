import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="5:nyze1"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="yrzs5an"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="3mnxwb7"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="_tkrw7z"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="in32uo2"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="vn9gp0l"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="5zyk5e.">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="0-sgihp"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="pkmeajm"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="etmy6tp">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="6bz7vly"
        >
          <li data-oid="fc44dsg">Real-time tariff rate lookup</li>
          <li data-oid="q8x_3pg">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="p6:_j9t">Visual before/after comparisons</li>
          <li data-oid="z215kxp">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid=":w26i6c">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="614hdgw">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="r8u::-x"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="lch:i:f"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="_h9496n">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="800vs3g"
        >
          <li data-oid="b:4zuqe">10,000+ verified supplier database</li>
          <li data-oid="hqwqev6">Country-specific tariff analysis</li>
          <li data-oid="r75m7bi">Total cost comparison with logistics</li>
          <li data-oid="0du4ltd">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="lzmvwri">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="ij6h7-5">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ugsk:i9"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="iw3no1y"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="hc_xmei">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="e-hodgj"
        >
          <li data-oid="n5ts4z_">3-scenario profit modeling</li>
          <li data-oid="7ec-h8s">Customer retention probability analysis</li>
          <li data-oid="kqza-x6">Pre-written communication templates</li>
          <li data-oid="7u-fji3">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="ont.n2u">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="49meete">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="jgmf9le"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="fxxqm-q"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="vsih.mp">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="unm_x_k"
        >
          <li data-oid="z.0ob_j">Automated policy monitoring</li>
          <li data-oid="o.4itca">Product-specific alerts</li>
          <li data-oid="fs-6lqw">Historical pattern analysis</li>
          <li data-oid="9dl8.ul">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid=":sg9t-l">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="d6g9zwx">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="7vmnccv"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="hnwh94f"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="lirbglc">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="l8:paye"
        >
          <li data-oid="xaoezs-">Multi-country routing analysis</li>
          <li data-oid="vjv7a..">Trade agreement optimization</li>
          <li data-oid="6w1ob-5">Duty drawback identification</li>
          <li data-oid="779yr9n">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="ctk:x:i">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid=":k49q2m"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="g4vh9ve"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="di7oqgn">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="ahngewn"
        >
          <li data-oid="4_o1b9p">
            <b data-oid="7mgejzy">Tracker</b> alerts you first
          </li>
          <li data-oid="9tm340t">
            <b data-oid="c3udong">Calculator</b> shows exact impact
          </li>
          <li data-oid="6q1v38j">
            <b data-oid="irlhsj0">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="g7pfkk0">
            <b data-oid="bjl56--">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="1xd-wa3">
            <b data-oid="5gmmz8u">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="v830ja5">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="umbfgvl">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="s_a66bi"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="2nkig3l"
        >
          <li data-oid="3n5iq3w">
            <b data-oid="d1vgu_-">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="qsj.x-j">
            <b data-oid="uvu1kce">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="_ucc3bc">
            <b data-oid="xs3.gtd">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="b9vxzdu">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="c-4jkdb"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="2vxnf:_">
          <li data-oid="gj9th.1">
            <b data-oid="j5xfrha">Q: Need to know HS codes?</b>
            <br data-oid="jg9rwuk" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="o:i..cw">
            <b data-oid="5rizcyr">Q: How current is tariff data?</b>
            <br data-oid=":8huof." />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid=".5egjzu">
            <b data-oid="bbvlhdd">Q: ERP integration?</b>
            <br data-oid="t74m3e6" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="u:kvx28">
            <b data-oid="5d2o28w">Q: Data security?</b>
            <br data-oid="-gdwa2z" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="28gm_.i"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="75wbm6:">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="pdn2f8p"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid=":bwbwm7">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="fad62.r"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="hpjpy2."
          >
            <Link href={`/${locale}/pricing`} data-oid="scp_hi6">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="f6g.n1."
          >
            <Link href={`/${locale}/signup`} data-oid="a.jyhkj">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="9gjtxuk"
        >
          <span className="font-semibold text-white" data-oid="06xv9k5">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
