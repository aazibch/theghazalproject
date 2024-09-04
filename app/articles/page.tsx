import ArticlePreview from '@/components/articles/article-preview/article-preview';
import { getArticleData } from '@/lib/articles';

export default async function ArticlesPage() {
  const articleData = getArticleData();

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-2xl">Articles</h2>

      {articleData.map((e, i) => (
        <ArticlePreview title={e.title} excerpt={e.content} date={e.date} />
      ))}
    </div>
  );
}
