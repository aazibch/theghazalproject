'use client';

import Link from 'next/link';
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react';

// import { HiOutlineUserCircle } from 'react-icons/hi';
import { GoGear } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsGear } from 'react-icons/bs';
import { HiOutlineCog } from 'react-icons/hi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function SettingsSideBar() {
  return (
    <Sidebar
      aria-label="Settings sidebar"
      className="border-r"
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
