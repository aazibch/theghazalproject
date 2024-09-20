import ArticlePreview from '@/components/articles/article-preview/article-preview';
import { getArticlesData } from '@/lib/articles';

export default async function ArticlesPage() {
  const articlesData = getArticlesData();

  return (
    <div className="container mx-auto my-12">
      <header className="border-gray-300 border-b py-2 mb-10">
        <div className="w-7 h-1 mb-2 bg-primary_blue"></div>
        <h2 className="text-2xl mb-4">Articles</h2>
      </header>

      {articlesData.map((e, i) => (
        <ArticlePreview
          key={e.slug}
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
