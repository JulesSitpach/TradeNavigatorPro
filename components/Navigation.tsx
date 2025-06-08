"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white" data-oid="g6mg64_">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="zxo::fy"
      >
        <div
          className="flex justify-between items-center h-16"
          data-oid="rydnpbj"
        >
          {/* Logo */}
          <div className="flex items-center" data-oid="-:0cib1">
            <Link
              href="/en"
              className="flex items-center space-x-2"
              data-oid="zbd5avg"
            >
              <div
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
                data-oid="2u71nq5"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="n:ip1t8"
                >
                  T
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                data-oid="lp92n_c"
              >
                TradeNavigatorPro
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="1am:.sp"
          >
            <Link
              href="/en"
              className={`text-sm font-medium transition-colors ${
                pathname === "/en"
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid=".m0.yx1"
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
              data-oid="jsf6oro"
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
              data-oid="3sdtg3b"
            >
              Pricing
            </Link>

            {/* Language Dropdown */}
            <div className="relative" data-oid="02u-5ip">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-oid="_4fkmy3"
              >
                <span data-oid="lrhi79z">EN</span>
                <ChevronDown className="w-4 h-4" data-oid="n-01rrs" />
              </button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50"
                  data-oid="a-7mtaj"
                >
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="4ytljj1"
                  >
                    English
                  </Link>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="0:jdr3o"
                  >
                    Español
                  </Link>
                  <Link
                    href="/fr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="895a.tg"
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
            data-oid="jjx1fb2"
          >
            <Link
              href="/en/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              data-oid="5-wker2"
            >
              Sign In
            </Link>
            <Link
              href="/en/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-oid="n.:c2o5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-oid="ozvlfo2">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              data-oid="f.mq9tt"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="eg0i7fr"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="tfl0o4:"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
