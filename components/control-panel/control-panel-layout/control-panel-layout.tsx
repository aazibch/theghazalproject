import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import ControlPanelSidebar from './control-panel-sidebar';

export default function ControlPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <PageContainer>
      <PageHeader heading="Control Panel" />
      <div className="flex border rounded-md mt-[-1rem] h-[40rem]">
        <ControlPanelSidebar />
        {/* <div className="m-5 w-full overflow-x-auto">{children}</div> */}
        {children}
      </div>
    </PageContainer>
  );
}
