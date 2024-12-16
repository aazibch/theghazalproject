import NavLink from './nav-link';
import HeaderDropdown from './header-dropdown';
import { Navbar, NavbarBrand, NavbarCollapse } from 'flowbite-react';

export default async function Header() {
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
      <HeaderDropdown />

      <NavbarCollapse>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="/collective-ghazal">Collective Ghazal</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
