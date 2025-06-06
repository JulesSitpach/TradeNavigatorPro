import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

// Load Inter font with Latin subset for optimal performance
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Define metadata for SEO and browser tabs
export const metadata: Metadata = {
  title: "TradeNavigatorPro - US Tariff Impact Calculator",
  description: "Calculate and analyze US tariff impacts on your imported products with our powerful emergency cost calculator.",
  keywords: "tariff calculator, import duties, US tariffs, trade impact analysis, SMB tariff tool",
  authors: [{ name: "TradeNavigatorPro Team" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

// Root layout component that wraps all pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-gray-50">
        {/* Use Suspense for better loading UX */}
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand"></div>
          </div>
        }>
          {children}
        </Suspense>
        
        {/* Skip to content link for accessibility */}
        <div className="sr-only focus-within:not-sr-only">
          <a href="#main-content" className="absolute z-10 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-brand">
            Skip to content
          </a>
        </div>
      </body>
    </html>
  );
}
