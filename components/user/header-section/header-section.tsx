import { Avatar, Button } from 'flowbite-react';
import Link from 'next/link';

import { IUser } from '@/types';
import AvatarWithEditButton from './avatar-with-edit-button';

export default function HeaderSection({ user }: { user: IUser }) {
  return (
    <header className="text-center border-gray-300 border-b py-12">
      <div className="container mx-auto">
        <div className="w-7 h-1 mb-4 bg-primary_blue"></div>

        <AvatarWithEditButton avatarSrc={user.profilePicture} />
        <h2 className="text-lg">{user.fullName}</h2>
        <Link href={`/users/${user.username}`} className="text-sm">
          @{user.username}
        </Link>
      </div>
    </header>
  );
}
