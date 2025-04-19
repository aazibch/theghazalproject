import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import SideBar from '@/components/settings/settings-sidebar';

export default function SettingsPage() {
  return (
    <PageContainer>
      <PageHeader heading="Settings" />
      <div className="flex border h-[40rem] rounded">
        <SideBar />
        <div>MainContent</div>
      </div>
    </PageContainer>
  );
}
