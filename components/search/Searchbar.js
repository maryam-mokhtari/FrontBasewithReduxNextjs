import React, { Component } from 'react'

export default class Searchbar extends Component {
  render() {
    return (
      <div id="search-bar" className="sec-x">
        <div id="search-items">
          <input className="searchbar-input" placeholder="شهر یا منطقه یا کشور" />
          <div className="d-flex">
            <div className="search-item d-sm-none d-md-block">
              نوع خانه
            </div>
            <div className="search-item d-none d-sm-block">
              قیمت
            </div>
            <div className="search-item selected">
              رزرو لحظه‌ای
            </div>
            <div className="search-item">
              فیلترها
            </div>
          </div>
        </div>
        <div id="showon-map" className="">
          <span id="show-map">
            نمایش روی نقشه
          </span>
          <label id="map-show-switch" className="switch checked">
            <input id="showmap-checkbox" type="checkbox" defaultChecked />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    )
  }
}
