import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  TrendingUp,
  FileText,
  Shield,
} from "lucide-react";
import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect to English locale by default
  redirect("/en");

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
      data-oid="eiynn2e"
    >
      {/* Header */}
      <header
        className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm"
        data-oid="abukyr8"
      >
        <div className="container mx-auto px-4 py-4" data-oid="w9d.en-">
          <div className="flex items-center justify-between" data-oid="8sbryjf">
            <div className="flex items-center space-x-2" data-oid="paomqvc">
              <TrendingUp
                className="h-8 w-8 text-blue-400"
                data-oid="fl_cmjx"
              />

              <span className="text-xl font-bold text-white" data-oid="civp2el">
                TradeNavigatorPro
              </span>
            </div>
            <nav
              className="hidden md:flex items-center space-x-6"
              data-oid="ix8.nbx"
            >
              <Link
                href="#features"
                className="text-slate-300 hover:text-white transition-colors"
                data-oid="cunhb9c"
              >
                Features
              </Link>
              <Link
                href="#pricing"
                className="text-slate-300 hover:text-white transition-colors"
                data-oid="l9alkdf"
              >
                Pricing
              </Link>
              <Link
                href="/calculator"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                data-oid="io4apuu"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4" data-oid="qpyl-nr">
        <div className="container mx-auto text-center" data-oid="8rtf0l4">
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            data-oid="n978z9y"
          >
            Master Your
            <span
              className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              data-oid="61j:_dx"
            >
              {" "}
              Import Costs
            </span>
          </h1>
          <p
            className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto"
            data-oid="t221bpg"
          >
            Calculate precise import costs, analyze tariffs, and optimize your
            supply chain with our comprehensive trade cost calculator.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="ze:.igb"
          >
            <Link
              href="/calculator"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center justify-center transition-colors"
              data-oid="z50p3ft"
            >
              Start Calculating
              <ArrowRight className="ml-2 h-5 w-5" data-oid="79a7bo8" />
            </Link>
            <button
              className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-8 py-3 rounded-lg font-semibold transition-colors"
              data-oid="zp7ew4e"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 bg-slate-800/30"
        data-oid="_zawqso"
      >
        <div className="container mx-auto" data-oid="bdz2j7y">
          <h2
            className="text-3xl font-bold text-white text-center mb-12"
            data-oid="91uxdxu"
          >
            Everything You Need for Import Cost Analysis
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="ubofg-7"
          >
            <div
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              data-oid="xug.-n7"
            >
              <Calculator
                className="h-12 w-12 text-blue-400 mb-4"
                data-oid="zch35ks"
              />

              <h3
                className="text-xl font-semibold text-white mb-3"
                data-oid="n_rfg-t"
              >
                Precise Calculations
              </h3>
              <p className="text-slate-300" data-oid="kojop7z">
                Calculate exact import costs including duties, taxes, shipping,
                and handling fees with our advanced algorithms.
              </p>
            </div>
            <div
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              data-oid="9m_4gib"
            >
              <FileText
                className="h-12 w-12 text-green-400 mb-4"
                data-oid="6ybajp-"
              />

              <h3
                className="text-xl font-semibold text-white mb-3"
                data-oid="99-s551"
              >
                Bulk Processing
              </h3>
              <p className="text-slate-300" data-oid="4-b:b6.">
                Upload CSV or Excel files to process hundreds of products at
                once and generate comprehensive reports.
              </p>
            </div>
            <div
              className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              data-oid="a10hgm7"
            >
              <Shield
                className="h-12 w-12 text-purple-400 mb-4"
                data-oid="svb3hza"
              />

              <h3
                className="text-xl font-semibold text-white mb-3"
                data-oid="p_sc34_"
              >
                Tariff Database
              </h3>
              <p className="text-slate-300" data-oid=".o-ytm-">
                Access up-to-date tariff rates and trade regulations for
                accurate cost projections and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" data-oid="_s4-zvx">
        <div className="container mx-auto text-center" data-oid="qype79g">
          <h2 className="text-3xl font-bold text-white mb-6" data-oid="j2n.0zh">
            Ready to Optimize Your Import Costs?
          </h2>
          <p className="text-xl text-slate-300 mb-8" data-oid="5.j1jey">
            Start calculating your import costs in minutes, not hours.
          </p>
          <Link
            href="/calculator"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
            data-oid="s0encz:"
          >
            Launch Calculator
            <ArrowRight className="ml-2 h-5 w-5" data-oid=":xe0fw7" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t border-slate-700 bg-slate-900/50 py-8 px-4"
        data-oid="xqf5nbm"
      >
        <div className="container mx-auto text-center" data-oid="i3c_3wq">
          <div
            className="flex items-center justify-center space-x-2 mb-4"
            data-oid="oh:uz14"
          >
            <TrendingUp className="h-6 w-6 text-blue-400" data-oid="lzfa3-3" />
            <span
              className="text-lg font-semibold text-white"
              data-oid="t1dpz_."
            >
              TradeNavigatorPro
            </span>
          </div>
          <p className="text-slate-400" data-oid="fmxee._">
            © 2025 TradeNavigatorPro. Empowering smart trade decisions.
          </p>
        </div>
      </footer>
    </div>
  );
}
