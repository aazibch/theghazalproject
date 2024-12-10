import { Avatar, Button } from 'flowbite-react';
import Link from 'next/link';
import { FiEdit } from 'react-icons/fi';

import { IUser } from '@/types';

export default function HeaderSection({ user }: { user: IUser }) {
  return (
    <header className="text-center border-gray-300 border-b py-12">
      <div className="container mx-auto">
        <div className="w-7 h-1 mb-4 bg-primary_blue"></div>

        <div className="relative group border">
          <Avatar
            className="mb-4"
            img={user.profilePicture}
            rounded
            size="xl"
          />
          <Button className="absolute rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <FiEdit />
          </Button>
        </div>
        <h2 className="text-lg">{user.fullName}</h2>
        <Link href={`/users/${user.username}`} className="text-sm">
          @{user.username}
        </Link>
      </div>
    </header>
  );
}
