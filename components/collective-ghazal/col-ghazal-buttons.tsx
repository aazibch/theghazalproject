'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams
} from 'next/navigation';
import { Button } from 'flowbite-react';
import { useSession } from 'next-auth/react';

import ContributeModal from './contribute-modal/contribute-modal';

export default function ColGhazalButtons() {
  const [openContributeModal, setOpenContributeModal] =
    useState<boolean>(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (searchParams.get('contributing') === 'true') {
      setOpenContributeModal(true);
    }
  }, []);

  const setOpenContributeModalHandler = (value: boolean) => {
    setOpenContributeModal(value);
  };

  const handleContributeButtonClick = () => {
    if (!session) {
      router.push('/auth/login');
      return;
    }

    setOpenContributeModal(true);
  };

  let contributeButton = (
    <Button onClick={handleContributeButtonClick} color="blue">
      Contribute
    </Button>
  );

  if (pathname === '/' && session) {
    contributeButton = (
      <Link
        className="hover:no-underline"
        href="/collective-ghazal?contributing=true"
      >
        <Button color="blue">Contribute</Button>
      </Link>
    );
  }

  return (
    <>
      <ContributeModal
        setOpenContributeModalHandler={setOpenContributeModalHandler}
        openContributeModal={openContributeModal}
      />
      <p className="mb-4 text-center">
        Contribute your own verses or learn more about the art of
        ghazal-writing.
      </p>
      <div className="flex gap-2 justify-center">
        {contributeButton}
        <Link
          className="hover:no-underline"
          href="/articles/how-to-write-english-ghazal"
        >
          <Button>Learn More</Button>
        </Link>
      </div>
    </>
  );
}
