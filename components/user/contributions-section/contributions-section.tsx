'use client';

import { IColGhazalEntry } from '@/types';
import ContributionsTable from './contributions-table';

export default function ContributionsSection({
  contributions
}: {
  contributions: IColGhazalEntry[];
}) {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      <h3 className="uppercase mb-8 text-lg text-center">Contributions</h3>
      {contributions.length === 0 ? (
        <p className="text-center text-gray-600 my-28">No contributions yet.</p>
      ) : (
        <ContributionsTable contributions={contributions} />
      )}
    </section>
  );
}
