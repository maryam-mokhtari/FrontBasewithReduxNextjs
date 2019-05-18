import React, { Component } from 'react'
import Comment from '../general/Comment'

export default class Comments extends Component {
  render() {
    const comments = [
      {
        user: {
          id: 1,
          name: 'سوسن',
          picture: 'profile.jpg'
        },
        date: 'فروردین ۹۸',
        text: 'خانه بسیار زیبایی است.',
      },
      {
        user: {
          id: 1,
          name: 'سوسن',
          picture: 'profile.jpg'
        },
        date: 'فروردین ۹۸',
        text: 'خانه بسیار زیبایی است.',
      },
      {
        user: {
          id: 1,
          name: 'سوسن',
          picture: 'profile.jpg'
        },
        date: 'فروردین ۹۸',
        text: 'خانه بسیار زیبایی است.',
      },
    ]
    return (
      <section className="comments">
      {comments.map((item, index) => <Comment key={index} comment={item} />)}
      </section>
    )
  }
}
