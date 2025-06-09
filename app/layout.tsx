import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TradeNavigatorPro - Import Cost Calculator",
  description:
    "Calculate precise import costs, analyze tariffs, and optimize your supply chain with our comprehensive trade cost calculator.",
  keywords: [
    "import costs",
    "trade calculator",
    "tariff calculator",
    "supply chain",
    "international trade",
  ],

  authors: [{ name: "TradeNavigatorPro" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-oid="qcrmurh">
      <body className={inter.className} data-oid="96ce_y.">
        {children}
      </body>
    </html>
  );
}
