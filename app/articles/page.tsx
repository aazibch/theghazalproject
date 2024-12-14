import type { Metadata } from 'next';
import ArticlePreview from '@/components/articles/article-preview/article-preview';
import PageHeader from '@/components/layout/pages/page-header';
import { getArticlesData } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles | The Ghazal Project'
};

export default async function ArticlesPage() {
  const articlesData = getArticlesData();

  return (
    <div className="container mx-auto my-12">
      <PageHeader heading="Articles" />

      {articlesData.map((e, i) => (
        <ArticlePreview
          key={e.slug}
          slug={e.slug}
          title={e.title}
          image={e.image}
          imageAlt={e.imageAlt}
          author={e.author}
          date={e.date}
          excerpt={e.excerpt}
        />
      ))}
    </div>
  );
}
