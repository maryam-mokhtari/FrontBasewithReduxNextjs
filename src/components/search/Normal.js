import React, { Component } from 'react'
import InnerAd from '../general/InnerAd'
import ShowMore from '../general/ShowMore'
import Boxes from './Boxes'

export default class Normal extends Component {
  render() {
    console.log('Normal Props:', this.props);

    const { houses, normal1Count, normal2Count, } = this.props
    return (
      <span>
        <section id="normal1">
          <strong>۳۰۱ خانه در کانادا موجود است.</strong>
          <Boxes houses={houses.filter((item, index) => (index < normal1Count))} />
        </section>
        <InnerAd />
        <section id="normal2">
          <Boxes houses={houses.filter((item, index) =>
          (index >= normal1Count) && (index < normal1Count + normal2Count))} />
          <ShowMore more={20} />
        </section>
      </span>
    )
  }
}
