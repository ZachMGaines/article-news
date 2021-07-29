import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  console.log(articles);
  const articleElement = articles.map((article) => (
    <li key={article.title}>
      <Article
        title={article.title}
        author={article.author}
        urlToImage={article.urlToImage}
        description={article.description}
        url={article.url}
      />

    </li>
  ));

  return (
    <ul>
      {articleElement}
    </ul>
  );
};


ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
