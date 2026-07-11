import { Button, ButtonGroup } from 'flowbite-react';

export default function ColGhazalEntriesFilterButtons() {
  return (
    <div className="flex justify-between items-center mb-5">
      <p className="ml-2 text-sm font-medium text-gray-500">Filter by:</p>
      <ButtonGroup>
        <Button color="light">All</Button>
        <Button color="light">Pending</Button>
        <Button color="light">Approved</Button>
      </ButtonGroup>
    </div>
  );
}
