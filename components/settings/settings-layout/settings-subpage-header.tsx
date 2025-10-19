'use client';

import { useRouter } from 'next/navigation';
import { IoIosArrowBack } from 'react-icons/io';

export default function SettingsSubpageHeader({
  heading
}: {
  heading: string;
}) {
  const router = useRouter();

  return (
    <header className="border-b p-4 flex md:hidden">
      <button
        onClick={() => {
          router.back();
        }}
      >
        <IoIosArrowBack size={24} />
      </button>
      <h3 className="grow text-lg text-center">{heading}</h3>
    </header>
  );
}
