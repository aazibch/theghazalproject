'use client';

import { UserSession } from '@/types';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function HeaderDropdown() {
  const router = useRouter();
  const { data: session } = useSession();

  const userSession = session as UserSession;

  return (
    <div className="flex md:order-2">
      <Dropdown
        theme={{
          inlineWrapper: 'flex items-center mr-2 md:mr-0'
        }}
        className="mr-4"
        arrowIcon={false}
        inline
        label={
          <Avatar
            img={userSession.user.profilePicture}
            alt="User settings"
            rounded
          />
        }
        placement="bottom-end"
      >
        <Dropdown.Header>
          <span className="block text-sm font-semibold">
            {userSession.user.fullName}
          </span>
          <span className="block truncate text-sm font-medium">
            <a href={`mailto:${userSession.user.email}`}>
              {userSession.user.email}
            </a>
          </span>
        </Dropdown.Header>
        <Dropdown.Item
          onClick={() => router.push(`/users/${userSession.user.username}`)}
        >
          Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => signOut({ callbackUrl: '/', redirect: true })}
        >
          Sign out
        </Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}
