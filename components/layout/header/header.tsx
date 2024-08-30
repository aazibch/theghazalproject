'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import NavLink from './nav-link';

export default function Header() {
  return (
    <Navbar
      theme={{ link: { active: { on: 'text-primary_blue' } } }}
      rounded
      border
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
          The Ghazal Project
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Aazib Chaudhry</span>
            <span className="block truncate text-sm font-medium">
              aazibch@theghazalproject.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="#">Contribute</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Contact</NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
