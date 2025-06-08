import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="mxxck54"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="fpjng45"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="27fzwxt"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="-6mtnph"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="gxn4bxm"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="y9sjo0d"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="vs8ge1h">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="fyarqjw"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="9-7czrc"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="8.pjgcb">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="saxn40c"
        >
          <li data-oid="7sn2na7">Real-time tariff rate lookup</li>
          <li data-oid="iz8kwab">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="nu:9f6b">Visual before/after comparisons</li>
          <li data-oid="47zk8ps">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="y4tkkw7">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="m68_vxx">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="lp43kyt"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="-x4zi1r"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="jj8gn1k">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="m59_.:s"
        >
          <li data-oid="qd1dx:v">10,000+ verified supplier database</li>
          <li data-oid="-vzaj86">Country-specific tariff analysis</li>
          <li data-oid="dewy--u">Total cost comparison with logistics</li>
          <li data-oid="fh6-wa.">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="ebuhvix">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="-b:yxe8">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="5sn2uuh"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="7_1yt.2"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="dg2xlaq">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="amyv:o3"
        >
          <li data-oid=".j1w1gr">3-scenario profit modeling</li>
          <li data-oid="50_xx6:">Customer retention probability analysis</li>
          <li data-oid="9w67h6r">Pre-written communication templates</li>
          <li data-oid="wi2p4kf">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="22icz.w">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="z48sd59">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="1wu8sa0"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="lc3syr6"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="z.udvr4">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="w7dq0zj"
        >
          <li data-oid="8krn.p5">Automated policy monitoring</li>
          <li data-oid="ok097bx">Product-specific alerts</li>
          <li data-oid="u0ywko0">Historical pattern analysis</li>
          <li data-oid=".i_rv0y">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="ph4riz2">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="3meu8-3">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ucj.3x4"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="ycm0jkd"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="7z71h9b">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="7uor--:"
        >
          <li data-oid="0_:rt29">Multi-country routing analysis</li>
          <li data-oid="o:h5tn4">Trade agreement optimization</li>
          <li data-oid="yu_kx.6">Duty drawback identification</li>
          <li data-oid="nr5sm-o">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="dtve:2g">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="px3:soh"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="p-9_trx"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid=":_zoc0k">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid=".m1_sb7"
        >
          <li data-oid="__lizae">
            <b data-oid="cgya2fp">Tracker</b> alerts you first
          </li>
          <li data-oid="mrmn:-t">
            <b data-oid="pfva9:h">Calculator</b> shows exact impact
          </li>
          <li data-oid="ydx5b.t">
            <b data-oid="ersgt3r">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="f6sq85a">
            <b data-oid="380lgnc">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="pr06s8y">
            <b data-oid="h3wnv.a">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="8a4q.z:">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="0-u6g41">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="nd.e7i-"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="wwwryhn"
        >
          <li data-oid="c__-5b_">
            <b data-oid="2e7bupq">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="c72hbxt">
            <b data-oid="pi2h6g6">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="6hyns2.">
            <b data-oid="cmih9wl">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="gacckc1">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="5m-x34e"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="9_e3izw">
          <li data-oid="924gj.:">
            <b data-oid=".ad.0b2">Q: Need to know HS codes?</b>
            <br data-oid="w-_aejc" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="hzj_34c">
            <b data-oid="-ib:feq">Q: How current is tariff data?</b>
            <br data-oid="jqnoy8y" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="6hcyu42">
            <b data-oid="rnrul3y">Q: ERP integration?</b>
            <br data-oid="8tmyxv6" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid=".nk17ug">
            <b data-oid=".2k2civ">Q: Data security?</b>
            <br data-oid="ab59yz4" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="3p8hsnc"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="hc84dob">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="cvn.2p9"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="1v1n4tb">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="a8u:q7r"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="-12d14b"
          >
            <Link href={`/${locale}/pricing`} data-oid="ozk6w.4">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="p82m25k"
          >
            <Link href={`/${locale}/signup`} data-oid="f6kpd9e">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="op3asjh"
        >
          <span className="font-semibold text-white" data-oid="-g5c.g_">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
