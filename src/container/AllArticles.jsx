import React, { Component } from 'react';
import { fetchArticles } from '../services/articleAPI';
import ArticleList from '../component/ArticleList';

export default class AllArticles extends Component {
  state = {
    articles: [],
    loading: true
  }
  async componentDidMount() {
    const articles = await fetchArticles();
    this.setState({ articles, loading: false });
  }


  render() {
    const { articles, loading } = this.state;

    // eslint-disable-next-line keyword-spacing
    if (loading) return <h1>Loading...</h1>;
    return <ArticleList articles={articles} />;
  }
}
