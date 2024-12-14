import Link from 'next/link';
import Image from 'next/image';

interface ArticlePreviewProps {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  date: string;
  author: string;
  excerpt: string;
}

export default function ArticlePreview({
  slug,
  title,
  image,
  imageAlt,
  date,
  author,
  excerpt
}: ArticlePreviewProps) {
  const articleLink = `/articles/${slug}`;
  const isoDate = new Date(date).toISOString().split('T')[0];

  return (
    <div className="mb-8 flex">
      <div className="mr-5 shrink-0 basis-[25rem] hidden md:block">
        <Image
          width={960}
          height={540}
          className="w-full rounded-md"
          src={image}
          alt={imageAlt}
        />
      </div>
      <div>
        <header className="mb-4">
          <h3 className="text-xl mb-1">
            <Link href={articleLink}>{title}</Link>
          </h3>

          <div className="text-sm">
            <span>By {author}</span> · <time dateTime={isoDate}>{date}</time>
          </div>
        </header>

        <div>
          <p>
            {excerpt} <Link href={articleLink}>continue...</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
