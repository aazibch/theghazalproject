'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { HiOutlineCheck } from 'react-icons/hi';

export default function EmailSuccessScreen() {
  const { push } = useRouter();
  const { update, data: session } = useSession();

  const userId = session?.user._id;

  const cachedUpdate = useCallback(() => {
    update();
  }, [userId]);

  useEffect(() => {
    if (userId) {
      cachedUpdate();

      setTimeout(() => {
        push('/');
      }, 1500);
    }
  }, [userId, cachedUpdate, push]);

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
