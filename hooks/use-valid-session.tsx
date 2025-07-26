import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export function useValidSession() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [changedPasswordAfterTokenStatus, setChangedPasswordAfterTokenStatus] =
    useState<boolean>();

  const { data, update, status } = useSession();

  const fetchChangedPasswordAfterTokenStatus = async () => {
    setIsFetching(true);

    const response = await fetch('/api/users/me/changed-password-after-token');

    if (response.ok) {
      const res = await response.json();

      setChangedPasswordAfterTokenStatus(res.changedPasswordAfterToken);
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

  if (status === 'loading' || isFetching) {
    return { session: undefined, status: 'loading', update };
  }

  if (changedPasswordAfterTokenStatus) {
    // signOut({ callbackUrl: '/', redirect: true });
    return { session: null, status: 'unauthenticated', update };
  }

  return {
    session: data,
    update,
    status
  };
}
