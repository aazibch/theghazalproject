'use client';

import Link from 'next/link';
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react';

import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function SettingsSideBar() {
  return (
    <Sidebar
      aria-label="Settings sidebar"
      className="border-r shrink-0"
      // theme={{
      //   root: {
      //     base: 'h-full',
      //     collapsed: {
      //       off: 'w-full'
      //     }
      //   }
      // }}
    >
      <SidebarItems className="w-full">
        <SidebarItemGroup>
          <SidebarItem
            className="hover:no-underline"
            href="/"
            icon={HiOutlineUserCircle}
            as={Link}
          >
            Profile
          </SidebarItem>
          <SidebarItem
            className="hover:no-underline"
            href="#"
            icon={HiOutlineCog6Tooth}
            as={Link}
          >
            Account
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
