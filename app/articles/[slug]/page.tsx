import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { getArticleData } from '@/lib/articles';
import styles from './page.module.css';

export default function Article({ params }: { params: { slug: string } }) {
  const articleData = getArticleData(params.slug);

  return (
    <div className="container mx-auto my-12">
      <div className="max-w-3xl border mx-auto">
        <article>
          <header className="mb-8">
            <h2 className="text-2xl mb-1">{articleData.title}</h2>
            <div className="text-sm">
              <span>By {articleData.author}</span> ·{' '}
              <time dateTime={articleData.date.toString()}>
                {articleData.date}
              </time>
            </div>
          </header>
          <div className={styles.content}>
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
              {articleData.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}

// TODO: Check the value of the dateTime attribute of element time.
