import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import ProfileSettingsForm from '@/components/settings/profile-settings/profile-settings-form/profile-settings-form';
import config from '@/app/api/auth/[...nextauth]/config';
import { getSignedInUser } from '@/lib/auth';

export default async function ProfileSettingsPage() {
  const user = await getSignedInUser(config);

  return (
    <SettingsLayout>
      <div className="basis-full p-10">
        <ProfileSettingsForm
          user={{
            fullName: user!.fullName,
            username: user!.username,
            profilePicture: user!.profilePicture
          }}
        />
      </div>
    </SettingsLayout>
  );
}
