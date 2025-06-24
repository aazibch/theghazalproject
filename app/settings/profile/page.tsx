import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import ProfileSettings from '@/components/settings/profile-settings/profile-settings';
import { getUser } from '@/lib/actions';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';

export default async function ProfileSettingsPage() {
  const session = await getServerSession(config);

  const user = await getUser(session!.user.username);

  return (
    <SettingsLayout>
      <div className="basis-full p-10">
        <ProfileSettings
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
