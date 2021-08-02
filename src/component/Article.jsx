import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ author, title, description, url, urlToImage }) => (
  <figure>
    <img src={urlToImage} alt={title} />
    <figcaption>
      <p>{title}</p>
      <p>{author}</p>
      <p>{description}</p>
      <p>{urlToImage}</p>
      <p>{url}</p>
    </figcaption>
  </figure >
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Article;
