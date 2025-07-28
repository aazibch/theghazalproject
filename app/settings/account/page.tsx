import EmailSettingsForm from '@/components/settings/account-settings/email-settings-form';
import PasswordSettingsForm from '@/components/settings/account-settings/password-settings-form';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import config from '@/app/api/auth/[...nextauth]/config';
import { getSignedInUser } from '@/lib/auth';

export default async function AccountSettingsPage() {
  const user = await getSignedInUser(config);

  return (
    <SettingsLayout>
      <div className="basis-full p-10">
        <EmailSettingsForm user={{ email: user!.email }} />
        <PasswordSettingsForm />
      </div>
    </SettingsLayout>
  );
}
