import React, { Component } from 'react'

export default class Searchnav extends Component {

  render() {
    return (
      <div id="search-nav" className="sidenav">
        <fieldset className="search-group">
          <input className="form-control" placeholder="موضوع خود را جستجو کنید ..." />
          <span className="close-sidenav" id="search-close">&times;</span>
          <div className="search-category row">
            <div className="col-6">
              <mark>12</mark>  آیتم اول
            </div>
            <div className="col-6">
              <mark>5</mark>  آیتم اول
            </div>
            <div className="col-6">
              <mark>2</mark>  آیتم اول
            </div>
            <div className="col-6">
              <mark>14</mark>  آیتم اول
            </div>
            <div className="col-6">
              <mark>7</mark>  آیتم اول
            </div>
            <div className="col-6">
              <mark>6</mark>  آیتم اول
            </div>
          </div>
        </fieldset>
      </div>
    )
  }
}
