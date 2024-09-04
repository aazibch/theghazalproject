import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import classNames from './article-preview.module.css';

interface ArticlePreviewProps {
  title: string;
  excerpt: string;
  date: string;
}

export default function ArticlePreview({
  title,
  excerpt,
  date
}: ArticlePreviewProps) {
  return (
    <>
      <h1>{title}</h1>
      <time dateTime={date.toString()}>{date}</time>
      <div className={classNames.articleContent}>
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
