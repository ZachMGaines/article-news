// import dotenv from 'dotenv';
// dotenv.config();
/* eslint-disable max-len */
export const fetchArticles = async (query) => {
  // eslint-disable-next-line keyword-spacing
  if (!query) return [];
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.ARTICLE_API_KEY}`);
  const json = await res.json();
  console.log(res);
  return json.articles;
};
