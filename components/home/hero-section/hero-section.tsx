import Link from 'next/link';
import { Button } from 'flowbite-react';
import Image from 'next/image';
import turkishCeilingBg from '@/assets/images/background-images/turkish-ceiling-bg.png';

export default function HeroSection() {
  return (
    <section className="p-6 flex justify-center items-center h-[40rem] bg-[#edebe6] text-white relative">
      <Image
        alt="Ceiling background"
        src={turkishCeilingBg}
        placeholder="blur"
        fill
        quality={100}
        className="object-cover object-[50%_45%]"
      />
      <div className="text-center max-w-4xl mx-auto z-10">
        <h1 className="text-3xl md:text-4xl mb-10">Learn. Create. Share.</h1>
        <p className="text-xl md:text-2xl mb-8">
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
