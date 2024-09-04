import ArticlePreview from '@/components/articles/article-preview/article-preview';
import { getArticleData } from '@/lib/articles';

export default async function ArticlesPage() {
  const articleData = getArticleData();

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-2xl mb-4">Articles</h2>

      {articleData.map((e, i) => (
        <ArticlePreview
          slug={e.slug}
          title={e.title}
          author={e.author}
          date={e.date}
          excerpt={e.excerpt}
        />
      ))}
    </div>
  );
}
