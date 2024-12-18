import { Button } from 'flowbite-react';
import Link from 'next/link';
import Banner from '../ui/banner';
import { ABOUT_INFO } from '@/constants';

export default function AboutSection() {
  return (
    <section>
      <Banner
        bgImage="/images/qutb-minar-ceiling-bg.png"
        heading="Want to Learn About Us?"
        contentText={ABOUT_INFO}
        contentButtons={
          <Link className="hover:no-underline" href="/about">
            <Button color="blue" gradientDuoTone="purpleToBlue" pill>
              Learn More
            </Button>
          </Link>
        }
      />
    </section>
  );
}
