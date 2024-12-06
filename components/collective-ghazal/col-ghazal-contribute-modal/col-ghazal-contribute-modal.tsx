import { useState } from 'react';
import { Modal } from 'flowbite-react';

import ColGhazalContributeSuccess from './col-ghazal-contribute-success';
import ColGhazalContributeForm from './col-ghazal-contribute-form';

export default function ColGhazalContributeModal({
  openContributeModal,
  setOpenContributeModalHandler
}: {
  openContributeModal: boolean;
  setOpenContributeModalHandler: (value: boolean) => void;
}) {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const setIsSuccessHandler = (value: boolean) => {
    setIsSuccess(value);
  };

  return (
    <Modal
      dismissible
      show={openContributeModal}
      onClose={() => setOpenContributeModalHandler(false)}
    >
      <Modal.Header>Contribute a Stanza to the Collective Ghazal</Modal.Header>
      {isSuccess ? (
        <ColGhazalContributeSuccess
          setIsSuccessHandler={setIsSuccessHandler}
          setOpenContributeModalHandler={setOpenContributeModalHandler}
        />
      ) : (
        <ColGhazalContributeForm
          isSuccess={isSuccess}
          setIsSuccessHandler={setIsSuccessHandler}
          setOpenContributeModalHandler={setOpenContributeModalHandler}
        />
      )}
    </Modal>
  );
}
