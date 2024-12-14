import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { getArticleData } from '@/lib/articles';
import styles from './page.module.css';

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps) {
  const articleData = getArticleData(params.slug);

  return {
    title: `${articleData.title} by ${articleData.author} | The Ghazal Project`,
    description: articleData.excerpt
  };
}

export default function Article({ params }: PageProps) {
  const articleData = getArticleData(params.slug);
  const isoDate = new Date(articleData.date).toISOString().split('T')[0];

  return (
    <div className="container mx-auto my-16">
      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-6">
            <h2 className="text-2xl mb-1">{articleData.title}</h2>
            <div className="text-sm">
              <span>By {articleData.author}</span> ·{' '}
              <time dateTime={isoDate}>{articleData.date}</time>
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
