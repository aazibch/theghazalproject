'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { HiOutlineUserCircle } from 'react-icons/hi2';

export default function SettingsSidebar() {
  const path = usePathname();

  let sidebarRootClassNames = 'grow md:grow-0 md:basis-64';

  if (path.endsWith('profile') || path.endsWith('account')) {
    sidebarRootClassNames += ' hidden md:block';
  }

  return (
    <Sidebar
      aria-label="Settings sidebar"
      className="border-r shrink-0"
      theme={{
        root: {
          base: sidebarRootClassNames
        }
      }}
    >
      <SidebarItems className="w-full">
        <SidebarItemGroup>
          <SidebarItem
            active={path === '/settings/profile'}
            className="hover:no-underline"
            href="/settings/profile"
            icon={HiOutlineUserCircle}
            as={Link}
          >
            Profile
          </SidebarItem>
          <SidebarItem
            active={path === '/settings/account'}
            className="hover:no-underline"
            href="/settings/account"
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
