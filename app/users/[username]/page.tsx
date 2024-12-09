import { notFound } from 'next/navigation';

import { getColGhazalEntriesByUser, getUser } from '@/lib/actions';
import { Avatar } from 'flowbite-react';
import ContributionsTable from '@/components/user/contributions-section/contributions-table';
import ContributionsSection from '@/components/user/contributions-section/contributions-section';

export default async function UserPage({
  params
}: {
  params: { username: string };
}) {
  const user = await getUser(params.username);

  if (!user) {
    notFound();
  }

  const contributionsByuser = await getColGhazalEntriesByUser(
    user._id.toString()
  );

  return (
    <div className="my-12">
      <header className="text-center border-gray-300 border-b pb-8">
        <div className="container mx-auto">
          <div className="w-7 h-1 mb-4 bg-primary_blue"></div>

          <Avatar
            className="mb-4"
            img={user.profilePicture}
            rounded
            size="xl"
          />
          <h2 className="text-lg mb-1">{user.fullName}</h2>
          <h3 className="text-sm">@{user.username}</h3>
        </div>
      </header>
      <ContributionsSection />
    </div>
  );
}
