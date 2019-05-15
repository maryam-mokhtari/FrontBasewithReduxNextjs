import React, { Component } from 'react'
import Pictures from './Pictures'
import Info from './Info'
import Recommendations from './Recommendations'

export default class Main extends Component {
  render() {
    const { house } = this.props
    return (
      <div>
        <Pictures />
        <Info house={house} />
        <Recommendations />
      </div>
    )
  }
}
