export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-50"
      data-oid="di.-b5b"
    >
      <div className="max-w-md w-full space-y-8" data-oid="rel25im">
        {children}
      </div>
    </div>
  );
}
