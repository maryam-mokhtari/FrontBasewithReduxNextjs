import React, { Component } from 'react'

export default class Visa extends Component {
  render() {
    return (
      <div className="sec">
        <section id="visa">
          <h1>
            از بامن‌رو
            <br/>
             ویزای کانادا هدیه بگیرید!
          </h1>
          <form id="visa-form">
            <div>
              <input id="input1" placeholder="نام" />
              <div className="seperator">|</div>
              <input id="input2" placeholder="نام خانوادگی" />
            </div>
            <div>
              <input id="input3" placeholder="ایمیل" />
              <div className="seperator">|</div>
              <input id="input4" placeholder="تلفن" />
            </div>
            <button className="btn visa-button w-100">ثبت کنید</button>
          </form>
        </section>
      </div>
    )
  }
}
