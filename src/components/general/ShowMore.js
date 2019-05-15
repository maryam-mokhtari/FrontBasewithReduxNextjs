import React, { Component } from 'react'

export default class Normal extends Component {
  render() {
    const { more } = this.props
    return (
      <a className="search-more">
        نمایش بیشتر (
          {more}
        ) ...
      </a>
    )
  }
}
