import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import AccountSettings from '@/components/settings/account-settings/account-settings';
import SideBar from '@/components/settings/settings-sidebar';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader heading="Settings" />
      <div className="flex border min-h-[40rem] rounded-md">
        <SideBar />
        <AccountSettings />
      </div>
    </PageContainer>
  );
}
