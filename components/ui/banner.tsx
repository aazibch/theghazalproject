import Image, { StaticImageData } from 'next/image';

interface BannerProps {
  size?: 'md' | 'lg';
  bgImage: StaticImageData;
  heading: string;
  contentText: React.ReactNode;
  contentButtons: React.ReactNode;
}

export default function Banner({
  size = 'md',
  bgImage,
  heading,
  contentText,
  contentButtons
}: BannerProps) {
  let parentClassNames = 'py-24 px-4 text-white relative';
  let contentTextClassNames = 'mb-6';

  if (size === 'lg') {
    parentClassNames = 'py-32 px-4 text-white relative';
    contentTextClassNames = 'mb-6 text-lg';
  }

  return (
    <div
      className={parentClassNames}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Image
        alt="Section background"
        src={bgImage}
        placeholder="blur"
        fill
        quality={100}
        className="object-cover"
      />
      <div className="relative z-10">
        <h2 className="uppercase text-center text-xl mb-8">{heading}</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className={contentTextClassNames}>{contentText}</p>

          <div className="flex justify-center">{contentButtons}</div>
        </div>
      </div>
    </div>
  );
}
