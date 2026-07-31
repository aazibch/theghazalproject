'use client';

import Link from 'next/link';

import { IUser } from '@/types';
import AvatarWithEditButton from './avatar-with-edit-button/avatar-with-edit-button';
import { use, useState } from 'react';

export default function HeaderSection({ user }: { user: IUser }) {
  const [avatarFormKey, setAvatarFormKey] = useState<number>(0);

  const updateAvatarFormKey = () => {
    setAvatarFormKey((prevState) => prevState + 1);
  };

  return (
    <header className="text-center border-gray-300 border-b py-12">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="w-7 h-1 mb-4 bg-primary_blue"></div>

        <AvatarWithEditButton
          key={avatarFormKey}
          resetFormHandler={updateAvatarFormKey}
          avatarSrc={user.profilePicture}
        />
        <h2 className="text-lg">{user.fullName}</h2>
        <Link href={`/users/${user.username}`} className="text-sm">
          @{user.username}
        </Link>
        {user.bio && (
          <div
            className="text-sm mt-4"
            dangerouslySetInnerHTML={{
              __html: user.bio.replace(/\n/g, '<br/>')
            }}
          ></div>
        )}
      </div>
    </header>
  );
}
