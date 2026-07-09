'use client';

import Link from 'next/link';
import { Navbar, NavbarLink } from 'flowbite-react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <NavbarLink
      className="hover:no-underline border-gray-100 border-b"
      as={Link}
      href={href}
      active={
        (path.startsWith(href) && href !== '/') ||
        (path === '/' && href === '/')
      }
    >
      {children}
    </NavbarLink>
  );
}
