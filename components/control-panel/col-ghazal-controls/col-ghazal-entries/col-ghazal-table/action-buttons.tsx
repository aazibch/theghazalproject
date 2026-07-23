import { useTransition } from 'react';
import { Button, Spinner } from 'flowbite-react';

import { performAdminActionOnColGhazalEntry } from '@/lib/actions';

export default function ActionButtons({
  id,
  approved
}: {
  id: string;
  approved: boolean;
}) {
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isApprovingOrUnapproving, startApproveOrUnapproveTransition] =
    useTransition();

  return (
    <>
      <Button
        className="w-20"
        color="light"
        size="xs"
        disabled={isApprovingOrUnapproving}
        onClick={() =>
          startApproveOrUnapproveTransition(() =>
            performAdminActionOnColGhazalEntry(
              id,
              approved ? 'unapprove' : 'approve'
            )
          )
        }
      >
        {isApprovingOrUnapproving ? (
          <Spinner size="sm" aria-label="loading spinner" />
        ) : approved ? (
          'Unapprove'
        ) : (
          'Approve'
        )}
      </Button>
      <Button color="red" size="xs">
        Delete
      </Button>
    </>
  );
}
