export default function PageContainer({
  children
}: {
  children: React.ReactNode;
}) {
  return <div className="max-w-screen-xl mx-auto px-4 py-8">{children}</div>;
}
