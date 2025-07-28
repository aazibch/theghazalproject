import { Navbar, NavbarBrand, NavbarCollapse } from 'flowbite-react';
import Image from 'next/image';

import NavLink from './nav-link';
import HeaderDropdown from './header-dropdown';

import Logo from '@/assets/logo.png';
import config from '@/app/api/auth/[...nextauth]/config';
import { getValidServerSession } from '@/lib/auth';

export default async function Header() {
  const session = await getValidServerSession(config);

  return (
    <Navbar
      theme={{
        link: { active: { on: 'text-primary_blue' } },
        root: {
          inner: {
            base: 'mx-auto max-w-screen-xl flex flex-wrap items-center justify-between'
          }
        }
      }}
      rounded
      border
    >
      <NavbarBrand className="hover:no-underline" href="/">
        <Image
          src={Logo}
          alt="The Ghazal Project Logo"
          className="w-44"
          priority
        />
      </NavbarBrand>
      <HeaderDropdown sessionUser={session?.user} />

      <NavbarCollapse>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/collective-ghazal">Collective Ghazal</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
