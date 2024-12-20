import Banner from '@/components/ui/banner';
import { ABOUT_INTRO_BRIEF } from '@/constants';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section>
      <Banner
        bgImage="/images/shahi-hammam-main-dome-bg.png"
        size="lg"
        heading="Learn More About Us"
        contentText={
          <>
            {ABOUT_INTRO_BRIEF} To this end, we have partnered with{' '}
            <Link
              className="text-white underline"
              href="https://www.instagram.com/virsapur/"
              target="_blank"
            >
              Virsapur
            </Link>
            , an organization dedicated to reviving Pakistan&apos;s diverse
            cultural heritage.
          </>
        }
        contentButtons={
          <Link className="hover:no-underline" href="/about">
            <Button color="blue" gradientDuoTone="purpleToBlue" size="lg" pill>
              Learn More
            </Button>
          </Link>
        }
      />
    </section>
  );
}
