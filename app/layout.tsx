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
      data-oid="f515gk5"
    >
      <head data-oid="2.k.caq" />
      <body className="" data-oid="92sjppo">
        <main className="min-h-screen flex flex-col" data-oid="mze5i60">
          {children}
        </main>
        <Toaster data-oid="gv.iras" />
      </body>
    </html>
  );
}
