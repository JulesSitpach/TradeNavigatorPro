import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="0hpagk3"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="lvtd.95"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="o5fisrj"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="_-onjkv"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid=":dy308z"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="ry75jtu"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="o6a3gxx">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="m0h9ot."
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="f25gomv"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="u-4igfj">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="8wr50pe"
        >
          <li data-oid="xr8kidi">Real-time tariff rate lookup</li>
          <li data-oid="cc7cmaa">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="-thpiv0">Visual before/after comparisons</li>
          <li data-oid="pnmwali">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="kqugdeb">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="erxt8a-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="_su.r2z"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="4kx:d6m"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="g4a69_j">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="1rlmbjb"
        >
          <li data-oid="5ffvh92">10,000+ verified supplier database</li>
          <li data-oid=".-gtbys">Country-specific tariff analysis</li>
          <li data-oid="7y61svg">Total cost comparison with logistics</li>
          <li data-oid="5eu4k54">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="cc8_p_x">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="5fm4igi">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="lo:ju5o"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="1wn71uo"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="oed1cx3">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="4wojk-."
        >
          <li data-oid="rn-axja">3-scenario profit modeling</li>
          <li data-oid="d_sy627">Customer retention probability analysis</li>
          <li data-oid="u4d2.05">Pre-written communication templates</li>
          <li data-oid="6rxbi8_">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="y7i46e0">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="0el8.nn">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="j:.szcw"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="lbfeqq4"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="qow:6gy">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="79bc01t"
        >
          <li data-oid="w0upquv">Automated policy monitoring</li>
          <li data-oid="iwj6b9c">Product-specific alerts</li>
          <li data-oid="itxdgjc">Historical pattern analysis</li>
          <li data-oid="1ia4qp4">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="qwqv6s-">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="i55cv03">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid=".wa-4qi"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="k32055g"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="2_v5who">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="y_cp3o2"
        >
          <li data-oid="ra8q7n:">Multi-country routing analysis</li>
          <li data-oid="-6g:qo6">Trade agreement optimization</li>
          <li data-oid="ri.6m2s">Duty drawback identification</li>
          <li data-oid="qx9kfn8">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="v:rn5d-">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="ntpxpyl"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="3kcys3t"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="eimf9d0">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="sx2fky5"
        >
          <li data-oid="wtrd.hk">
            <b data-oid="mpxid7r">Tracker</b> alerts you first
          </li>
          <li data-oid="m.7dl6p">
            <b data-oid="kol2i_y">Calculator</b> shows exact impact
          </li>
          <li data-oid="0rskyzv">
            <b data-oid="_61wvfs">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="hdqxoh_">
            <b data-oid="e6931xh">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="bg2jcuo">
            <b data-oid="nhje1al">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="c70adqn">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="oolmoh0">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="i7mqtmh"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="fzq87q3"
        >
          <li data-oid="y7ppf1c">
            <b data-oid="jene6z-">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="z3ed_s:">
            <b data-oid="l_wa8-_">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="3r4o64s">
            <b data-oid="q5-ock9">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="4t6ttwu">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="7b-mn1z"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="cjj1k8x">
          <li data-oid="qjtjp9r">
            <b data-oid="m-mu8ey">Q: Need to know HS codes?</b>
            <br data-oid="05wq58g" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="-uy754c">
            <b data-oid="6est50f">Q: How current is tariff data?</b>
            <br data-oid="jl0jqft" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="vn_0ys0">
            <b data-oid="irilxrx">Q: ERP integration?</b>
            <br data-oid="2cxttfm" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="_wxckqc">
            <b data-oid=":2.je8k">Q: Data security?</b>
            <br data-oid="7kwrwz5" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="vy1miew"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="cucfn5q">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="-pg3tt."
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid=".-b4zab">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="v_4tsg5"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="rreefr8"
          >
            <Link href={`/${locale}/pricing`} data-oid="vmumapy">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="eeri2i2"
          >
            <Link href={`/${locale}/signup`} data-oid="8v1l-p3">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="3ti3fsd"
        >
          <span className="font-semibold text-white" data-oid="rlkws3v">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
