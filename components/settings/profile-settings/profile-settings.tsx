import { getServerSession } from 'next-auth';
import ProfileSettingsForm from './profile-settings-form/profile-settings-form';
import config from '@/app/api/auth/[...nextauth]/config';

export default async function ProfileSettings() {
  const session = await getServerSession(config);

  let user = {
    username: session?.user.username,
    fullName: session?.user.fullName,
    profilePicture: session?.user.profilePicture
  };

  return (
    <div className="basis-full p-10">
      <ProfileSettingsForm user={user} />
    </div>
  );
}
