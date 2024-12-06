'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button, Modal } from 'flowbite-react';

import ColGhazalContributeModal from './col-ghazal-contribute-modal/col-ghazal-contribute-modal';

export default function ColGhazalButtons() {
  const [openContributeModal, setOpenContributeModal] =
    useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get('contributing') === 'true') {
      setOpenContributeModal(true);
    }
  }, []);

  const setOpenContributeModalHandler = (value: boolean) => {
    setOpenContributeModal(value);
  };

  const handleContributeButtonClick = () => {
    setOpenContributeModal(true);
  };

  let contributeButton = (
    <Link
      className="hover:no-underline"
      href="/collective-ghazal?contributing=true"
    >
      <Button color="blue">Contribute</Button>
    </Link>
  );

  if (pathname === '/collective-ghazal') {
    contributeButton = (
      <Button onClick={handleContributeButtonClick} color="blue">
        Contribute
      </Button>
    );
  }

  return (
    <>
      <ColGhazalContributeModal
        setOpenContributeModalHandler={setOpenContributeModalHandler}
        openContributeModal={openContributeModal}
      />
      <p className="mb-4 text-center">
        Contribute your own verses or learn more about the art of
        ghazal-writing.
      </p>
      <div className="flex gap-2 justify-center">
        {contributeButton}
        <Button>Learn More</Button>
      </div>
    </>
  );
}
