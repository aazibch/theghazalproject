import { getServerSession } from 'next-auth';

import EmailSettingsForm from './email-settings-form';
import PasswordSettingsForm from './password-settings-form';
import config from '@/app/api/auth/[...nextauth]/config';

export default async function AccountSettings() {
  const session = await getServerSession(config);

  let user = {
    email: session!.user.email
  };

  return (
    <div className="basis-full p-10">
      <EmailSettingsForm user={user} />
      <PasswordSettingsForm />
    </div>
  );
}
