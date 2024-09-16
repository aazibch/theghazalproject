import Image from 'next/image';

import heroBanner from '@/assets/images/hero-banner.png';

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center h-[30rem] bg-[#edebe6]">
      <div className="basis-[30rem]">
        <Image
          src={heroBanner}
          alt='Hero banner with the text, "Where you can learn about the history of the ghazal,
and contribute your own verses."'
        />
      </div>
    </div>
  );
}
