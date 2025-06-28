import { Button } from 'flowbite-react';
import Link from 'next/link';

import Banner from '@/components/ui/banner';
import shahiHammamBg from '@/assets/images/background-images/shahi-hammam-main-dome-bg.png';

export default function AboutSection() {
  return (
    <section>
      <Banner
        bgImage={shahiHammamBg}
        size="lg"
        heading="Get to Know Us"
        contentText={
          <>
            <span className="font-semibold">The Ghazal Project</span> aims to
            promote the rich artistic culture of Pakistan and the subcontinent
            by encouraging cultural amalgamation through variants of the ghazal
            form, fit for adaptation into the English language. To this end, we
            have partnered with{' '}
            <Link
              className="text-white underline"
              href="https://www.instagram.com/virsapur/"
              target="_blank"
            >
              <span className="font-semibold">Virsapur</span>
            </Link>
            , an organization dedicated to reviving Pakistan&apos;s diverse
            cultural heritage.
          </>
        }
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
