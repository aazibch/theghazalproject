import { getArticleFileNames } from '@/lib/articles';

export default async function ArticlesPage() {
  const articleFileNames = await getArticleFileNames();

  return (
    <>
      <h1>ArticlesPage</h1>

      {articleFileNames.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </>
  );
}
