import { getArticlesData } from '@/lib/articles';
import ArticleCard from './article-card';

export default function ArticlesSection() {
  const articlesData = getArticlesData();

  return (
    <section className="bg-[#edebe6] py-16 px-4">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="uppercase text-center text-xl mb-8">Recent Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articlesData.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              image={article.image}
              imageAlt={article.imageAlt}
              excerpt={article.excerpt}
              href={`/articles/${article.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
