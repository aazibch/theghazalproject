import Link from 'next/link';

interface ArticlePreviewProps {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
}

export default function ArticlePreview({
  slug,
  title,
  date,
  author,
  excerpt
}: ArticlePreviewProps) {
  const articleLink = `/articles/${slug}`;
  const isoDate = new Date(date).toISOString().split('T')[0];

  return (
    <div className="mb-6">
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
  );
}
