import {
  Footer,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterCopyright
} from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/logo.png';

const customLinkTheme = {
  href: 'text-gray-500'
};

export default function FooterComponent() {
  return (
    <Footer container className="rounded-none px-4" bgDark>
      <div className="w-full text-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full justify-between md:flex md:items-center md:justify-between">
            <Image
              src={Logo}
              alt="The Ghazal Project Logo"
              className="w-44 mt-2"
            />
            <FooterLinkGroup className="flex justify-center">
              <FooterLink as={Link} theme={customLinkTheme} href="/about">
                About
              </FooterLink>
              <FooterLink
                as={Link}
                theme={customLinkTheme}
                href="/privacy/policy"
              >
                Privacy Policy
              </FooterLink>
              <FooterLink as={Link} theme={customLinkTheme} href="/contact">
                Contact
              </FooterLink>
              <FooterLink
                as={Link}
                theme={customLinkTheme}
                href="https://www.aazibch.com/"
              >
                Developer
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider className="border-gray-700" />
        <div className="max-w-screen-xl mx-auto">
          <FooterCopyright
            theme={{
              href: 'ml-1 hover:underline text-gray-500'
            }}
            href="/"
            by="The Ghazal Project"
            year={2024}
          />
        </div>
      </div>
    </Footer>
  );
}
