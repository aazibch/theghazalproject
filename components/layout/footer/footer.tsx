'use client';

import { Footer } from 'flowbite-react';
import Link from 'next/link';

const customLinkTheme = {
  href: 'text-gray-500'
};

export default function FooterComponent() {
  return (
    <Footer className="rounded-none" bgDark>
      <div className="w-full text-center">
        <div className="px-6 py-8">
          <div className="container mx-auto">
            <div className="w-full items-center justify-between sm:flex sm:items-center sm:justify-between">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
                The Ghazal Project
              </span>
              <Footer.LinkGroup>
                <Footer.Link as={Link} theme={customLinkTheme} href="#">
                  About
                </Footer.Link>
                <Footer.Link as={Link} theme={customLinkTheme} href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link as={Link} theme={customLinkTheme} href="#">
                  Contact
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 text-gray-500 px-4 py-6">
          <div className="container mx-auto">
            <Footer.Copyright
              theme={{
                href: 'ml-1 text-gray-500 hover:underline'
              }}
              href="/"
              by="The Ghazal Project"
              year={2024}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
