import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <div className="py-28 bg-[url('/images/shahi-hammam-main-dome-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto text-white">
        <h2 className="uppercase text-center text-xl mb-10">
          Learn More About Us
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8">
            The Ghazal Project was founded with the goal of promoting the rich
            artistic culture of Pakistan and the subcontinent, and to encourage
            cultural emalgamation through variants of the ghazal form, fit for
            adaption into English poetry, and to this end, we have partnered
            with Virsapur, an organization dedicated to reviving Pakistan&apos;s
            diverse cultural heritage.
          </p>

          <div className="flex justify-center">
            <Link className="hover:no-underline" href="/about">
              <Button
                color="blue"
                gradientDuoTone="purpleToBlue"
                size="lg"
                pill
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
