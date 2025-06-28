import { getServerSession } from 'next-auth';

import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import ProfileSettingsForm from '@/components/settings/profile-settings/profile-settings-form/profile-settings-form';
import config from '@/app/api/auth/[...nextauth]/config';
import { getUser } from '@/lib/actions';

export default async function ProfileSettingsPage() {
  const session = await getServerSession(config);

  const user = await getUser(
    session!.user.username,
    'fullName username profilePicture'
  );

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
