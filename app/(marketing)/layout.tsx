import Navigation from "@/components/Navigation";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation data-oid="0n3b08j" />
      {children}
    </>
  );
}
