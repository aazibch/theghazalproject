import { isValidElement, useEffect, useState, useTransition } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Spinner } from 'flowbite-react';

import { performAdminActionOnColGhazalEntry } from '@/lib/actions';
import { HiOutlineExclamationCircle } from 'react-icons/hi2';

export default function ActionButtons({
  id,
  approved
}: {
  id: string;
  approved: boolean;
}) {
  const [openDeleteConfirmationModal, setOpenDeleteConfirmationModal] =
    useState(false);
  const [isDeleting, startDeleteTransition] = useTransition();
  const [isApprovingOrUnapproving, startApproveOrUnapproveTransition] =
    useTransition();

  useEffect(() => {
    if (!isDeleting) {
      setOpenDeleteConfirmationModal(false);
    }
  }, [isDeleting]);

  const handleDeleteConfirmationClick = () => {
    startDeleteTransition(() =>
      performAdminActionOnColGhazalEntry(id, 'delete')
    );
  };

  const handleDeleteButtonClick = () => {
    setOpenDeleteConfirmationModal(true);
  };

  return (
    <>
      <Modal
        show={openDeleteConfirmationModal}
        size="md"
        onClose={() => setOpenDeleteConfirmationModal(false)}
        popup
      >
        <ModalHeader />
        <ModalBody>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this entry?
            </h3>
            <div className="flex justify-center gap-4">
              <Button
                disabled={isDeleting}
                color="red"
                onClick={handleDeleteConfirmationClick}
              >
                {isDeleting ? (
                  <Spinner size="sm" aria-label="loading spinner" />
                ) : (
                  'Yes'
                )}
              </Button>
              <Button
                disabled={isDeleting}
                color="light"
                onClick={() => setOpenDeleteConfirmationModal(false)}
              >
                No
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
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
      <Button onClick={handleDeleteButtonClick} color="red" size="xs">
        Delete
      </Button>
    </>
  );
}
