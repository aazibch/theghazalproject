import fs from 'fs';
import path from 'path';

export const getArticleFileNames = () => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames;
};
