import ColGhazalButtons from '@/components/collective-ghazal/col-ghazal-buttons';
import GhazalCouplet from './ghazal-couplet';
import { getRecentColGhazalEntries } from '@/lib/actions';

export default async function GhazalSection() {
  const recentEntries = await getRecentColGhazalEntries();

  return (
    <div className="container mx-auto text-center py-16">
      <h2 className="uppercase mb-8 text-xl">The Collective Ghazal</h2>
      <h3 className="text-lg mb-4 text-gray-500">Recent Entries</h3>

      <div className="mb-8">
        {recentEntries.map((e) => (
          <GhazalCouplet
            key={e._id}
            user={{ fullName: e.user.fullName, avatar: e.user.profilePicture }}
            couplet={e.couplet}
          />
        ))}
      </div>

      <p className="mb-4">
        Learn more about the collective ghazal project or contribute your own
        verses.
      </p>
      <ColGhazalButtons />
    </div>
  );
}
