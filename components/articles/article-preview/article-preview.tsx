import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import classNames from './article-preview.module.css';

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
    <div className="mb-8">
      <header className="mb-4">
        <h1 className="text-xl mb-1">{title}</h1>
        <div className="text-sm">
          <span>By {author}</span> ·{' '}
          <time dateTime={date.toString()}>{date}</time>
        </div>
      </header>

      <div className={classNames.articleContent}>
        <p>
          {excerpt} <Link href={`/articles/${slug}`}>continue...</Link>
        </p>
      </div>
    </div>
  );
}

// <ReactMarkdown
// rehypePlugins={[rehypeRaw]}
// components={{
//   a({ href, children }) {
//     if (typeof href === 'string' && Array.isArray(children)) {
//       return (
//         <Link href={href} target="_blank">
//           {children[0]}
//         </Link>
//       );
//     }

//     return;
//   }
// }}
// >
// {excerpt}
// </ReactMarkdown>
