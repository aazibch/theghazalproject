import ColGhazalEntries from '@/components/control-panel/col-ghazal-controls/col-ghazal-entries/col-ghazal-entries';
import ControlPanelLayout from '@/components/control-panel/control-panel-layout/control-panel-layout';
import { getAllColGhazalEntries } from '@/lib/actions';

export default async function CollectiveGhazalControlsPage() {
  const entries = await getAllColGhazalEntries();

  return (
    <ControlPanelLayout>
      <div className="m-5 w-full overflow-x-auto">
        <ColGhazalEntries entries={entries} />
      </div>
    </ControlPanelLayout>
  );
}
