import { IColGhazalEntry } from '@/types';

import ColGhazalTable from './col-ghazal-table';
import ColGhazalEntriesFilterButtons from './col-ghazal-entries-filter-buttons';

export default function ColGhazalEntries({
  entries
}: {
  entries: IColGhazalEntry[];
}) {
  return (
    <>
      <ColGhazalEntriesFilterButtons />
      <ColGhazalTable entries={entries} />
    </>
  );
}
