import { IUser } from '@/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// Checks if password was changed after token issuance.
export function useValidSession() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [
    changedPasswordAfterSignInStatus,
    setChangedPasswordAfterSignInStatus
  ] = useState<boolean>();

  const { data, update, status } = useSession();

  const fetchChangedPasswordAfterSignInStatus = async () => {
    setIsFetching(true);

    const response = await fetch('/api/users/me/changed-password-after-token');

    if (response.ok) {
      const res = await response.json();

      setChangedPasswordAfterSignInStatus(res.changedPasswordAfterSignIn);
      setUser(res.user);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    if (changedPasswordAfterSignInStatus === undefined) {
      if (data) {
        fetchChangedPasswordAfterSignInStatus();
      }
    }
  }, [data, changedPasswordAfterSignInStatus]);

  if ((status === 'loading' || isFetching) && status !== 'unauthenticated') {
    return { update, session: undefined, user: null, status: 'loading' };
  }

  if (
    status === 'unauthenticated' ||
    changedPasswordAfterSignInStatus === false
  ) {
    return {
      update,
      session: data,
      user,
      status
    };
  }

  return {
    update,
    session: null,
    user: null,
    status: 'unauthenticated'
  };
}
