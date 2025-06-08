"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white" data-oid="zppdpy1">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="etlheru"
      >
        <div
          className="flex justify-between items-center h-16"
          data-oid="iucmfou"
        >
          {/* Logo */}
          <div className="flex items-center" data-oid="5.5_8jb">
            <Link
              href="/en"
              className="flex items-center space-x-2"
              data-oid="6b5marm"
            >
              <div
                className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center"
                data-oid="cbshzlw"
              >
                <span
                  className="text-white font-bold text-sm"
                  data-oid="oq.71qw"
                >
                  T
                </span>
              </div>
              <span
                className="text-xl font-semibold text-white"
                data-oid="85aet3z"
              >
                TradeNavigatorPro
              </span>
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div
            className="hidden md:flex items-center space-x-8"
            data-oid="8dtxgpx"
          >
            <Link
              href="/en"
              className={`text-sm font-medium transition-colors ${
                pathname === "/en"
                  ? "text-white border-b-2 border-orange-500 pb-1"
                  : "text-gray-300 hover:text-white"
              }`}
              data-oid=".sxdikf"
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
              data-oid="10vnpbv"
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
              data-oid="3n_ygkg"
            >
              Pricing
            </Link>

            {/* Language Dropdown */}
            <div className="relative" data-oid="14zt097">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                data-oid="i-ihe7z"
              >
                <span data-oid="0jahk9x">EN</span>
                <ChevronDown className="w-4 h-4" data-oid="j5cp74q" />
              </button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg py-1 z-50"
                  data-oid="pi4ofz0"
                >
                  <Link
                    href="/en"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="03e77_8"
                  >
                    English
                  </Link>
                  <Link
                    href="/es"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="05idnu7"
                  >
                    Español
                  </Link>
                  <Link
                    href="/fr"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsLanguageOpen(false)}
                    data-oid="y6pj7rk"
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
            data-oid="lc:-m3t"
          >
            <Link
              href="/en/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              data-oid="zx:nwih"
            >
              Sign In
            </Link>
            <Link
              href="/en/signup"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              data-oid=":zvhc:x"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden" data-oid="q.mq85s">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              data-oid="76e4zh8"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                data-oid="tbv4m__"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  data-oid="cayx7ob"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
