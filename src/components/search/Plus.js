import React, { Component } from 'react'
import ShowMore from '../general/ShowMore'
import Boxes from './Boxes'

export default class Plus extends Component {
  render() {
    console.log('Plus Props:', this.props);
    const { houses, } = this.props
    return (
      <section id="plus">
        <header>
          <strong>۳۱ خانه «پلاس» در کانادا موجود است.</strong>
          <div>
            مجموعه‌ای از خانه‌های باکیفیت و طراحی تایید شده
          </div>
        </header>
        <Boxes houses={houses} />
        <ShowMore more={322} />
        <div className="show-all">
          نمایش همه (۳۸)
        </div>
      </section>
    )
  }
}
