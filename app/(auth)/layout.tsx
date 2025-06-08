export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="rp.oc9f"
    >
      <div className="max-w-md w-full space-y-8" data-oid=".ilhegd">
        {children}
      </div>
    </div>
  );
}
