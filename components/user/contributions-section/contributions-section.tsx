'use client';

import ContributionsTable from './contributions-table';

export default function ContributionsSection() {
  return (
    <section className="container mx-auto py-12">
      <h3 className="uppercase mb-8 text-xl text-center">Contributions</h3>
      <ContributionsTable />
    </section>
  );
}
