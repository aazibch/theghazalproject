import { getServerSession } from 'next-auth';

import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import ProfileSettingsForm from '@/components/settings/profile-settings/profile-settings-form/profile-settings-form';
import config from '@/app/api/auth/[...nextauth]/config';
import User from '@/models/User';

export default async function ProfileSettingsPage() {
  const session = await getServerSession(config);

  const user = await User.findById(session?.user._id).select(
    'fullName username profilePicture'
  );

  return (
    <SettingsLayout>
      <div className="basis-full p-10">
        <ProfileSettingsForm
          user={{
            fullName: user.fullName,
            username: user.username,
            profilePicture: user.profilePicture
          }}
        />
      </div>
    </SettingsLayout>
  );
}
