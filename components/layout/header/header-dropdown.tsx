'use client';

import { IUser } from '@/types';
import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react';
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
          <Dropdown.Header>
            <span className="block text-sm font-semibold">
              {sessionUser.fullName}
            </span>
            <span className="block truncate text-sm font-medium">
              <a href={`mailto:${sessionUser.email}`}>{sessionUser.email}</a>
            </span>
          </Dropdown.Header>
          <Dropdown.Item
            onClick={() => router.push(`/users/${sessionUser.username}`)}
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => signOut({ callbackUrl: '/', redirect: true })}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      ) : (
        <Link className="hover:no-underline" href="/auth/login">
          <Button color="blue" gradientDuoTone="purpleToBlue" outline>
            <HiOutlineUserCircle className="mr-1 h-5 w-5" />
            Login
          </Button>
        </Link>
      )}

      <Navbar.Toggle className="ml-2" />
    </div>
  );
}
