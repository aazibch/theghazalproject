'use client';

import { Footer as FooterComponent } from 'flowbite-react';

export default function Footer() {
  return (
    <FooterComponent className="rounded-none" bgDark>
      <div className="w-full text-center">
        <div className="px-6 py-8">
          <div className="container mx-auto">
            <div className="w-full items-center justify-between sm:flex sm:items-center sm:justify-between">
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-primary_blue font-crimson_text">
                The Ghazal Project
              </span>
              <FooterComponent.LinkGroup className="text-white">
                <FooterComponent.Link href="#">About</FooterComponent.Link>
                <FooterComponent.Link href="#">
                  Privacy Policy
                </FooterComponent.Link>
                <FooterComponent.Link href="#">Contact</FooterComponent.Link>
              </FooterComponent.LinkGroup>
            </div>
          </div>
        </div>
        <div className="bg-gray-700 px-4 py-6">
          <div className="container mx-auto">
            <FooterComponent.Copyright
              href="#"
              by="The Ghazal Project"
              year={2024}
            />
          </div>
        </div>
      </div>
    </FooterComponent>
  );
}
