import { Button, Navbar, NavbarBrand, NavbarCollapse } from 'flowbite-react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import NavLink from './nav-link';
import Link from 'next/link';

export default function Header() {
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
      {/* <div className="flex md:order-2">
        <Dropdown
          theme={{
            inlineWrapper: 'flex items-center mr-2 md:mr-0'
          }}
          className="mr-4"
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
      </div> */}

      <div className="flex md:order-2">
        <Link className="hover:no-underline" href="/auth/login">
          <Button color="blue" gradientDuoTone="purpleToBlue" outline>
            <HiOutlineUserCircle className="mr-1 h-5 w-5" />
            Login
          </Button>
        </Link>
      </div>
      <NavbarCollapse>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/articles">Articles</NavLink>
        <NavLink href="#">Contribute</NavLink>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Contact</NavLink>
      </NavbarCollapse>
    </Navbar>
  );
}
