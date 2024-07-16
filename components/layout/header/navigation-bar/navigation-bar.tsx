'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';

export default function NavigationBar() {
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
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Dropdown
          label="Articles"
          inline
          theme={{
            inlineWrapper:
              'flex items-center text-gray-700 hover:text-cyan-700',
            arrowIcon: 'ml-1 h-4 w-4'
          }}
        >
          <Dropdown.Item>How to Write a Ghazal</Dropdown.Item>
          <Dropdown.Item>Instructions on Contributing</Dropdown.Item>
          <Dropdown.Item>History of the Ghazal</Dropdown.Item>
        </Dropdown>
        <Navbar.Link href="#">Contribute</Navbar.Link>
        <Navbar.Link href="#">About Us</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
