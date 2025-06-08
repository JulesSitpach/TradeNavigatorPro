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
      data-oid="2n9ihf-"
    >
      <head data-oid="4gsdoni" />
      <body className="" data-oid="vgtedbb">
        <main className="min-h-screen flex flex-col" data-oid="kwmy383">
          {children}
        </main>
        <Toaster data-oid="o8k0vrh" />
      </body>
    </html>
  );
}
