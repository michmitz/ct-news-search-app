import React from 'react';
import PropTypes from 'prop-types';
import Article from '../Article/Article';

const Articles = ({ articles }) => {
  const articleslist = articles.map(article => (
    <li key={article.title}>
        <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles-list">
      {articleslist}
    </ul>
  );
};

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default Articles;