import ColGhazalEntriesTable from '@/components/control-panel/col-ghazal-controls/col-ghazal-entries-table';
import ControlPanelLayout from '@/components/control-panel/control-panel-layout/control-panel-layout';
import { getAllColGhazalEntries } from '@/lib/actions';

export default async function CollectiveGhazalControlsPage() {
  const entries = await getAllColGhazalEntries();

  return (
    <ControlPanelLayout>
      <ColGhazalEntriesTable entries={entries} />
    </ControlPanelLayout>
  );
}
