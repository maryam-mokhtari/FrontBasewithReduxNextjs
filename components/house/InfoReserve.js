import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Info extends Component {
  render() {
    const { house } = this.props
    const rank = 3
    return (
      <section id="info-reserve">
        <div className="info-reserve-container">
          <div className="search-house-container">
            <div className="search-house info-reserve">
              <div><h2>۳۰۰،۰۰۰ تومان</h2> در شبانه‌روز</div>
              <div className="stars">
                {Array.from(Array(rank), (i, index) =>
                  <img key={index} src={`/static/img/v2/star${house.is_plus? '2':'1'}.svg`}
                    className={house.is_plus? 'starplus' : 'star'} alt="امتیاز" title="امتیاز" />
                )}
                {Array.from(Array(5 - rank), (i, index) =>
                  <img key={index} src="/static/img/v2/star.svg"
                    className={house.is_plus? 'starplus' : 'star'}  alt="امتیاز" title="امتیاز" />
                )}
              </div>
              <hr />
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
              <div className="showmore-info">
              نمایش اطلاعات بیشتر
              </div>
              <Link href="/search" role="button" className="btn location-button">
                  درخواست رزرو
              </Link>
              <div className="no-pay">
                شما فعلا مبلغی پرداخت نمی‌کنید.
              </div>
            </div>
          </div>
          <Link className="report" to="">
            گزارش اطلاعات نابجا &nbsp;
            <img alt="گزارش اطلاعات نابجا" className="icon" src="/static/img/v2/flag.svg" />
          </Link>
        </div>
      </section>
    )
  }
}
