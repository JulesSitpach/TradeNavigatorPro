import Navigation from "@/components/Navigation";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation data-oid="iv4b47m" />
      {children}
    </>
  );
}
