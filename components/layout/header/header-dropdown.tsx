'use client';

import { UserSession } from '@/types';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function HeaderDropdown({
  authSession
}: {
  authSession: UserSession;
}) {
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
            img={authSession.user.profilePicture}
            alt="User settings"
            rounded
          />
        }
        placement="bottom-end"
      >
        <Dropdown.Header>
          <span className="block text-sm font-semibold">
            {authSession.user.fullName}
          </span>
          <span className="block truncate text-sm font-medium">
            {authSession.user.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Profile</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
  );
}
