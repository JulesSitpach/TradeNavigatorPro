import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
export const metadata: Metadata = {
  title: "TradeNavigatorPro - US Trade Impact SaaS for SMBs",
  description:
    "Navigate US trade policy changes and tariff impacts with 5 essential tools",
  keywords: "trade, tariffs, supply chain, pricing, shipping, SMB",
  authors: [
    {
      name: "TradeNavigatorPro Team",
    },
  ],

  creator: "TradeNavigatorPro",
};
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html
      lang={params.locale || "en"}
      suppressHydrationWarning
      data-oid="9e-7x1i"
    >
      <head data-oid="3lxb:o_" />
      <body className="" data-oid="7d5-_:u">
        <main className="min-h-screen flex flex-col" data-oid="nnh6bze">
          {children}
        </main>
        <Toaster data-oid="bm3qgs8" />
      </body>
    </html>
  );
}
