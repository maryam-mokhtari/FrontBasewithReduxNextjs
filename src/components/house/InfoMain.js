import React, { Component } from 'react'
import Comments from '../house/Comments'

export default class InfoMain extends Component {
  render() {
    const { house } = this.props
    return (
      <section id="info-main">
        <Comments />
      </section>
    )
  }
}
