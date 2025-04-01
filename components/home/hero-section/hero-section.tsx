import Image from 'next/image';

import heroBanner from '@/assets/images/home/hero-banner.png';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import Banner from '@/components/ui/banner';

export default function HeroSection() {
  return (
    <section
      className="p-4 flex justify-center items-center h-[40rem] bg-no-repeat bg-center bg-cover bg-[#edebe6] text-white"
      style={{ backgroundImage: 'url(/images/turkish-ceiling-bg.png)' }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl mb-10">Learn. Create. Share.</h1>
        <p className="text-2xl mb-8">
          At <span className="font-semibold">The Ghazal Project</span>, we want
          to build a thriving community of creative individuals from all around
          the world, working together to explore and share the wonders of the
          English ghazal.
        </p>

        <div className="flex justify-center gap-4">
          <Link className="hover:no-underline" href="/auth/signup">
            <Button color="blue" gradientDuoTone="purpleToBlue" size="lg" pill>
              Join Us
            </Button>
          </Link>
          <Link className="hover:no-underline" href="/collective-ghazal">
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:bg-gradient-to-bl focus:ring-cyan-300" // Using gradientDuoTone for this effect doesn't work
              size="lg"
              pill
            >
              Contribute Verses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
