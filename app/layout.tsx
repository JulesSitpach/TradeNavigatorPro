import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "TradeNavigatorPro",
  description: "US Trade Impact SaaS for international trade management",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-oid="drq:ujr">
      <body className="" data-oid="cyxj5z3">
        {children}
      </body>
    </html>
  );
}
