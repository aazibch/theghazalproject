import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import ProfileSettingsForm from '@/components/settings/profile-settings/profile-settings-form/profile-settings-form';
import SettingsSubpageHeader from '@/components/settings/settings-layout/settings-subpage-header';
import config from '@/app/api/auth/[...nextauth]/config';
import { getValidServerSession } from '@/lib/auth';

export default async function ProfileSettingsPage() {
  const session = await getValidServerSession(config);

  return (
    <SettingsLayout>
      <div className="basis-full">
        <SettingsSubpageHeader heading="Profile Settings" />
        <div className="p-10">
          <ProfileSettingsForm
            user={{
              fullName: session!.user.fullName,
              username: session!.user.username,
              profilePicture: session!.user.profilePicture
            }}
          />
        </div>
      </div>
    </SettingsLayout>
  );
}
