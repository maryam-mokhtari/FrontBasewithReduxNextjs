import React, { Component } from 'react'

export default class Pictures extends Component {
  render() {
    // const { pictures } = this.props
    const pictures = ['house1.jpg', 'house2.jpg', 'house3.jpg', 'house4.jpg', 'house5.jpg', ]
    return (
      <div id="pictures">
        <div className="half" style={{backgroundImage: `url('/static/img/${pictures[0]}')`, }}>
        </div>
        <div className="half pictures-half">
          <div className="half">
            <div className="picture" style={{backgroundImage: `url('/static/img/${pictures[1]}')`, }}>
            </div>
            <div className="picture" style={{backgroundImage: `url('/static/img/${pictures[2]}')`, }}>
            </div>
          </div>
          <div className="half">
            <div className="picture" style={{backgroundImage: `url('/static/img/${pictures[3]}')`, }}>
            </div>
            <div className="picture" style={{backgroundImage: `url('/static/img/${pictures[4]}')`, }}>
            </div>
            <button id="pictures-more" className="pictures-button">
              نمایش عکس‌های بیشتر
            </button>
            <button id="pictures-save" className="pictures-button">
              ذخیره
              <img alt="ذخیره" src="/static/img/v2/save.svg" />
            </button>
            <button id="pictures-share" className="pictures-button">
              اشتراک‌گذاری
              <img alt="اشتراک گذاری" src="/static/img/v2/share.svg" />
            </button>
          </div>
        </div>
      </div>
    )
  }
}
