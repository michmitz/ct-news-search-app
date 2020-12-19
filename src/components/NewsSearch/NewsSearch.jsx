import React, { Component } from 'react'
import Search from '../Search/Search'
import Loading from '../loading/Loading'
import getNews from '../../services/GetNews'
import Articles from '../Articles/Articles'

export default class NewsSearch extends Component {
  state = {
    search: '',
    loading: false,
    articleResults: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async() => {
    const receivedArticles = await getNews(this.state.search);

    if(receivedArticles.length === 0) {
      console.log('No results')
    }
      
    this.setState({ 
          articleResults: receivedArticles,
          loading: false
        })
  }
  
  render() {
    const { search, articleResults } = this.state;
    
    return (
      <div>
        {
          articleResults ?
          <>
          <Search 
            onSubmit={this.handleSubmit} 
            search={search} 
            onChange={this.handleChange}/>
          <Articles 
            articles={articleResults} />
          </> : <Loading />
        }
      </div>
    )
  }
}

