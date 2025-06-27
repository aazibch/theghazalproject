import { getServerSession } from 'next-auth';

import EmailSettingsForm from '@/components/settings/account-settings/email-settings-form';
import PasswordSettingsForm from '@/components/settings/account-settings/password-settings-form';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import config from '@/app/api/auth/[...nextauth]/config';
import User from '@/models/User';

export default async function AccountSettingsPage() {
  const session = await getServerSession(config);

  let user = await User.findById(session?.user._id).select('email');

  return (
    <SettingsLayout>
      <div className="basis-full p-10">
        <EmailSettingsForm user={{ email: user.email }} />
        <PasswordSettingsForm />
      </div>
    </SettingsLayout>
  );
}
