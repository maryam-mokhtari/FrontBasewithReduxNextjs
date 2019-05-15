import React, { Component } from 'react'

export default class Firstpage extends Component {

  render() {
    return (
      <div id="first-page" className="sec-x">
        <section className="search-house-container">
          <section className="search-house">
            <h1>جستجوی آپارتمان در کانادا</h1>
            <fieldset className="form-group">
              <label htmlFor="location-text">
                شهر یا منطقه یا کشور
              </label>
              <input id="location-text" defaultValue="کانادا، ونکور" className="form-control" />
            </fieldset>
            <div id="date-box">
              <fieldset className="form-group">
                <label htmlFor="from-date">
                  از تاریخ
                </label>
                <input id="from-date" defaultValue="۱۲ دی ماه ۱۳۹۸" className="form-control" />
              </fieldset>
              <fieldset className="form-group">
                <label htmlFor="to-date">
                  تا تاریخ
                </label>
                <input id="to-date" defaultValue="۲۶ دی ماه ۱۳۹۸" className="form-control" />
              </fieldset>
            </div>
            <fieldset className="form-group">
              <label htmlFor="from-date">
                تعداد مسافران
              </label>
              <input defaultValue="۳ بزرگسال، ۱ کودک، ۰ نوزاد" className="form-control" />
            </fieldset>
            <a href="/search">
              <button className="btn location-button">
                جستجو
              </button>
            </a>
          </section>
        </section>
      </div>
    )
  }
}
