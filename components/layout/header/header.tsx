import { Button, Navbar, NavbarBrand, NavbarCollapse } from 'flowbite-react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import NavLink from './nav-link';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import config from '@/app/api/auth/[...nextauth]/config';
import { UserSession } from '@/types';
import HeaderDropdown from './header-dropdown';

export default async function Header() {
  const session = (await getServerSession(config)) as UserSession | null;

  return (
    <Navbar
      theme={{ link: { active: { on: 'text-primary_blue' } } }}
      rounded
      border
    >
      <NavbarBrand className="hover:no-underline" href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
          The Ghazal Project
        </span>
      </NavbarBrand>
      {session ? (
        <HeaderDropdown />
      ) : (
        <div className="flex md:order-2">
          <Link className="hover:no-underline" href="/auth/login">
            <Button color="blue" gradientDuoTone="purpleToBlue" outline>
              <HiOutlineUserCircle className="mr-1 h-5 w-5" />
              Login
            </Button>
          </Link>
        </div>
      )}

      <NavbarCollapse>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/collective-ghazal">Collective Ghazal</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
