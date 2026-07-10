'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react';
import { HiOutlineUserGroup } from 'react-icons/hi2';

export default function ControlPanelSidebar() {
  const path = usePathname();

  let sidebarRootClassNames = 'grow md:grow-0 md:basis-64';

  if (path.endsWith('collective-ghazal')) {
    sidebarRootClassNames += ' hidden md:block';
  }

  return (
    <Sidebar
      aria-label="Control panel sidebar"
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
            active={path === '/admin/control-panel/collective-ghazal'}
            className="hover:no-underline"
            href="/admin/control-panel/collective-ghazal"
            icon={HiOutlineUserGroup}
            as={Link}
          >
            Collective Ghazal
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
