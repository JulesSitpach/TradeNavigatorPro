import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="8e_8atx"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="b2c.61_"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="az1g8yp"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="jq5gv-s"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="fupvy_b"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="j-qbcjl"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="7_h78zi">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="eprqi0w"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="sq.p8v:"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="evhbd4p">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="nm8gz:r"
        >
          <li data-oid="wodyjlc">Real-time tariff rate lookup</li>
          <li data-oid="if.lp1v">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="y26964m">Visual before/after comparisons</li>
          <li data-oid="9y9c_kf">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="_7-4yw9">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="5:abjs3">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="ujb-xv1"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="keq8181"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="7eemv.n">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="tkuqbz."
        >
          <li data-oid="kzz-w3z">10,000+ verified supplier database</li>
          <li data-oid="ul8m9o.">Country-specific tariff analysis</li>
          <li data-oid="3-hx01l">Total cost comparison with logistics</li>
          <li data-oid="3qbrvbq">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="5vt9dl6">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="t4vio6-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="8wa64-2"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="9avpkyx"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="91-7ppx">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="n0j6j6u"
        >
          <li data-oid=".pqbp83">3-scenario profit modeling</li>
          <li data-oid="nmvg4os">Customer retention probability analysis</li>
          <li data-oid="rj29.d3">Pre-written communication templates</li>
          <li data-oid="fj0_36d">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="17_ajsp">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="tso_ydz">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="l4w:5yu"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="7rd912q"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="8ne9:7p">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="fd0x2ni"
        >
          <li data-oid="aihxr.a">Automated policy monitoring</li>
          <li data-oid="kmp9mhc">Product-specific alerts</li>
          <li data-oid="4n7i8m2">Historical pattern analysis</li>
          <li data-oid="imgbto2">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="-qjmogz">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="jkoqvwo">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="0lbs05h"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="hn.-1eb"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="qu9vzih">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="gqmmctm"
        >
          <li data-oid="gwnzz-f">Multi-country routing analysis</li>
          <li data-oid="._6ki24">Trade agreement optimization</li>
          <li data-oid="seqtpl.">Duty drawback identification</li>
          <li data-oid="br.5w1b">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="9texnsh">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="7ize0_o"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="0d2xgcq"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="j2nz8o5">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="7fnqr:y"
        >
          <li data-oid="f59num8">
            <b data-oid="a8g4l0m">Tracker</b> alerts you first
          </li>
          <li data-oid="mufe-_8">
            <b data-oid="sv778.7">Calculator</b> shows exact impact
          </li>
          <li data-oid="ns56xps">
            <b data-oid="s3-.m3w">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="88r.30_">
            <b data-oid="atyd:o7">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid=":8k.3wk">
            <b data-oid="i0nutuw">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="ft25-qt">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="hslbt9m">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="iu7ux3t"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid=".ftzr_-"
        >
          <li data-oid="qhd0om.">
            <b data-oid="qfo7q-7">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="8:kctpy">
            <b data-oid="4udcr8w">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="8pq_ihx">
            <b data-oid="8rhc26:">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid=":5-afg1">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="kyv7yoz"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="1rwpntm">
          <li data-oid="y94u.za">
            <b data-oid=":p7l.74">Q: Need to know HS codes?</b>
            <br data-oid="uco6djc" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="ujebyck">
            <b data-oid="gdeo4o2">Q: How current is tariff data?</b>
            <br data-oid="gsm_kld" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid="bntktor">
            <b data-oid="q.v8xq6">Q: ERP integration?</b>
            <br data-oid="lekklus" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="w6.o000">
            <b data-oid="jx-7x46">Q: Data security?</b>
            <br data-oid="b3aq4de" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="n5-ai_g"
      >
        <div className="max-w-2xl text-center mb-8" data-oid="fg3f.4i">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="jz9nt4l"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="3lisq75">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="4lb1-8n"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="vhdkids"
          >
            <Link href={`/${locale}/pricing`} data-oid="o5y5jdm">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="1fv1jg:"
          >
            <Link href={`/${locale}/signup`} data-oid="qm7yfqs">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="-ab9no0"
        >
          <span className="font-semibold text-white" data-oid="nwhunj8">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
