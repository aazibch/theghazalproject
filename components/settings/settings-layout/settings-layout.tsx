import PageWithSidebar from '@/components/layout/pages/page-with-sidebar';
import SettingsSidebar from './settings-sidebar';

export default function SettingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWithSidebar
      title="Settings"
      sidebar={<SettingsSidebar />}
      contentClassName="h-[45rem]"
    >
      {children}
    </PageWithSidebar>
  );
}
