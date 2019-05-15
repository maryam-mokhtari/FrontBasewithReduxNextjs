import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Sidenav extends Component {

  render() {
    return (
      <div id="sidenav" className="sidenav">
        <div id="sidenav-top" className="row">
          <div className="col">
            <span className="close-sidenav" id="sidenav-close">&times;</span>
            <img id="search-open" className="search-sidenav" src="/static/img/magnifying-glass-browser.svg" alt="جستجو" title="جستجو" />
          </div>
          <div className="col">
            <button id="register-sidenav-button" className="btn login-sidenav-button">ثبت‌نام</button>
            <button id="login-sidenav-button" className="btn login-sidenav-button">ورود</button>
          </div>
        </div>
        <nav className="navbar migration-navbar navbar-expand-lg navbar-light">
          <ul id="main-navbar" className="navbar-nav migration-navbar-nav">
            <li className="nav-item migration-nav-item dropdown position-static visa">
                <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#visa-menu" aria-expanded="false">
                خدمات ویزا
                <img alt="خدمات ویزا" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
                </Link>
              <hr className="hr-menu" />
              <div className="m migration-dropdown-menu sec collapse" id="visa-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item header-link migration-header-link">
                      <img alt="ویزای کانادا" src="/static/img/Arrow-left.svg" />
                      ویزای کانادا</Link>
                      <hr className="hr-menu" />
                  </div>
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                      <img alt="ویزای انگلیس" src="/static/img/Arrow-left.svg" />
                      ویزای انگلیس
                    </Link>
                    <hr className="hr-menu" />
                  </div>
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                      <img alt="ویزای شنگن" src="/static/img/Arrow-left.svg" />
                      ویزای شنگن
                    </Link>
                    <hr className="hr-menu" />
                  </div>
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                      <img alt="ویزای آمریکا" src="/static/img/Arrow-left.svg" />
                      ویزای آمریکا
                    </Link>
                    <hr className="hr-menu" />
                  </div>
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                      <img alt="ویزای استرالیا" src="/static/img/Arrow-left.svg" />
                      ویزای استرالیا
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item migration-nav-item dropdown position-static">
              <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#embassy-menu" aria-expanded="false">
                وقت سفارت
                <img alt="وقت سفارت" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
              </Link>
              <div className="m migration-dropdown-menu sec collapse" id="embassy-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="کانادا" src="/static/img/Arrow-left.svg" />
                      کانادا
                    </Link>
                  </div>
                  <div className="col-lg">
                    <hr className="hr-menu" />
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="انگلیس" src="/static/img/Arrow-left.svg" />
                      انگلیس
                    </Link>
                  </div>
                  <div className="col-lg">
                    <hr className="hr-menu" />
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="اروپا" src="/static/img/Arrow-left.svg" />
                      اروپا
                    </Link>
                  </div>
                  <div className="col-lg">
                    <hr className="hr-menu" />
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="آمریکا" src="/static/img/Arrow-left.svg" />
                      آمریکا
                    </Link>
                  </div>
                  <div className="col-lg">
                    <hr className="hr-menu" />
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="استرالیا" src="/static/img/Arrow-left.svg" />
                      استرالیا
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="hr-menu" />
            </li>
            <li className="nav-item migration-nav-item dropdown position-static">
              <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#services-menu" aria-expanded="false">
                خدمات در کانادا
                <img alt="خدمات در کانادا" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
              </Link>
              <div className="m migration-dropdown-menu sec collapse" id="services-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="خدمات کانادا" src="/static/img/Arrow-left.svg" />
                      خدمات پس از ورود به کانادا
                    </Link>
                  </div>
                  <div className="col-lg">
                    <hr className="hr-menu" />
                    <Link to="/" className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                      <img alt="اجاره آپارتمان در کانادا" src="/static/img/Arrow-left.svg" />
                      اجاره آپارتمان در کانادا
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="hr-menu" />
            </li>
            <li className="nav-item migration-nav-item dropdown position-static">
              <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#forms-menu" aria-expanded="false">
                فرم‌ها و مدارک
                <img alt="فرم ها و مدارک" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
              </Link>
              <div className="m migration-dropdown-menu sec collapse" id="forms-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک کانادا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک آمریکا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک شنگن</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک انگلیس</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک استرالیا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم­ وکالتنامه پیکاپ ویزا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">فرم ارزیابی</Link>
                  </div>
                </div>
              </div>
              <hr className="hr-menu" />
            </li>
            <li className="nav-item migration-nav-item dropdown position-static">
              <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#pay-menu" aria-expanded="false">
                پرداخت آنلاین ارزی
                <img alt="پرداخت آنلاین ارزی" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
              </Link>
              <div className="m migration-dropdown-menu sec collapse" id="pay-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item">پرداخت هزینه سفارت کانادا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">پرداخت وقت سفارت آمریکا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">پرداخت ویزای استرالیا</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">پرداخت هتل و آپارتمان</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">راهنمای پرداخت آنلاین</Link>
                  </div>
                </div>
              </div>
              <hr className="hr-menu" />
            </li>
            <li className="nav-item migration-nav-item dropdown position-static">
              <Link to="/" className="nav-link migration-nav-link collapsed" role="button" data-toggle="collapse" data-target="#blog-menu" aria-expanded="false">
                مجله بامن‌رو
                <img alt="مجله با من رو" src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
              </Link>
              <div className="m migration-dropdown-menu sec collapse" id="blog-menu">
                <div className="row w-100">
                  <div className="col-lg">
                    <Link to="/" className="dropdown-item migration-dropdown-item">اخبار و رویدادها</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">گردشگری</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">مهاجرت</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">آموزش</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">تور مجازی</Link>
                    <hr className="hr-menu" />
                    <Link to="/" className="dropdown-item migration-dropdown-item">ویدیو</Link>
                  </div>
                </div>
              </div>
              <hr className="hr-menu" />
            </li>
            <li className="nav-item migration-nav-item">
                <Link to="/" className="nav-link migration-nav-link" style={{border: 'none'}}  id="menu-item-9" >
                  تماس با ما
                </Link>
              </li>
          </ul>
        </nav>
      </div>
    )
  }
}
