import React, { Component } from 'react'

export default class Footer extends Component {

  render() {
    return (
      <span>
        <section id="footer-section" className="row zero down-links w-100 sec-x">
          <div className="col down-item">
            <img alt="تیم وکلای مهاجرتی" src="/static/img/lawyer.svg" className="down-icon" />
            <span className="footer-text">
              تیم وکلای
              <br className="footer-mobile" />
                 مهاجرتی
            </span>
          </div>
          <div className="col down-item">
            <img alt="مشاوره رایگان" src="/static/img/support.svg" className="down-icon" />
            <span className="footer-text">
              مشاوره
              <br className="footer-mobile" />
                  رایگان
            </span>
          </div>
          <div className="col down-item">
            <img alt="بهترین قیمت" src="/static/img/wallet.svg" className="down-icon" />
            <span className="footer-text">
              تضمین<br className="footer-mobile" />بهترین&nbsp;قیمت
            </span>
          </div>
          <div className="col down-item">
            <img alt="پشتیبانی آنلاین" src="/static/img/headphones.svg" className="down-icon" />
            <span className="footer-text">
              پشتیبانی
              <br className="footer-mobile" />
              آنلاین
            </span>
          </div>
        </section>
        <footer id="immigration-footer" className="sec-x">
          <div id="half-circle1-div">
            <div id="half-circle1">
            </div>
          </div>
          <div className="row zero bar">
            <div className="bar-logo">
              <img alt="با من رو" title="با من رو" src="/static/img/Logo-BaManRo.svg" />
              <div className="address">
              تهران، زعفرانیه، خیابان مقدس اردبیلی، نبش
               خیابان
                فرخ،
                 ساختمان فرخ،
                  طبقه ۷،
                   واحد ۷۰۲
              </div>
              <div className="downer-tel">
                <a href="tel:02122419722">
                  <img className="downer-icon" src="/static/img/telephone.svg" alt="تماس" title="تماس" />
                  021-22419722
                </a>
              </div>
              <div className="downer-email">
                <a href="mailto:info@bamanro.com">
                  <img className="downer-icon email-icon d-none" src="/static/img/mail.svg" alt="ایمیل" title="ایمیل" />
                  info@bamanro.com
                </a>
              </div>

            </div>
            <div className="row zero bar-links">
              <div className="col-md-4 col-sm-4 downer-box">
                <div className="downer-title">
                  بیشتر بدانید
                </div>
                <ul className="downer-ul">
                  <div className="row">
                    <div className="col-6 col-sm-12 pl-0">
                      <li>درباره ما</li>
                      <li>همکاری با ما</li>
                      <li>باشگاه مشتریان</li>
                    </div>
                    <div className="col-6 col-sm-12 pl-0">
                      <li>سوالات متداول</li>
                      <li>قوانین و مقررات</li>
                      </div>
                    </div>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 downer-box">
                <div className="downer-title">
                  وقت سفارت و ویزا
                </div>
                <ul className="downer-ul">
                  <div className="row">
                    <div className="col-6 col-sm-12 pl-0">
                      <li>کانادا</li>
                      <li>آمریکا</li>
                      <li>انگلیس</li>
                    </div>
                    <div className="col-6 col-sm-12 pl-0">
                      <li>استرالیا</li>
                      <li>شنگن</li>
                    </div>
                  </div>
                </ul>
              </div>
              <div className="col-md-4 col-sm-4 downer-box">
                <div className="downer-title">
                  خدمات ما
                </div>
                <ul className="downer-ul">
                  <div className="row">
                    <div className="col-6 col-sm-12 pl-0">
                      <li>اجاره آپارتمان</li>
                      <li>خدمات پس از ورود</li>
                      <li>خدمات تور</li>
                    </div>
                    <div className="col-6 col-sm-12 pl-0">
                      <li>فرم‌ها و مدارک</li>
                      <li>پذیرش تحصیلی</li>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div id="half-circle2-div">
          <div id="half-circle2">
          </div>
        </div>
        <footer id="footer2" className="sec-x">
          <div className="row zero bar2">
            <div className="col-sm-5 p-0 prizes">
              <img alt="" src="/static/img/nemad.png" className="footer-img" />
              <img alt="" src="/static/img/enemad.png" className="footer-img" />
            </div>
            <div className="col-lg-2 d-none d-lg-block">
              <img alt="" src="/static/img/prize1.png" className="footer-img" />
              <img alt="" src="/static/img/prize2.png" className="footer-img" />
            </div>
            <div className="col-lg-5 col-sm-7 p-0">
              <img alt="youtube" src="/static/img/youtube.svg" className="footer-icon" style={{marginLeft: 0}} />
              <img alt="viemo" src="/static/img/vimeo.svg" className="footer-icon" />
              <img alt="linkedin" src="/static/img/linkedin.svg" className="footer-icon" />
              <img alt="twitter" src="/static/img/twitter.svg" className="footer-icon" />
              <img alt="facebook" src="/static/img/facebook.svg" className="footer-icon" />
              <img alt="instagram" src="/static/img/instagram2.svg" className="footer-icon" />
            </div>
          </div>
          <div className="row d-none">
            <div className="col-12">
              <span className="footer-link">
                درباره ما
              </span>
              <span className="footer-link">
                تماس با ما
              </span>
              <span className="footer-link">
                حریم خصوصی
              </span>
              <span className="footer-link">
                قوانین و مقررات
              </span>
              <span className="footer-link">
                سوالات متدوال
              </span>
              <span className="footer-link">
                راهنما
              </span>
            </div>
          </div>


          <div className="row zero">
            <div className="col-sm-4 copyright d-sm-block d-none">
              Copyright &copy; 2019 <a className="footer-url" href="http://bamanro.com">bamanro.com</a>
            </div>
            <div className="col-sm-8 copyright-fa">
              تمامی حقوق این وبسایت برای شرکت با من رو محفوظ است.
            </div>
            <div className="col-12 copyright2 d-sm-none">
              Copyright &copy; 2019 <a className="footer-url" href="http://bamanro.com">bamanro.com</a>
            </div>
          </div>
        </footer>
      </span>
    )
  }
}
