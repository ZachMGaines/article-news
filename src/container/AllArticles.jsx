import React, { Component } from 'react';
import { fetchArticles } from '../services/articleAPI';
import ArticleList from '../component/ArticleList';
import Search from '../component/Search';

export default class AllArticles extends Component {
  state = {
    articles: [],
    loading: true
  }
  async componentDidMount() {
    const articles = await fetchArticles('bitcoin');
    console.log(articles);
    this.setState({ articles, loading: false });
  }

  handleSearch = async (e) => {
    this.setState({ loading: true });
    const articles = await fetchArticles(e.target.value);
    this.setState({ articles, loading: false });
  }

  render() {
    const { articles, loading } = this.state;

    // eslint-disable-next-line keyword-spacing


    return <>
      <Search handleSearch={this.handleSearch} />
      {loading ? <h1>Loading...</h1> : <ArticleList articles={articles} />}

    </>;
  }
}
