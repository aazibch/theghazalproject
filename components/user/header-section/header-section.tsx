import { IUser } from '@/types';
import { Avatar } from 'flowbite-react';
import Link from 'next/link';

export default function HeaderSection({ user }: { user: IUser }) {
  return (
    <header className="text-center border-gray-300 border-b py-12">
      <div className="container mx-auto">
        <div className="w-7 h-1 mb-4 bg-primary_blue"></div>

        <Avatar className="mb-4" img={user.profilePicture} rounded size="xl" />
        <h2 className="text-lg">{user.fullName}</h2>
        <Link href={`/users/${user.username}`} className="text-sm">
          @{user.username}
        </Link>
      </div>
    </header>
  );
}
