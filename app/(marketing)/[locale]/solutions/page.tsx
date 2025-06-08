import { Icons } from "@/components/ui/icons";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SolutionsPage() {
  const locale = "en"; // fallback for static links
  return (
    <div className="min-h-screen bg-[#18171c] text-white flex flex-col items-center py-0 px-4">
      {/* Page Hero */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-b from-[#18171c] to-[#23222a] mb-12">
        <div className="flex flex-col items-center gap-4 max-w-2xl text-center">
          <Icons.logo className="h-14 w-14 text-[#ff6b3d] mb-2" />

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ff6b3d] mb-2">
            5 Essential Tools That Give SMBs Unfair Advantage
          </h1>
          <p className="text-xl text-white font-semibold mb-6">
            Stop playing defense. These integrated tools transform trade
            uncertainty into opportunity.
          </p>
        </div>
      </section>

      {/* Tool 1 */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-2">
          Emergency Cost Calculator
        </h2>
        <p className="text-lg font-semibold text-[#ff6b3d] mb-1">
          "My supplier says costs are going up 25%—is that accurate?"
        </p>
        <p className="mb-2">
          Upload purchase orders → get instant landed cost breakdown with exact
          tariff impacts. Generate professional reports in seconds.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Real-time tariff rate lookup</li>
          <li>AI product classification (no HS codes needed)</li>
          <li>Visual before/after comparisons</li>
          <li>Professional PDF reports</li>
        </ul>
        <p className="italic text-green-400">
          "Discovered our supplier was inflating tariff impacts by 40%. Saved
          $15,000/month." — Tom C., Electronics
        </p>
      </section>

      {/* Tool 2 */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-2">
          Supply Chain Pivot Planner
        </h2>
        <p className="text-lg font-semibold text-[#ff6b3d] mb-1">
          "Where else can I source without tariffs?"
        </p>
        <p className="mb-2">
          AI analyzes global suppliers across 50+ countries. Compare total
          costs, quality ratings, and verified supplier contacts.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>10,000+ verified supplier database</li>
          <li>Country-specific tariff analysis</li>
          <li>Total cost comparison with logistics</li>
          <li>Direct supplier contact info</li>
        </ul>
        <p className="italic text-green-400">
          "Found 3 Vietnam suppliers that reduced costs 22%. Crisis to advantage
          in 2 weeks." — Maria G., Fashion
        </p>
      </section>

      {/* Tool 3 */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-2">
          Pricing Strategy Optimizer
        </h2>
        <p className="text-lg font-semibold text-[#ff6b3d] mb-1">
          "How do I stay profitable without losing customers?"
        </p>
        <p className="mb-2">
          Model 3 scenarios (absorb/pass-through/split). Get optimized pricing
          with customer communication templates.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>3-scenario profit modeling</li>
          <li>Customer retention probability analysis</li>
          <li>Pre-written communication templates</li>
          <li>Break-even analysis</li>
        </ul>
        <p className="italic text-green-400">
          "Targeted increases improved margins 8% while keeping 95% of
          customers." — David P., Industrial Tools
        </p>
      </section>

      {/* Tool 4 */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-2">
          Tariff Timeline Tracker
        </h2>
        <p className="text-lg font-semibold text-[#ff6b3d] mb-1">
          "I never know what's coming next"
        </p>
        <p className="mb-2">
          Monitor USTR announcements for your products. Get 30/60/90-day advance
          warnings with actionable recommendations.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Automated policy monitoring</li>
          <li>Product-specific alerts</li>
          <li>Historical pattern analysis</li>
          <li>Action-specific recommendations</li>
        </ul>
        <p className="italic text-green-400">
          "90-day steel tariff warning let us secure 6 months inventory
          pre-tariff. Saved $120,000." — Jennifer W., Construction
        </p>
      </section>

      {/* Tool 5 */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-2">
          Trade Route Optimizer
        </h2>
        <p className="text-lg font-semibold text-[#ff6b3d] mb-1">
          "There has to be a smarter way to ship this"
        </p>
        <p className="mb-2">
          Analyze routing options to minimize tariffs. Maximize trade agreements
          and find duty drawback opportunities.
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-2">
          <li>Multi-country routing analysis</li>
          <li>Trade agreement optimization</li>
          <li>Duty drawback identification</li>
          <li>Automated customs documentation</li>
        </ul>
        <p className="italic text-green-400">
          "Mexico transshipment reduced tariffs 35% plus $30,000 annual duty
          drawbacks." — Carlos R., Automotive
        </p>
      </section>

      {/* Integration Power */}
      <section className="w-full max-w-3xl mb-12 text-center">
        <h2 className="text-2xl font-bold text-[#ff6b3d] mb-2">
          5 Tools, One Intelligence System
        </h2>
        <p className="mb-4">
          These tools work together automatically. When tariffs change:
        </p>
        <ol className="list-decimal list-inside text-gray-300 mb-4 text-left mx-auto max-w-xl">
          <li>
            <b>Tracker</b> alerts you first
          </li>
          <li>
            <b>Calculator</b> shows exact impact
          </li>
          <li>
            <b>Pivot Planner</b> finds alternatives
          </li>
          <li>
            <b>Route Optimizer</b> explores shipping options
          </li>
          <li>
            <b>Pricing Optimizer</b> models customer strategies
          </li>
        </ol>
        <p className="text-lg text-gray-200 font-semibold">
          Complete trade intelligence in one platform.
        </p>
      </section>

      {/* Success Stories */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ffb366] mb-4">
          Success Stories
        </h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <b>Electronics Importer:</b> 25% tariff increase → complete supply
            chain pivot → 18% cost reduction in 45 days
          </li>
          <li>
            <b>Fashion Company:</b> Used Timeline Tracker for strategic
            purchasing → avoided $150,000 in additional costs
          </li>
          <li>
            <b>Manufacturing Exporter:</b> Route optimization → $45,000 annual
            savings through better trade agreements
          </li>
        </ul>
      </section>

      {/* Quick FAQ */}
      <section className="w-full max-w-3xl mb-12">
        <h2 className="text-2xl font-bold text-[#ff6b3d] mb-4">Quick FAQ</h2>
        <ul className="space-y-3 text-gray-200">
          <li>
            <b>Q: Need to know HS codes?</b>
            <br />
            A: No. AI classifies automatically.
          </li>
          <li>
            <b>Q: How current is tariff data?</b>
            <br />
            A: Real-time from USTR. Updated within minutes.
          </li>
          <li>
            <b>Q: ERP integration?</b>
            <br />
            A: Yes. API connects with major platforms.
          </li>
          <li>
            <b>Q: Data security?</b>
            <br />
            A: SOC 2 compliant with enterprise encryption.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className="w-full flex flex-col items-center justify-center py-16 bg-[#23222a] mb-12">
        <div className="max-w-2xl text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ff6b3d] mb-4">
            Stop Fighting Yesterday's Trade Wars
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Over 40,000 SMBs switched from reactive to proactive trade
            management. The gap between prepared and unprepared companies grows
            every quarter.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center mb-6">
          <Button
            asChild
            className="bg-[#ff6b3d] hover:bg-[#ffb366] text-black font-bold px-8 py-4 text-lg"
          >
            <Link href={`/${locale}/pricing`}>See Our Pricing Plans</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#ff6b3d] text-[#ff6b3d] font-bold px-8 py-4 text-lg"
          >
            <Link href={`/${locale}/signup`}>Start Free 14-Day Trial</Link>
          </Button>
        </div>
        <div className="text-gray-300 text-lg text-center max-w-xl mx-auto">
          <span className="font-semibold text-white">
            Try all 5 tools free.
          </span>{" "}
          Save 10x your cost or full refund.
        </div>
      </section>
    </div>
  );
}
