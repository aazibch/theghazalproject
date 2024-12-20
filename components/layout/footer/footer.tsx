import {
  Footer,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterCopyright
} from 'flowbite-react';
import Link from 'next/link';

const customLinkTheme = {
  href: 'text-gray-500'
};

export default function FooterComponent() {
  return (
    <Footer container className="rounded-none px-4" bgDark>
      <div className="w-full text-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="w-full justify-between md:flex md:items-center md:justify-between">
            <span className="block mt-2 mb-4 md:mt-0 md:mb-0 self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
              The Ghazal Project
            </span>
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
