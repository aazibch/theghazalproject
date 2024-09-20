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
  return (
    <div className="mb-6">
      <header className="mb-4">
        <h1 className="text-xl mb-1">{title}</h1>
        <div className="text-sm">
          <span>By {author}</span> ·{' '}
          <time dateTime={date.toString()}>{date}</time>
        </div>
      </header>

      <div>
        <p>
          {excerpt} <Link href={`/articles/${slug}`}>continue...</Link>
        </p>
      </div>
    </div>
  );
}
