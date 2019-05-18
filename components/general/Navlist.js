import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <ul className="navbar-nav migration-navbar-nav">
        <li className="nav-item migration-nav-item dropdown position-static visa">
          <a className="nav-link migration-nav-link dropdown-toggle" id="menu-item-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            خدمات ویزا
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
            <div className="col-lg">
              <a className="dropdown-item migration-dropdown-item header-link migration-header-link"  href="/page">
                <img src="/static/img/Arrow-left.svg" />
                ویزای کانادا</a>
                <hr className="hr-menu" />
              <a className="dropdown-item migration-dropdown-item">‫ویزای توریستی
              </a>
              <a className="dropdown-item migration-dropdown-item">ویزای تجاری</a>
              <a className="dropdown-item migration-dropdown-item">ویزای دانش آموزی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای دانشجویی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای فرصت مطالعاتی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای موقت</a>
              <a className="dropdown-item migration-dropdown-item">پیکاپ ویزای کانادا</a>
            </div>
            <div className="col-lg">
              <a className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                <img src="/static/img/Arrow-left.svg" />
                ویزای انگلیس
              </a>
              <hr className="hr-menu" />
              <a className="dropdown-item migration-dropdown-item">ویزای توریستی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای تجاری</a>
              <a className="dropdown-item migration-dropdown-item">ویزای تحصیلی</a>
              <a className="dropdown-item migration-dropdown-item">اخذ اقامت دائم</a>
              <a className="dropdown-item migration-dropdown-item">پیکاپ ویزای انگلیس</a>
            </div>
            <div className="col-lg">
              <a className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                <img src="/static/img/Arrow-left.svg" />
                ویزای شنگن
              </a>
              <hr className="hr-menu" />
              <a className="dropdown-item migration-dropdown-item">ویزای شنگن</a>
              <a className="dropdown-item migration-dropdown-item">ویزای فرانسه</a>
              <a className="dropdown-item migration-dropdown-item">ویزای ایتالیا</a>
              <a className="dropdown-item migration-dropdown-item">ویزای هلند</a>
              <a className="dropdown-item migration-dropdown-item">ویزای اسپانیا</a>
              <a className="dropdown-item migration-dropdown-item">ویزای یونان</a>
              <a className="dropdown-item migration-dropdown-item">اخذ اقامت دائم</a>
            </div>
            <div className="col-lg">
              <a className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                <img src="/static/img/Arrow-left.svg" />
                ویزای آمریکا
              </a>
              <hr className="hr-menu" />
              <a className="dropdown-item migration-dropdown-item">ویزای توریستی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای تجاری</a>
              <a className="dropdown-item migration-dropdown-item">ویزای دانشجویی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای نامزدی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای ازدواج</a>
              <a className="dropdown-item migration-dropdown-item">اخذ اقامت دائم</a>
              <a className="dropdown-item migration-dropdown-item">پیکاپ ویزای آمریکا</a>
            </div>
            <div className="col-lg">
              <a className="dropdown-item migration-dropdown-item header-link migration-header-link" >
                <img src="/static/img/Arrow-left.svg" />
                ویزای استرالیا
              </a>
              <a className="dropdown-item migration-dropdown-item">ویزای توریستی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای تجاری</a>
              <a className="dropdown-item migration-dropdown-item">ویزای دانشجویی</a>
              <a className="dropdown-item migration-dropdown-item">ویزای ازدواج</a>
              <a className="dropdown-item migration-dropdown-item">اخذ اقامت دائم</a>
            </div>
          </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item dropdown position-static">
          <a className="nav-link migration-nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            وقت سفارت
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
              <div className="col-lg">
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  کانادا
                </a>
              </div>
              <div className="col-lg">
                <hr className="hr-menu" />
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  انگلیس
                </a>
              </div>
              <div className="col-lg">
                <hr className="hr-menu" />
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  اروپا
                </a>
              </div>
              <div className="col-lg">
                <hr className="hr-menu" />
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  آمریکا
                </a>
              </div>
              <div className="col-lg">
                <hr className="hr-menu" />
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  استرالیا
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item dropdown position-static">
          <a className="nav-link migration-nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            خدمات در کانادا
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
              <div className="col-lg">
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  خدمات پس از ورود به کانادا
                </a>
              </div>
              <div className="col-lg">
                <hr className="hr-menu" />
                <a className="header-link migration-header-link dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  اجاره آپارتمان در کانادا
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item dropdown position-static">
          <a className="nav-link migration-nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            فرم‌ها و مدارک
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
              <div className="col-lg">
                <a className="header-link header-link2 dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  فرم‌ها و مدارک
                </a>
                <a className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک کانادا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک آمریکا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک شنگن</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک انگلیس</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم‌ها و مدارک استرالیا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم­ وکالتنامه پیکاپ ویزا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">فرم ارزیابی</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item dropdown position-static">
          <a className="nav-link migration-nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            پرداخت آنلاین ارزی
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
              <div className="col-lg">
                <a className="header-link header-link2 dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  پرداخت آنلاین ارزی
                </a>
                <a className="dropdown-item migration-dropdown-item">پرداخت هزینه سفارت کانادا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">پرداخت وقت سفارت آمریکا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">پرداخت ویزای استرالیا</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">پرداخت هتل و آپارتمان</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">راهنمای پرداخت آنلاین</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item dropdown position-static">
          <a className="nav-link migration-nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            مجله بامن‌رو
            <img src="/static/img/Arrow-bottom.svg" className="nav-item-image" />
          </a>
          <div className="dropdown-menu m migration-dropdown-menu sec" aria-labelledby="navbarDropdown">
            <div className="d-flex w-100">
              <div className="col-lg">
                <a className="header-link header-link2 dropdown-item migration-dropdown-item " >
                  <img src="/static/img/Arrow-left.svg" />
                  مجله بامن‌رو
                </a>
                <a className="dropdown-item migration-dropdown-item">اخبار و رویدادها</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">گردشگری</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">مهاجرت</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">آموزش</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">تور مجازی</a>
                <hr className="hr-menu" />
                <a className="dropdown-item migration-dropdown-item">ویدیو</a>
              </div>
            </div>
          </div>
        </li>
        <li className="nav-item migration-nav-item">
          <a className="nav-link migration-nav-link" style={{border: 'none'}}  id="menu-item-9" >
            تماس با ما
          </a>
        </li>
      </ul>
    )
  }
}
