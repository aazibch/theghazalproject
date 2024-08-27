'use client';

import { Button } from 'flowbite-react';

export default function AboutSection() {
  return (
    <div className="py-16 px-8 bg-[url('/images/shahi-hammam-main-dome-bg.png')] bg-no-repeat bg-center bg-cover">
      <div className="container mx-auto my-10 text-white">
        <h1 className="uppercase text-center text-xl mb-12">
          Learn More About Us
        </h1>
        <div className="max-w-[50rem] mx-auto text-center">
          <p className="text-xl mb-10">
            The Ghazal Project was started with the goal of promoting the rich
            artistic culture of Pakistan and the subcontinent, and to encourage
            cultural emalgamation through a variant of the ghazal form, fit for
            adaption into English poetry, and to this end, we have partnered
            with Virsapur, an organization dedicated to reviving Pakistan's
            diverse cultural heritage.
          </p>

          <div className="flex justify-center">
            <Button color="blue" gradientDuoTone="purpleToBlue" size="lg" pill>
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
