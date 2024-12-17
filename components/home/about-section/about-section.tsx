import Banner from '@/components/ui/banner';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <Banner
      bgImage="/images/shahi-hammam-main-dome-bg.png"
      size="lg"
      heading="Learn More About Us"
      contentText="            The Ghazal Project was founded with the goal of promoting the rich
            artistic culture of Pakistan and the subcontinent, and to encourage
            cultural emalgamation through variants of the ghazal form, fit for
            adaption into English poetry, and to this end, we have partnered
            with Virsapur, an organization dedicated to reviving Pakistan's
            diverse cultural heritage."
      contentButtons={
        <Link className="hover:no-underline" href="/about">
          <Button color="blue" gradientDuoTone="purpleToBlue" size="lg" pill>
            Learn More
          </Button>
        </Link>
      }
    />
  );
}
