"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white" data-oid="cw5kc1y">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="17nqn8d"
      >
        <div
          className="flex justify-between items-center h-16"
          data-oid="6g.d30l"
        >
          {/* Logo */}
          <div className="flex items-center" data-oid="-bd4g_6">
            <Link
              href="/en"
              className="flex items-center space-x-2"
              data-oid="c2e2gpg"
            >
              <div
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
                data-oid="xiscpy4"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="__p25rb"
                >
                  T
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                data-oid="07w5d3_"
              >
                TradeNavigatorPro
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="5r6f5w-"
          >
            <Link
              href="/en"
              className={`text-sm font-medium transition-colors ${
                pathname === "/en"
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid="1o0a7bq"
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
              data-oid="kghp1ki"
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
              data-oid="9x-h:zy"
            >
              Pricing
            </Link>

            {/* Language Dropdown */}
            <div className="relative" data-oid="c17b84l">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-oid="osjr9iy"
              >
                <span data-oid="oierhw4">EN</span>
                <ChevronDown className="w-4 h-4" data-oid="5813n6d" />
              </button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50"
                  data-oid="zt6tbj:"
                >
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="nenbfyc"
                  >
                    English
                  </Link>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid=".ao.1dh"
                  >
                    Español
                  </Link>
                  <Link
                    href="/fr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="p3ek-9-"
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
            data-oid="nofq3mb"
          >
            <Link
              href="/en/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              data-oid="411:bb6"
            >
              Sign In
            </Link>
            <Link
              href="/en/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-oid="b4-_7v0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-oid="gx3ugyv">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              data-oid="_eo38jh"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="-.qrwym"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="83pxaot"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
