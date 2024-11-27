import GhazalCouplet from '@/components/home/ghazal-section/ghazal-couplet';
import PageHeader from '@/components/layout/pages/page-header';
import { getColGhazalEntries } from '@/lib/actions';

export default async function CollectiveGhazal() {
  const entries = await getColGhazalEntries();

  return (
    <div className="container mx-auto my-12">
      <PageHeader heading="Collective Ghazal" />
      {entries.map((e) => (
        <GhazalCouplet
          key={e._id}
          user={{ fullName: e.user.fullName, avatar: e.user.profilePicture }}
          couplet={e.couplet}
        />
      ))}
    </div>
  );
}
