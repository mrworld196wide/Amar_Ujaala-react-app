import React, { Component } from 'react'
import NewsItem from './NewsItem'



export class News extends Component {
  render() {
    return (
      <>
      <p>This is a new item</p>
      <NewsItem/>
      </>
    )
  }
}

export default News