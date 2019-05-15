import React, { Component } from 'react'
import Box from '../general/Box'

export default class Recommendations extends Component {
  render() {
    const houses = {rooms: [
      { id: 1, title: 'خانه ۱', is_plus: true, price: 200 },
      { id: 2, title: 'خانه ۲', is_plus: false, price: 400 },
      { id: 3, title: 'خانه ۳', is_plus: true, price: 100 },
      { id: 4, title: 'خانه ۴', is_plus: false, price: 500 },
      { id: 5, title: 'خانه ۵', is_plus: false, price: 600 },
      { id: 6, title: 'خانه ۶', is_plus: true, price: 300 },
      { id: 7, title: 'خانه ۷', is_plus: false, price: 700 },
    ]}
    return (
      <section id="canada" className="sec sec-carousel canada-row padding-top">
        <h1 className="section-title">پیشنهادهای بیشتر</h1>
        <div id="recommendations-box" className="owl-carousel">
          {houses.rooms.map((item, index) => <Box house={item} key={index} index={index} direction="column" />)}
        </div>
      </section>
    )
  }
}
