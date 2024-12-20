import { notFound } from 'next/navigation';

import { getColGhazalEntriesByUser, getUser } from '@/lib/actions';
import ContributionsSection from '@/components/user/contributions-section/contributions-section';
import HeaderSection from '@/components/user/header-section/header-section';

type PageProps = { params: { username: string } };

export async function generateMetadata({ params }: PageProps) {
  const user = await getUser(params.username);

  return {
    title: `${user?.fullName} (${user?.username}) | The Ghazal Project`
  };
}

export default async function UserPage({
  params
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);

  if (!user) {
    notFound();
  }

  const contributions = await getColGhazalEntriesByUser(user._id.toString());

  return (
    <div>
      <HeaderSection user={user} />
      <ContributionsSection contributions={contributions} />
    </div>
  );
}
