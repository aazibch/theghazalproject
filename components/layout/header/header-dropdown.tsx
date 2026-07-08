'use client';

import { IUser } from '@/types';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarToggle
} from 'flowbite-react';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function HeaderDropdown({
  sessionUser
}: {
  sessionUser: IUser | undefined;
}) {
  const router = useRouter();

  return (
    <div className="flex md:order-2">
      {sessionUser ? (
        <Dropdown
          theme={{
            inlineWrapper: 'flex items-center mr-2 md:mr-0'
          }}
          className="mr-4"
          arrowIcon={false}
          inline
          label={
            <Avatar
              img={sessionUser.profilePicture}
              alt="User settings"
              rounded
            />
          }
          placement="bottom-end"
        >
          <DropdownHeader>
            <span className="block text-sm font-semibold">
              {sessionUser.fullName}
            </span>
            <span className="block truncate text-sm font-medium">
              <a href={`mailto:${sessionUser.email}`}>{sessionUser.email}</a>
            </span>
          </DropdownHeader>
          <DropdownItem
            onClick={() => router.push(`/users/${sessionUser.username}`)}
          >
            Profile
          </DropdownItem>
          <DropdownItem onClick={() => router.push('/settings')}>
            Settings
          </DropdownItem>
          {sessionUser.role === 'admin' && (
            <DropdownItem onClick={() => router.push('/admin/control-panel')}>
              Control Panel
            </DropdownItem>
          )}
          <DropdownItem
            onClick={() => signOut({ callbackUrl: '/', redirect: true })}
          >
            Sign out
          </DropdownItem>
        </Dropdown>
      ) : (
        <Link className="hover:no-underline" href="/auth/login">
          <Button
            className="hover:bg-gradient-to-bl hover:from-purple-600 hover:to-blue-500 focus:ring-blue-300 hover:border-0"
            color="blue"
            outline
          >
            <HiOutlineUserCircle className="mr-1 h-5 w-5" />
            Login
          </Button>
        </Link>
      )}

      <NavbarToggle className="ml-2" />
    </div>
  );
}
