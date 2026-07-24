'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems
} from 'flowbite-react';
import type { IconType } from 'react-icons';

export interface SidebarNavItem {
  href: string;
  label: string;
  icon: IconType;
  hiddenOn?: string[];
}

export default function SidebarNav({
  label,
  items,
  hiddenOn = []
}: {
  label: string;
  items: SidebarNavItem[];
  hiddenOn?: string[];
}) {
  const path = usePathname();

  let sidebarRootClassNames = 'grow md:grow-0 md:basis-64';

  if (hiddenOn.some((segment) => path.endsWith(segment))) {
    sidebarRootClassNames += ' hidden md:block';
  }

  return (
    <Sidebar
      aria-label={label}
      className="border-r shrink-0"
      theme={{
        root: {
          base: sidebarRootClassNames
        }
      }}
    >
      <SidebarItems className="w-full">
        <SidebarItemGroup>
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              active={path === item.href}
              className="hover:no-underline"
              href={item.href}
              icon={item.icon}
              as={Link}
            >
              {item.label}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
