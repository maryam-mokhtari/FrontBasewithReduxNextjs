import React, { Component } from 'react'
import Loading from '../nodata/Loading'

export default class Box extends Component {
  render() {
    const {
      index,
      house,
    } = this.props
    const direction = this.props.direction || 'row'
    const rank = 2
    console.log('Box props:', this.props );
    return (
      <div>
      {house?
        <div className="search-result-box" key={index} style={{flexDirection: direction}}>
          <div id={`carousel-inner-house${index}`} className={`carousel slide house-carousel-${direction}`} data-ride="false">
              <ol className="carousel-indicators carousel-indicators2">
                <li data-target={`#carousel-inner-house${index}`} data-slide-to="0" className="active"></li>
                <li data-target={`#carousel-inner-house${index}`} data-slide-to="1"></li>
                <li data-target={`#carousel-inner-house${index}`} data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner h-100">
                <div className="carousel-item h-100 active">
                  <div id="house1" className="image-slide"></div>
                </div>
                <div className="carousel-item h-100">
                  <div id="house2" className="image-slide"></div>
                </div>
                <div className="carousel-item h-100">
                  <div id="house3" className="image-slide"></div>
                </div>
              </div>
              <a className="carousel-control-prev" href={`#carousel-inner-house${index}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon immigraton-carousel-prev" aria-hidden="true"></span>
                <span className="sr-only">قبلی</span>
              </a>
              <a className="carousel-control-next" href={`#carousel-inner-house${index}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon immigraton-carousel-next" aria-hidden="true"></span>
                <span className="sr-only">بعدی</span>
              </a>
          </div>
          <div className={`house-box house-box-${direction}`}>
            <div className="house-box-top">
              <div className={`search-box-title ${house.is_plus? 'plus-title': ''}`}>
                <div>
                  {house.is_plus &&
                    <span className="plus">پلاس</span>
                  }
                  گل‌خانه
                </div>
                <div className="like">
                  <img className="like-img" src="/static/img/like2.png" alt="افزودن به علاقه‌مندی" title="افزودن به علاقه‌مندی" />
                </div>
              </div>
              <div className="font-weight-bold">
                {house.title}
              </div>
              ۶ مهمان . ۳ اتاق خواب . ۴ تخت . ۱ حمام
              <br/>
              وای‌فای . پارکینگ . آشپزخانه
            </div>
            <div className="house-box-bottom">
              <div className="d-flex">
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
                <div className="rent">
                  اجاره هر شب $43
                </div>
              </div>
            </div>
          </div>
        </div>
      :
        <Loading />
  }
  </div>
)}
}
