'use client';

import { IColGhazalEntry } from '@/types';
import ContributionsTable from './contributions-table';

export default function ContributionsSection({
  contributions
}: {
  contributions: IColGhazalEntry[];
}) {
  return (
    <section className="container mx-auto py-12">
      <h3 className="uppercase mb-8 text-lg text-center">Contributions</h3>
      <ContributionsTable contributions={contributions} />
    </section>
  );
}
