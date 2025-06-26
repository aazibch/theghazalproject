import { getServerSession } from 'next-auth';

import { getUser } from '@/lib/actions';
import config from '@/app/api/auth/[...nextauth]/config';
import AccountSettings from '@/components/settings/account-settings/account-settings';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';

export default async function AccountSettingsPage() {
  const session = await getServerSession(config);

  const user = await getUser(session!.user.username);

  return (
    <SettingsLayout>
      <AccountSettings user={{ email: user!.email }} />
    </SettingsLayout>
  );
}
