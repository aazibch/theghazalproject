import Image from 'next/image';

interface StyledImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}

export default function StyledImage({
  src,
  width,
  height,
  alt,
  caption
}: StyledImageProps) {
  return (
    <figure>
      <Image
        className="rounded-md"
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
      {caption && (
        <figcaption className="mt-2 text-sm text-center text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
