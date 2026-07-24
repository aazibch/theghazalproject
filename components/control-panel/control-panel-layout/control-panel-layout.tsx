import PageWithSidebar from '@/components/layout/pages/page-with-sidebar';
import ControlPanelSidebar from './control-panel-sidebar';

export default function ControlPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <PageWithSidebar title="Control Panel" sidebar={<ControlPanelSidebar />}>
      {children}
    </PageWithSidebar>
  );
}
