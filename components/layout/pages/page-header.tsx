export default function PageHeader({ heading }: { heading: string }) {
  return (
    <header className="border-gray-300 border-b py-2 mb-8">
      <div className="w-7 h-1 mb-2 bg-primary_blue"></div>
      <h2 className="text-2xl mb-4">{heading}</h2>
    </header>
  );
}
