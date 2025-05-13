import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import AccountSettings from '@/components/settings/account-settings/account-settings';
import ProfileSettings from '@/components/settings/profile-settings/profile-settings';
import SettingsLayout from '@/components/settings/settings-layout/settings-layout';
import SideBar from '@/components/settings/settings-layout/settings-sidebar';

export default function ProfileSettingsPage() {
  return (
    <SettingsLayout>
      <ProfileSettings />
    </SettingsLayout>
  );
}
