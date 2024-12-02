import { useFormState } from 'react-dom';
import { Modal, Button, TextInput } from 'flowbite-react';
import { HiOutlineCheck } from 'react-icons/hi';
import { submitColGhazalCouplet } from '@/lib/actions';

export default function ColGhazalContributeModal({
  openContributeModal,
  setOpenContributeModalHandler
}: {
  openContributeModal: boolean;
  setOpenContributeModalHandler: (value: boolean) => void;
}) {
  const [state, formAction] = useFormState(submitColGhazalCouplet, {
    message: 'message'
  });

  return (
    <Modal
      dismissible
      show={openContributeModal}
      onClose={() => setOpenContributeModalHandler(false)}
    >
      <form action={formAction}>
        <Modal.Header>
          Contribute a Stanza to the Collective Ghazal
        </Modal.Header>
        <Modal.Body className="flex items-center justify-center">
          {/* <div className="text-center">
          <HiOutlineCheck size={125} className="text-gray-500 m-auto" />
          <p className="text-base leading-relaxed text-gray-500">
            Your stanza was submitted successfully. It will show up on the
            website once approved by a moderator.
          </p>
        </div> */}

          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              Before submitting, keep in mind: The maximum allowed length of
              syllables is eighteen per line, and both lines should end in the
              refrain "silence." It is also recommended that the two lines are
              roughly equal length in terms of syllable-count.
            </p>
            <TextInput type="text" placeholder="Line 1" name="lineOne" />
            <TextInput type="text" placeholder="Line 2" name="lineTwo" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" type="submit">
            Submit
          </Button>
          <Button
            color="gray"
            onClick={() => setOpenContributeModalHandler(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
