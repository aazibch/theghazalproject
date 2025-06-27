import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import SettingsSidebar from './settings-sidebar';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <PageHeader heading="Settings" />
      <div className="flex border min-h-[40rem] rounded-md mt-[-1rem]">
        <SettingsSidebar />
        {children}
      </div>
    </PageContainer>
  );
}
