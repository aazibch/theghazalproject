import Image from 'next/image';

interface StyledImageProps {
  src: string;
  width: number;
  height: number;
  priority?: boolean;
  alt: string;
  caption?: string;
}

export default function StyledImage({
  src,
  width,
  height,
  priority,
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
        priority={priority}
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
