import { Button, Modal, ModalBody, ModalFooter } from 'flowbite-react';
import { HiOutlineCheck } from 'react-icons/hi2';

export default function ContributeSuccessScreen({
  setOpenContributeModalHandler,
  setIsSuccessHandler
}: {
  setOpenContributeModalHandler: (value: boolean) => void;
  setIsSuccessHandler: (value: boolean) => void;
}) {
  return (
    <>
      <ModalBody className="flex items-center justify-center">
        <div className="text-center">
          <HiOutlineCheck size={125} className="text-gray-500 m-auto" />
          <p className="text-base leading-relaxed text-gray-500">
            Your stanza was submitted successfully. It will show up on the
            website once approved by a moderator.
          </p>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="gray"
          onClick={() => {
            setIsSuccessHandler(false);
            setOpenContributeModalHandler(false);
          }}
        >
          Close
        </Button>
      </ModalFooter>
    </>
  );
}
