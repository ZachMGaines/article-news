import dotenv from 'dotenv/config';

export const fetchArticles = async () => {
  const res = await fetch(process.env.ARTICLE_API);
  const json = await res.json();

  return json.results;
};
