import Image from 'next/image';

import heroBanner from '@/assets/images/hero-banner.png';

export default function Hero() {
  return (
    <div className="flex h-[40rem]">
      <Image
        className="block w-[full] object-cover"
        src={heroBanner}
        alt='Hero banner with the text, "Where you can learn about the history of the ghazal,
and contribute your own verses."'
      />
    </div>
  );
}
