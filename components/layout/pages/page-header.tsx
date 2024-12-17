export default function PageHeader({ heading }: { heading: string }) {
  return (
    <header className="py-2 mb-8">
      <div className="w-7 h-1 mb-2 bg-primary_blue"></div>
      <h2 className="text-2xl">{heading}</h2>
    </header>
  );
}
