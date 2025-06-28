import Link from 'next/link';
import { Button } from 'flowbite-react';

import { CONTACT_INTRO } from '@/constants';
import Banner from '../ui/banner';
import delhiCeilingBg from '@/assets/images/background-images/delhi-ceiling-bg.png';

export default function ContactSection() {
  return (
    <section>
      <Banner
        bgImage={delhiCeilingBg}
        heading="Want to Get In Touch?"
        contentText={CONTACT_INTRO}
        contentButtons={
          <Link className="hover:no-underline" href="/contact">
            <Button color="blue" gradientDuoTone="purpleToBlue" pill>
              Contact Us
            </Button>
          </Link>
        }
      />
    </section>
  );
}
