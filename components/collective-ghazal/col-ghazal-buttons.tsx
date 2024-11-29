'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Modal } from 'flowbite-react';

export default function ColGhazalButtons() {
  const [openContributeModal, setOpenContributeModal] =
    useState<boolean>(false);
  const pathname = usePathname();

  const handleContributeButtonClick = () => {
    setOpenContributeModal(true);
  };

  let contributeButton = (
    <Button as={Link} href="/collective-ghazal?contribute-modal" color="blue">
      Contribute
    </Button>
  );

  if (pathname === '/collective-ghazal') {
    contributeButton = (
      <Button onClick={handleContributeButtonClick} color="blue">
        Contribute
      </Button>
    );
  }

  return (
    <div className="flex gap-2 justify-center">
      <Button>Learn More</Button>
      {contributeButton}

      <Modal
        dismissible
        show={openContributeModal}
        onClose={() => setOpenContributeModal(false)}
      >
        <Modal.Header>Contribute Modal</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque id enim suscipit, pharetra diam quis, sagittis lorem.
              Proin ut risus vel elit accumsan suscipit. Aenean egestas, tellus
              quis facilisis elementum, mauris leo luctus neque, dignissim
              cursus nunc arcu vel neque. Curabitur pulvinar pharetra consequat.
              Aliquam bibendum maximus nibh non tincidunt. Suspendisse sit amet
              purus ut tortor laoreet luctus non et nunc. Vivamus mattis est ex,
              sit amet eleifend libero sodales a. Donec posuere purus ac elit
              malesuada venenatis. Proin hendrerit nisl sit amet dapibus
              finibus. Morbi vestibulum molestie libero, vitae maximus nibh
              venenatis non. Quisque id facilisis elit, eget lacinia dolor.
              Morbi in semper erat. Morbi diam neque, finibus ultricies aliquet
              at, sollicitudin et quam. In ut scelerisque massa.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Nullam tempus enim tortor, sit amet pharetra justo iaculis a. In
              hac habitasse platea dictumst. Ut et libero ut libero laoreet
              venenatis. Maecenas nec lacus placerat, viverra nunc quis, pretium
              orci. Pellentesque suscipit et massa nec convallis. Cras vitae
              lorem felis. Etiam bibendum turpis sed nulla suscipit tristique.
              Quisque euismod dignissim urna sed congue. Aenean orci purus,
              dictum sit amet risus eu, bibendum auctor tortor. Nullam
              pellentesque iaculis laoreet. Cras eu dolor ipsum. Nullam egestas
              eros quis pulvinar placerat. Curabitur dignissim sit amet tellus
              ac fermentum. Praesent blandit velit non pulvinar tristique. Duis
              eu magna in elit tristique convallis ac a orci. Cras vulputate et
              elit eu finibus.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="blue" onClick={() => setOpenContributeModal(false)}>
            Submit
          </Button>
          <Button color="gray" onClick={() => setOpenContributeModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
