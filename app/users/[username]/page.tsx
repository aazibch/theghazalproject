import { notFound } from 'next/navigation';

import { getColGhazalEntriesByUser, getUser } from '@/lib/actions';
import ContributionsSection from '@/components/user/contributions-section/contributions-section';
import HeaderSection from '@/components/user/header-section/header-section';

type PageProps = { params: Promise<{ username: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { username } = await params;

  const user = await getUser(username);

  return {
    title: `${user?.fullName} (${user?.username}) | The Ghazal Project`
  };
}

export default async function UserPage({
  params
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  const user = await getUser(username);

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
