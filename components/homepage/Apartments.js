import React, { Component } from 'react'
import Slider from "react-slick";

export default class Apartments extends Component {
  render() {
    const sliderSetting = {
      slidesToShow: 5,
      adaptiveHeight: true,
      responsive:{
        // 1200:{
        //   items: 5,
        //   stagePadding: 0,
        //   nav: true,
        // },
        // 950:{
        //   items: 4,
        //   nav: true,
        //   stagePadding: 0,
        // },
        // 769: {
        //   items: 3,
        //   nav: true,
        //   stagePadding: 0,
        // },
        // 700:{
        //   items: 3,
        // },
        // 400: {
        //   items: 2,
        //   margin: 10,
        // },
        // 0:{
        //   items: 2,
        //   margin:  10,
        //   stagePadding: 10,
        // },
      }
    }
    return (
      <section id="apartments" className="padding-top">
        <h1 className="section-title sec-x">
          پیشنهادهای ویژه آپارتمان در کانادا
        </h1>
        <div id="carousel-house-box" className="sec-x sec-carousel">
          <Slider {...sliderSetting}>
            <div>
              <div id="apartment1-1" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان ونکوور</h2>
                  <div>
                    اجاره هر شب /
                    <span className="ltr">$&nbsp;۷۶</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-2" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان تورنتو</h2>
                  <div>
                    اجاره هر شب /
                    <span className="ltr">$&nbsp;۷۶</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-3" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان ونکور</h2>
                  <div>
                    اجاره هر شب / $&nbsp;۷۶
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-4" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان مونترال</h2>
                  <div>
                    اجاره هر شب / $&nbsp;۷۶
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-5" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان مونترآل</h2>
                  <div>
                    اجاره هر شب / $&nbsp;۷۶
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-6" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان مونترآل</h2>
                  <div>
                    اجاره هر شب / $&nbsp;۷۶
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="apartment1-7" className="apartment">
                <div className="apartment-shadow">
                  <h2>آپارتمان مونترآل</h2>
                  <div>
                    اجاره هر شب / $&nbsp;۷۶
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div id="houses-half-circle-div">
          <div id="houses-half-circle">
          </div>
        </div>
      </section>
    )
  }
}
