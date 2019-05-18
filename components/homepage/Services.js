import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <section id="canada" className="sec sec-carousel canada-row padding-top">
        <h1 className="section-title">خدمات در کانادا</h1>
        <div id="canada-box" className="owl-carousel">
          <div className="canada-box-div">
            <img alt="خدمات پس از ورود" src="/static/img/visa.svg" />
            خدمات پس از ورود&nbsp;
            <br className="mobile-br" />
            به کانادا
          </div>
          <div className="canada-box-div">
            <img alt="ویزای تجاری" src="/static/img/passport.svg" />
            ویزای تجاری&nbsp;
            <br className="mobile-br" />
            کانادا
          </div>
          <div className="canada-box-div">
            <img alt="وقت سفارت" src="/static/img/government-buildings.svg" />
            وقت سفارت&nbsp;
            <br className="mobile-br" />
            کانادا
          </div>
          <div className="canada-box-div">
            <img alt="ویزای توریستی" src="/static/img/suitcase.svg" />
            ویزای توریستی&nbsp;
            <br className="mobile-br" />
            کانادا
          </div>
          <div className="canada-box-div">
            <img alt="تولد فرزند در کانادا" src="/static/img/maternity.svg" />
            تولد فرزند&nbsp;
            <br className="mobile-br" />
            در کانادا
          </div>
        </div>
      </section>
    )
  }
}
