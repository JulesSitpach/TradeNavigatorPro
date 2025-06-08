import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div
      className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4"
      data-oid="t-.3ryx"
    >
      {/* Page Hero */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12"
        data-oid="2vbv31f"
      >
        <div
          className="flex flex-col items-center gap-4 max-w-2xl text-center"
          data-oid="udmpdvr"
        >
          <Icons.logo
            className="h-14 w-14 text-[#ff6b3d] mb-2"
            data-oid="g.__9te"
          />

          <h1
            className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2"
            data-oid="f6b:9_a"
          >
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p
            className="text-xl text-white font-semibold mb-6"
            data-oid="i_mcqu6"
          >
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12" data-oid="elaau_6">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="z.wc3s8"
        >
          Emergency Cost Calculator
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="dj-vv78"
        >
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2" data-oid="v8vcnb:">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="hsvd2al"
        >
          <li data-oid="1jopyis">Real-time tariff rate lookup</li>
          <li data-oid=".kseb8u">
            AI product classification (no HS codes needed)
          </li>
          <li data-oid="::dwai5">Visual before/after comparisons</li>
          <li data-oid="frnmyuv">Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400" data-oid="._rgmvm">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12" data-oid="5tgpo.7">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="8izvkf-"
        >
          Supply Chain Pivot Planner
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid=":agv-gc"
        >
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2" data-oid="lti36y9">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid=":w5vmo4"
        >
          <li data-oid="rshc-sf">10,000+ verified supplier database</li>
          <li data-oid="523:wgt">Country-specific tariff analysis</li>
          <li data-oid="qujsr2b">Total cost comparison with logistics</li>
          <li data-oid="t324.pe">Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400" data-oid="s251u97">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12" data-oid="q9x-.ht">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="zlrsx5w"
        >
          Pricing Strategy Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="8_cpo5w"
        >
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2" data-oid="no.x7_y">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="r4o1u4b"
        >
          <li data-oid="wb-_-0e">3-scenario profit modeling</li>
          <li data-oid="ngdxybp">Customer retention probability analysis</li>
          <li data-oid="7qg-7ez">Pre-written communication templates</li>
          <li data-oid="vtzqx7:">Break-even analysis</li>
        </ul>
        <p className="italic text-green-400" data-oid="cc8lx93">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12" data-oid="d0efd6j">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="wyhsmec"
        >
          Tariff Timeline Tracker
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="yk0xei3"
        >
          "I never know what's coming next"
        </p>
        <p className="mb-2" data-oid="fmb-j_c">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="k0npp2q"
        >
          <li data-oid="83knyd-">Automated policy monitoring</li>
          <li data-oid="y::953a">Product-specific alerts</li>
          <li data-oid="otgl-mo">Historical pattern analysis</li>
          <li data-oid="s64b_lu">Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400" data-oid="m5t2_ft">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12" data-oid="slzkmr-">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-2"
          data-oid="hf8gahm"
        >
          Trade Route Optimizer
        </h2>
        <p
          className="text-lg font-semibold text-[#ff6b3d] mb-1"
          data-oid="k3y15_s"
        >
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2" data-oid="pdpjuwy">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul
          className="list-disc list-inside text-gray-300 mb-2"
          data-oid="4k07-7c"
        >
          <li data-oid="3pb:46x">Multi-country routing analysis</li>
          <li data-oid="ix8vt2w">Trade agreement optimization</li>
          <li data-oid="eiakbiw">Duty drawback identification</li>
          <li data-oid="7nn1pa4">Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400" data-oid="v1e1a8o">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section
        className="w-full max-w-3xl mb-12 text-center"
        data-oid="0::pmkc"
      >
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-2"
          data-oid="9tfd1v3"
        >
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4" data-oid="f1cx570">
          These tools work together automatically. When tariffs change:
        </p>
        <ol
          className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl"
          data-oid="._:-ohv"
        >
          <li data-oid="rdchjiv">
            <b data-oid="_v74k.x">Tracker</b> alerts you first
          </li>
          <li data-oid="ii6:cd5">
            <b data-oid="xgpm0nh">Calculator</b> shows exact impact
          </li>
          <li data-oid="srgw231">
            <b data-oid=":duad7j">Pivot Planner</b> finds alternatives
          </li>
          <li data-oid="zmi2h05">
            <b data-oid="tulcabn">Route Optimizer</b> explores shipping options
          </li>
          <li data-oid="mj0j-6s">
            <b data-oid="sz0e60s">Pricing Optimizer</b> models customer
            strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold" data-oid="doemjur">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12" data-oid="_fadsw.">
        <h2
          className="text-2xl font-bold text-[#ffb366] mb-4"
          data-oid="eqns396"
        >
          Success Stories
        </h2>
        <ul
          className="list-disc list-inside text-gray-300 space-y-2"
          data-oid="0p7h8q-"
        >
          <li data-oid="df99dyg">
            <b data-oid="0j0qw58">Electronics Importer:</b> 25% tariff increase
            → complete supply chain pivot → 18% cost reduction in 45 days
          </li>
          <li data-oid="wcvs9kj">
            <b data-oid="jpby6s0">Fashion Company:</b> Used Timeline Tracker for
            strategic purchasing → avoided $150,000 in additional costs
          </li>
          <li data-oid="1asjdo2">
            <b data-oid="y7kq3am">Manufacturing Exporter:</b> Route optimization
            → $45,000 annual savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12" data-oid="z4d5ce8">
        <h2
          className="text-2xl font-bold text-[#ff6b3d] mb-4"
          data-oid="48lc-3y"
        >
          Quick FAQ
        </h2>
        <ul className="space-y-3 text-gray-200" data-oid="3x9bdgt">
          <li data-oid="4hp0h0f">
            <b data-oid="nb20q6m">Q: Need to know HS codes?</b>
            <br data-oid="8_ima5s" />
            A: No. AI classifies automatically.
          </li>
          <li data-oid="ijueamw">
            <b data-oid=".72lg_-">Q: How current is tariff data?</b>
            <br data-oid=":pepenr" />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li data-oid=":xnvs28">
            <b data-oid="-3aemez">Q: ERP integration?</b>
            <br data-oid="5lwkr--" />
            A: Yes. API connects with major platforms.
          </li>
          <li data-oid="zw2wplg">
            <b data-oid="h207wke">Q: Data security?</b>
            <br data-oid="mau5d4n" />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section
        className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12"
        data-oid="funp0b."
      >
        <div className="max-w-2xl text-center mb-8" data-oid="qvxvite">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4"
            data-oid="fjc50n7"
          >
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6" data-oid="2mrl0y6">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6"
          data-oid="qo7rv.z"
        >
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
            data-oid="7al8_ib"
          >
            <Link href={`/${locale}/pricing`} data-oid="pr771:z">
              See Our Pricing Plans
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
            data-oid="17y0-c."
          >
            <Link href={`/${locale}/signup`} data-oid="p.9iw75">
              Start Free 14-Day Trial
            </Link>
          </Button>
        </div>
        <div
          className="text-gray-300 text-lg text-center max-w-xl mx-auto"
          data-oid="wsa7j06"
        >
          <span className="font-semibold text-white" data-oid="lx8a1zb">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
