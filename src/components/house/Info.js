import React, { Component } from 'react'
import InfoMain from './InfoMain'
import InfoReserve from './InfoReserve'

export default class Info extends Component {
  render() {
    const { house } = this.props
    const rank = 3
    return (
      <section id="info" className="sec-x">
        <InfoMain house={house} />
        <InfoReserve house={house} />
      </section>
    )
  }
}
