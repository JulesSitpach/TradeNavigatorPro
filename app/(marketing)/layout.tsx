import Navigation from "@/components/Navigation";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation data-oid="zsa1071" />
      {children}
    </>
  );
}
