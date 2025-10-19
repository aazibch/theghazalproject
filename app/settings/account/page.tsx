import EmailSettingsForm from '@/components/settings/account-settings/email-settings-form';
import PasswordSettingsForm from '@/components/settings/account-settings/password-settings-form';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import config from '@/app/api/auth/[...nextauth]/config';
import { getValidServerSession } from '@/lib/auth';
import SettingsSubpageHeader from '@/components/settings/settings-layout/settings-subpage-header';

export default async function AccountSettingsPage() {
  const session = await getValidServerSession(config);

  return (
    <SettingsLayout>
      <div className="basis-full">
        <SettingsSubpageHeader heading="Account Settings" />
        <div className="p-10">
          <EmailSettingsForm user={{ email: session!.user.email }} />
          <PasswordSettingsForm />
        </div>
      </div>
    </SettingsLayout>
  );
}
