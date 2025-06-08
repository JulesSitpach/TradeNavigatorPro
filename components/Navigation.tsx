"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white" data-oid="qm2ze80">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="2m2y94-"
      >
        <div
          className="flex justify-between items-center h-16"
          data-oid="d4oz2r4"
        >
          {/* Logo */}
          <div className="flex items-center" data-oid=".d_7a17">
            <Link
              href="/en"
              className="flex items-center space-x-2"
              data-oid="aksiahl"
            >
              <div
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
                data-oid="9nko9xr"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="5s0o569"
                >
                  T
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                data-oid="dktlgu6"
              >
                TradeNavigatorPro
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="080oi_."
          >
            <Link
              href="/en"
              className={`text-sm font-medium transition-colors ${
                pathname === "/en"
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid="uxt:z.x"
            >
              Home
            </Link>

            <Link
              href="/en/solutions"
              className={`text-sm font-medium transition-colors ${
                pathname.includes("/solutions")
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid="per_mgd"
            >
              Solutions
            </Link>
            <Link
              href="/en/pricing"
              className={`text-sm font-medium transition-colors ${
                pathname.includes("/pricing")
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid="yeu1unw"
            >
              Pricing
            </Link>

            {/* Language Dropdown */}
            <div className="relative" data-oid=":i7ljlm">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-oid="4eaao:p"
              >
                <span data-oid="mjp0btz">EN</span>
                <ChevronDown className="w-4 h-4" data-oid="m-h73hp" />
              </button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50"
                  data-oid="7iarktt"
                >
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="1kaeiq1"
                  >
                    English
                  </Link>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="d43dn4p"
                  >
                    Español
                  </Link>
                  <Link
                    href="/fr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="tpmwal6"
                  >
                    Français
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Auth Buttons */}
          <div
            className="hidden md:flex items-center space-x-4"
            data-oid="hsxq200"
          >
            <Link
              href="/en/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              data-oid="mhjazez"
            >
              Sign In
            </Link>
            <Link
              href="/en/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-oid="y5su9yo"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-oid="64awe8z">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              data-oid="kg49h-q"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="u.0chfg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="5njm5s_"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
