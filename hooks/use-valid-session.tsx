import { IUser } from '@/types';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

// Checks if password was changed after token issuance.
export function useValidSession() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [changedPasswordAfterTokenStatus, setChangedPasswordAfterTokenStatus] =
    useState<boolean>();

  const { data, update, status } = useSession();

  const fetchChangedPasswordAfterTokenStatus = async () => {
    setIsFetching(true);

    const response = await fetch('/api/users/me/changed-password-after-token');

    if (response.ok) {
      const res = await response.json();

      setChangedPasswordAfterTokenStatus(res.changedPasswordAfterToken);
      setUser(res.user);
    }

    setIsFetching(false);
  };

  useEffect(() => {
    if (changedPasswordAfterTokenStatus === undefined) {
      if (data) {
        fetchChangedPasswordAfterTokenStatus();
      }
    }
  }, [data, changedPasswordAfterTokenStatus]);

  if ((status === 'loading' || isFetching) && status !== 'unauthenticated') {
    return { update, session: undefined, user: null, status: 'loading' };
  }

  if (
    status === 'unauthenticated' ||
    changedPasswordAfterTokenStatus === false
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
