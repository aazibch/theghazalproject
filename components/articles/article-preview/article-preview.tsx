import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

interface ArticlePreviewProps {
  title: string;
  excerpt: string;
  date: Date;
}

export default function ArticlePreview({
  title,
  excerpt,
  date
}: ArticlePreviewProps) {
  return (
    <>
      <h1>{title}</h1>
      <time dateTime={date.toString()}>
        {date.toLocaleTimeString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </time>
      <div>
        <ReactMarkdown
          rehypePlugins={[rehypeRaw]}
          components={{
            a({ href, children }) {
              if (typeof href === 'string' && Array.isArray(children)) {
                return (
                  <Link href={href} target="_blank">
                    {children[0]}
                  </Link>
                );
              }

              return;
            }
          }}
        >
          {excerpt}
        </ReactMarkdown>
      </div>
    </>
  );
}
