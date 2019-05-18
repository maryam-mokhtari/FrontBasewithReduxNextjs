import React, { Component } from 'react'

export default class Explorer extends Component {
  render() {
    const { isInner, id, } = this.props
    return (
      <section className={`sec1-carousel  padding-top ${isInner? '': 'sec-x'}`}>
        <h1 className="section-title">خدمات در کانادا</h1>
        <div id={id} className={`owl-carousel explorer-carousel ${isInner? 'inner-explorer': ''}`}>
          <div className="explorer">
            <div id ="item-pic1" className="item-pic"></div>
            <h1 className="">
              آپارتمان
            </h1>
          </div>
          <div className="explorer">
            <div id ="item-pic2" className="item-pic"></div>
            <h1 className="">
              رستوران گردی
            </h1>
          </div>
          <div className="explorer">
            <div id ="item-pic3" className="item-pic"></div>
            <h1 className="">
              خانه ویلایی
            </h1>
          </div>
        </div>
      </section>
    )
  }
}
