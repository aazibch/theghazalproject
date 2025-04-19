'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { HiOutlineCheck } from 'react-icons/hi2';

export default function EmailSuccessScreen() {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push('/');
    }, 1500);
  }, [push]);

  return (
    <div className="text-center my-20 mx-4">
      <HiOutlineCheck size={125} className="text-gray-500 m-auto" />
      <div className="text-base leading-relaxed text-gray-500">
        <p className="mb-4">Your email address was successfully confirmed.</p>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}
