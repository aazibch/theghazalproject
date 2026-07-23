import { Button, ButtonGroup } from 'flowbite-react';

export default function ColGhazalEntriesFilterButtons({
  filterBy,
  handleFilterButtonClick
}: {
  filterBy: 'all' | 'approved' | 'pending';
  handleFilterButtonClick: (filter: 'all' | 'approved' | 'pending') => void;
}) {
  return (
    <div className="flex justify-between items-center mb-5">
      <p className="ml-2 text-sm font-medium text-gray-500">Filter by:</p>
      <ButtonGroup>
        <Button
          disabled={filterBy === 'all'}
          color="light"
          onClick={() => handleFilterButtonClick('all')}
        >
          All
        </Button>
        <Button
          disabled={filterBy === 'pending'}
          color="light"
          onClick={() => handleFilterButtonClick('pending')}
        >
          Pending
        </Button>
        <Button
          disabled={filterBy === 'approved'}
          color="light"
          onClick={() => handleFilterButtonClick('approved')}
        >
          Approved
        </Button>
      </ButtonGroup>
    </div>
  );
}
