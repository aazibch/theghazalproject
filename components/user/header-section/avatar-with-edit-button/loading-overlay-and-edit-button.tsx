import { Button, Spinner } from 'flowbite-react';
import { FiEdit } from 'react-icons/fi';
import { useFormStatus } from 'react-dom';

export default function LoadingOverlayAndEditButton({
  handleEditButtonClick
}: {
  handleEditButtonClick: () => void;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        className="absolute top-0 right-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        pill
        color="light"
        onClick={handleEditButtonClick}
        disabled={pending}
      >
        <FiEdit />
      </Button>
      {pending && (
        <div className="absolute top-0 left-0 right-0 bottom-0 border z-10 opacity-30 bg-black rounded-full flex items-center justify-center">
          <Spinner size="xl" />
        </div>
      )}
    </>
  );
}
