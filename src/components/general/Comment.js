import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const { comment } = this.props
    const MAX_WORDS = 50
    let text = comment.text
    const words = text.split()
    const wordsCount = words.length
    if (wordsCount < MAX_WORDS) {
      // return <div className="comment-text">{text}</div>
    } else {
      // return <div className="comment-text">{text}</div>
    }
    return (
      <section className="comment">
        <div className="comment-header">
          <img className="comment-avatar" alt="پروفایل" src={`/static/img/${comment.user.picture}`} />
          <div>
            <div className="comment-name">
              {comment.user.name}
            </div>
            <div className="comment-date">
              {comment.date}
            </div>
          </div>
        </div>
        <div className="comment-text">
          {comment.text}
        </div>
        <hr />
      </section>
    )
  }
}
