import ProfileSettings from '@/components/settings/profile-settings/profile-settings';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';

export default async function ProfileSettingsPage() {
  return (
    <SettingsLayout>
      <ProfileSettings />
    </SettingsLayout>
  );
}
