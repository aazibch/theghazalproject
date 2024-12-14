import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getArticleFileNames = () => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames;
};

export const getArticlesData = () => {
  const fileNames = getArticleFileNames();
  const articlesDirectory = path.join(process.cwd(), 'articles');

  const articles = fileNames.map((fileName) => {
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const slug = fileName.replace('.md', '');

    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      author: data.author,
      image: data.image,
      imageAlt: data.imageAlt,
      excerpt: data.excerpt,
      date: data.date
    };
  });

  // Sort by date in reverse chronological order
  articles.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return articles;
};

export const getArticleData = (slug: string) => {
  const articlesDirectory = path.join(process.cwd(), 'articles');
  const fullPath = path.join(articlesDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    author: data.author,
    excerpt: data.excerpt,
    date: data.date,
    content
  };
};
