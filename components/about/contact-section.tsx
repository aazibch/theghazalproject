import Link from 'next/link';

import { Button } from 'flowbite-react';
import { CONTACT_INTRO } from '@/constants';

export default function ContactSection() {
  return (
    <section className="py-24 px-4 bg-[url('/images/delhi-ceiling-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="mx-auto text-white">
        <h2 className="uppercase text-center text-xl mb-10">
          Want to Get In Touch?
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-8">{CONTACT_INTRO}</p>

          <div className="flex justify-center">
            <Link className="hover:no-underline" href="/contact">
              <Button color="blue" gradientDuoTone="purpleToBlue" pill>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
