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
    <Footer className="rounded-none" container bgDark>
      <div className="w-full text-center">
        <div className="container mx-auto">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <span className="block mb-2 sm:mb-0 self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
              The Ghazal Project
            </span>
            <FooterLinkGroup className="flex justify-center">
              <FooterLink as={Link} theme={customLinkTheme} href="#">
                About
              </FooterLink>
              <FooterLink as={Link} theme={customLinkTheme} href="#">
                Privacy Policy
              </FooterLink>
              <FooterLink as={Link} theme={customLinkTheme} href="#">
                Contact
              </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <FooterDivider className="border-gray-700" />
        <div className="container mx-auto">
          <FooterCopyright
            theme={{
              href: 'ml-1 hover:underline text-gray-500'
            }}
            href="#"
            by="The Ghazal Project"
            year={2024}
          />
        </div>
      </div>
    </Footer>
  );
}
