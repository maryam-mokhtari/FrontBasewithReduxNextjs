import React, { Component } from 'react'
import Signup from './Signup'
import Navlist from './Navlist'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

  render() {
    return (
      <span>
        <nav id="header-nav" className="navbar migration-navbar navbar-expand-lg navbar-light fixed-top sec-x">
          <Link to="/" className="navbar-brand migration-navbar-brand" >
            <object id="top-logo" type="image/svg+xml" data="/static/img/Logo-BaManRo.svg" className="top-logo"
            alt="BaManRo Logo" title="با من رو">
            </object>
          </Link>
          <div id="sidenav-leftbox">
            <a href="tel:02122419722"><img src="/static/img/v2/phone-call.svg" className="top-icon" id="phone" alt="تماس" title="تماس" /></a>
            <button id="dropdownMenuButton3" className="btn dropdown-toggle migration-dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <img src="/static/img/user1.svg" className="top-icon" id="user" alt="ثبت‌نام" title="ثبت‌نام" />
            </button>
            <button type="button" className="navbar-toggler" id="sidenav-open">
              <img src="/static/img/Hamberger-Menu.svg" className="top-icon-menu" alt="بامن‌رو" title="بامن‌رو" />
            </button>
            <Signup />
          </div>
          <div className="collapse navbar-collapse migration-navbar-collapse" id="navbar-supported-content">

            <div id="top-div" className="row w-100 d-none d-lg-flex header-row">
              <div className="col-md-4 offset-md-1 pr-0">
                <div className="dropdown show z-10">
                  <button className="btn dropdown-toggle migration-dropdown-toggle pr-0" type="button"
                    id="dropdown-menu-button1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    ورود / ثبت‌نام
                    <img alt="ورود/ثبت نام" src="/static/img/Arrow-bottom.svg" className="nav-item-image arrow-login" />
                  </button>
                  <Signup id="desktop-login-box" buttonId="dropdown-menu-button1" />
                </div>
                <Link to="/search" role="button" className="search-button" data-toggle="modal" data-target="#searchModal">
                    <img src="/static/img/magnifying-glass-browser.svg" alt="جستجو" title="جستجو" />
                </Link>
              </div>
              <div className="col-md-7 tel">
                <img id="headphone" src="/static/img/headphones.svg" alt="تماس" title="تماس" />
                021-22419722

                <div className="or">
                  |
                </div>
                <div className="language-box" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img alt="" src="/static/img/Arrow-bottom.svg" id="arrow-flag"
                  className="nav-item-image" />
                  <img className="flag" src="/static/img/flag-en.png" alt="تغییر زبان" title="تغییر زبان" />
                  <div className="dropdown-menu language-menu" aria-labelledby="arrow-flag" >
                    <img className="flag" src="/static/img/flag-en.png" alt="انگلیسی" title="انگلیسی" />
                    <hr className="flag-hr"/>
                    <img className="flag" src="/static/img/flag-fa.png" alt="فارسی" title="فارسی" />
                  </div>
                </div>
              </div>
            </div>

            <hr id="top-hr" className="hr-top" />
            <Navlist />
            <div id="scrolled-login" className="dropdown" style={{display: 'none'}}>
              <button id="dropdown-menu-button2" className="btn dropdown-toggle migration-dropdown-toggle p-0" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <img src="/static/img/user1.svg" className="top-icon-scrolled d-none" id="user2" alt="ثبت‌نام" title="ثبت‌نام" />
              </button>
              <a href="tel:02122419722"><img alt="تماس تلفنی" src="/static/img/v2/phone-call.svg" className="top-icon-scrolled d-none" /></a>
              <Signup id="scrolled-login-box" buttonId="dropdown-menu-button2" />
            </div>
          </div>
        </nav>
        <div id="mobile-head-pic"></div>
      </span>
    )
  }
}
