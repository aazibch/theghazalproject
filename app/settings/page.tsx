import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import ProfileSettings from '@/components/settings/profile-settings/profile-settings';
import SideBar from '@/components/settings/settings-sidebar';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader heading="Settings" />
      <div className="flex border h-[40rem] rounded-md">
        <SideBar />
        <ProfileSettings />
      </div>
    </PageContainer>
  );
}
