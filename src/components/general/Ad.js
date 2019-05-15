import React, { Component } from 'react'

export default class Ad extends Component {
  render() {
    return (
      <section className="sec-x padding-top">
        <div id="ad1" className="ad">
          <div className="inner-ad">
            <h1>یک شب رویایی در لوور</h1>
            <div>
              یک شب رویایی را در لوور برنده شوید
            </div>
            <button className="btn">بیشتر بدانید</button>
          </div>
        </div>
      </section>
    )
  }
}
