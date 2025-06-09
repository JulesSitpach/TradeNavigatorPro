"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CalculatorIcon,
  ArrowPathIcon,
  CurrencyDollarIcon,
  ClockIcon,
  MapIcon,
  HomeIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Dashboard", href: "/en", icon: HomeIcon },
  {
    name: "Cost Calculator",
    href: "/en/apps/cost-calculator",
    icon: CalculatorIcon,
  },
  {
    name: "Risk Calculator",
    href: "/en/apps/risk-calculator",
    icon: ShieldCheckIcon,
  },
  {
    name: "Trade Journal",
    href: "/en/apps/trade-journal",
    icon: DocumentTextIcon,
  },
  {
    name: "Market Analysis",
    href: "/en/apps/market-analysis",
    icon: ChartBarIcon,
  },
  { name: "Learning Hub", href: "/en/apps/learning-hub", icon: BookOpenIcon },
  { name: "Supply Pivot", href: "/en/apps/supply-pivot", icon: ArrowPathIcon },
  {
    name: "Pricing Optimizer",
    href: "/en/apps/pricing-optimizer",
    icon: CurrencyDollarIcon,
  },
  { name: "Tariff Tracker", href: "/en/apps/tariff-tracker", icon: ClockIcon },
  { name: "Route Optimizer", href: "/en/apps/route-optimizer", icon: MapIcon },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div
      className="w-64 bg-white border-r border-gray-200 min-h-screen"
      data-oid="0ti0o4z"
    >
      <div className="p-4" data-oid=".qm-u_-">
        <h2
          className="text-lg font-semibold text-gray-900 mb-4"
          data-oid="73:9g4z"
        >
          Applications
        </h2>
        <nav className="space-y-2" data-oid=".nvwni1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
                data-oid=":dv3i2o"
              >
                <item.icon className="mr-3 h-5 w-5" data-oid="qvc8wco" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
