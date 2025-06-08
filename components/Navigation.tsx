"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white" data-oid="qi_mg25">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="e5-yrkr"
      >
        <div
          className="flex justify-between items-center h-16"
          data-oid="1ao7xam"
        >
          {/* Logo */}
          <div className="flex items-center" data-oid="_g_ja81">
            <Link
              href="/en"
              className="flex items-center space-x-2"
              data-oid="t0w3739"
            >
              <div
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
                data-oid="n6blrvk"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="evnh6nr"
                >
                  T
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                data-oid=":tmjtet"
              >
                TradeNavigatorPro
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="n69guza"
          >
            <Link
              href="/en"
              className={`text-sm font-medium transition-colors ${
                pathname === "/en"
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid="n77uo52"
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
              data-oid="z4b6vui"
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
              data-oid="9r5bg_9"
            >
              Pricing
            </Link>

            {/* Language Dropdown */}
            <div className="relative" data-oid="d8uzew5">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-oid="9jsiot_"
              >
                <span data-oid="v605-6d">EN</span>
                <ChevronDown className="w-4 h-4" data-oid="0.jpixi" />
              </button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50"
                  data-oid="_9lb3is"
                >
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="74hdbc3"
                  >
                    English
                  </Link>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="xxs6d-8"
                  >
                    Español
                  </Link>
                  <Link
                    href="/fr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="geirn50"
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
            data-oid="fljchfv"
          >
            <Link
              href="/en/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              data-oid="or2yp5n"
            >
              Sign In
            </Link>
            <Link
              href="/en/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-oid="mk7h-gx"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-oid="cr-ryju">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              data-oid="s6s:0yh"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="uipi7aq"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="t6rwwn-"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
