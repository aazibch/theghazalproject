import { Suspense } from 'react';

import ColGhazalButtons from '@/components/collective-ghazal/col-ghazal-buttons';
import ColGhazalIntro from '@/components/collective-ghazal/col-ghazal-intro';
import GhazalCouplet from '@/components/home/ghazal-section/ghazal-couplet';
import PageContainer from '@/components/layout/pages/page-container';
import PageHeader from '@/components/layout/pages/page-header';
import ScrollToBottomButton from '@/components/ui/scroll-to-bottom-button';
import { getColGhazalEntries } from '@/lib/actions';

export default async function CollectiveGhazalPage() {
  const entries = await getColGhazalEntries();

  return (
    <PageContainer>
      <PageHeader heading="Collective Ghazal" />
      <ColGhazalIntro />
      <div className="border-gray-300 border-b pb-4 mb-8">
        {entries.map((e) => (
          <GhazalCouplet
            key={e._id}
            user={{
              fullName: e.user.fullName,
              username: e.user.username,
              avatar: e.user.profilePicture
            }}
            couplet={e.couplet}
            id={e._id}
          />
        ))}
      </div>
      <Suspense>
        <ColGhazalButtons />
      </Suspense>
      <ScrollToBottomButton />
    </PageContainer>
  );
}
