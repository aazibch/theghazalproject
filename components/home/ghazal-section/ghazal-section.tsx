import { Suspense } from 'react';

import ColGhazalButtons from '@/components/collective-ghazal/col-ghazal-buttons';
import GhazalCouplet from './ghazal-couplet';
import { getRecentColGhazalEntries } from '@/lib/actions';

export default async function GhazalSection() {
  const recentEntries = await getRecentColGhazalEntries();

  return (
    <section className="mx-auto text-center px-4 py-16">
      <h2 className="uppercase mb-2 text-xl">The Collective Ghazal</h2>
      <h3 className="text-lg mb-8 text-gray-500">Recent Entries</h3>
      <div className="mb-8">
        {recentEntries.map((e) => (
          <GhazalCouplet
            key={e._id}
            user={{
              fullName: e.user.fullName,
              username: e.user.username,
              avatar: e.user.profilePicture
            }}
            couplet={e.couplet}
          />
        ))}
      </div>
      <Suspense>
        <ColGhazalButtons />
      </Suspense>
    </section>
  );
}
