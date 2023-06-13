import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <>
        <div className="container my-3">
          <div className="card">
            <div style={{ display: 'flex', justifyConten: 'flex-end', position: 'absolute', right: '0' }}>
              <span className="badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}> {source}
              </span>
            </div>

            <img src={!imageUrl ? "https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" : imageUrl}
              className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text">
                <small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small>
              </p>
              {/* target='_blank' opens the url in new tab */}
              <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NewsItem