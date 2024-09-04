import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getArticleFileNames = () => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames;
};

export const getArticleData = (fileNames: string[]) => {
  console.log('fileNames', fileNames);

  const articlesDirectory = path.join(process.cwd(), 'articles');

  const articles = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const slug = fileName.replace('.md', '');

    const { data, content } = matter(fileContents);

    return {
      slug,
      content,
      ...data
    };
  });

  return articles;
};
