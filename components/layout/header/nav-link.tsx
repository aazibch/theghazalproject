'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  const path = usePathname();

  return (
    <Navbar.Link
      as={Link}
      href={href}
      active={
        (path.startsWith(href) && href !== '/') ||
        (path === '/' && href === '/')
      }
    >
      {children}
    </Navbar.Link>
  );
}
