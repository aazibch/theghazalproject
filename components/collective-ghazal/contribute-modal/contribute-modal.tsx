import { useState } from 'react';
import { Modal } from 'flowbite-react';

import ContributeSuccessScreen from './contribute-success-screen';
import ContributeForm from './contribute-form';

export default function ContributeModal({
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
        <ContributeSuccessScreen
          setIsSuccessHandler={setIsSuccessHandler}
          setOpenContributeModalHandler={setOpenContributeModalHandler}
        />
      ) : (
        <ContributeForm
          isSuccess={isSuccess}
          setIsSuccessHandler={setIsSuccessHandler}
          setOpenContributeModalHandler={setOpenContributeModalHandler}
        />
      )}
    </Modal>
  );
}
