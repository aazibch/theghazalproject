import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { notFound } from 'next/navigation';

import { getArticleData } from '@/lib/articles';
import styles from './page.module.css';
import StyledImage from '@/components/ui/styled-image';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;

  const articleData = getArticleData(slug);

  return {
    title: `${articleData.title} by ${articleData.author} | The Ghazal Project`,
    description: articleData.excerpt
  };
}

export default async function Article({ params }: PageProps) {
  const { slug } = await params;

  const articleData = getArticleData(slug);

  if (!articleData) {
    notFound();
  }

  const isoDate = new Date(articleData.date).toISOString().split('T')[0];

  return (
    <div className="px-4 mx-auto my-16">
      <div className="max-w-3xl mx-auto">
        <article>
          <header className="mb-6">
            <h2 className="text-2xl mb-1">{articleData.title}</h2>
            <div className="text-sm">
              <span>By {articleData.author}</span> ·{' '}
              <time dateTime={isoDate}>{articleData.date}</time>
            </div>
          </header>

          <div className="mb-6">
            <StyledImage
              src={articleData.image}
              alt={articleData.imageAlt}
              width={960}
              height={540}
              priority
              caption={articleData.imageAlt}
            />
          </div>

          <div className={styles.content}>
            <ReactMarkdown
              rehypePlugins={[rehypeRaw]}
              components={{
                a({ href, children }) {
                  if (typeof href === 'string') {
                    return (
                      <Link href={href} target="_blank">
                        {children}
                      </Link>
                    );
                  }
                  return;
                },
                div({ children, node, ...props }) {
                  const updatedClassName =
                    props.className === 'poetryStanza'
                      ? styles.poetryStanza
                      : props.className;
                  return (
                    <div {...props} className={updatedClassName}>
                      {children}
                    </div>
                  );
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
