'use client';

import { IColGhazalEntry } from '@/types';

import ColGhazalTable from './col-ghazal-table/col-ghazal-table';
import ColGhazalEntriesFilterButtons from './col-ghazal-entries-filter-buttons';
import { useState } from 'react';

export default function ColGhazalEntries({
  entries
}: {
  entries: IColGhazalEntry[];
}) {
  const [filterBy, setFilterBy] = useState<'all' | 'approved' | 'pending'>(
    'all'
  );

  const filteredEntries = entries.filter((entry) => {
    if (filterBy === 'approved') {
      return entry.approved;
    } else if (filterBy === 'pending') {
      return !entry.approved;
    }

    return true;
  });

  const handleFilterButtonClick = (filter: 'all' | 'approved' | 'pending') => {
    setFilterBy(filter);
  };

  return (
    <>
      <ColGhazalEntriesFilterButtons
        handleFilterButtonClick={handleFilterButtonClick}
        filterBy={filterBy}
      />
      <ColGhazalTable entries={filteredEntries} />
    </>
  );
}
