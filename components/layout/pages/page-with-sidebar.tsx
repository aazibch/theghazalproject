import type { ReactNode } from 'react';
import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';

export default function PageWithSidebar({
  title,
  sidebar,
  children,
  contentClassName = 'h-[40rem]'
}: {
  title: string;
  sidebar: ReactNode;
  children: ReactNode;
  contentClassName?: string;
}) {
  return (
    <PageContainer>
      <PageHeader heading={title} />
      <div className={`flex border rounded-md mt-[-1rem] ${contentClassName}`}>
        {sidebar}
        {children}
      </div>
    </PageContainer>
  );
}
