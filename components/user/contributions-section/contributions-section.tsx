'use client';

import ContributionsTable from './contributions-table';

export default function ContributionsSection() {
  return (
    <div className="container mx-auto py-16">
      <h3 className="uppercase mb-8 text-xl text-center">Contributions</h3>
      <ContributionsTable />
    </div>
  );
}

// TODO: Use the articles section on home as model for styling.
