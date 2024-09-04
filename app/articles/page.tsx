import { getArticleData, getArticleFileNames } from '@/lib/articles';

export default async function ArticlesPage() {
  const articleFileNames = getArticleFileNames();
  const articleData = getArticleData(articleFileNames);

  return (
    <div className="container mx-auto my-12">
      <h2 className="text-2xl">Articles</h2>

      {articleFileNames.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>
  );
}
