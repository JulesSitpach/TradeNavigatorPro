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
    <html lang="en" data-oid="wexl7am">
      <body className="" data-oid="4aepme1">
        {children}
      </body>
    </html>
  );
}
