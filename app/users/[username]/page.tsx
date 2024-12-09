import { notFound } from 'next/navigation';

import { getColGhazalEntriesByUser, getUser } from '@/lib/actions';
import { Avatar } from 'flowbite-react';
import ContributionsTable from '@/components/user/contributions-section/contributions-table';
import ContributionsSection from '@/components/user/contributions-section/contributions-section';
import HeaderSection from '@/components/user/header-section/header-section';

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
