import React , { Component } from 'react'
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

export default class Markdown extends Component {
  render() {
    return (
      <ReactMarkdown source={input} />
    )
  }
}
