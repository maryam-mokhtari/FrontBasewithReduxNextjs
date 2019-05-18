import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    const { id, buttonId } = this.props
    return (
      <div id={id} className="dropdown-menu login-box" aria-labelledby={buttonId}>
        <div className="w-300">
          <div className="login-top-arrow"></div>
          <div className="d-flex">
            <button className="btn login-tab-button active">ورود</button>
            <button className="btn register-tab-button">ثبت&zwnj;نام</button>
          </div>
          <div className="form-group login-tab" style={{display: 'block'}}>
            <fieldset className="form-group">
              <img alt="پروفایل" src="/static/img/002/avatar.svg" className="placeholder-icon" />
              <input type="email" className="form-control login-input" />
              <label className="login-label" htmlFor="email-login">
                Email
              </label>
            </fieldset>
            <fieldset className="form-group">
              <img alt="" src="/static/img/002/padlock.svg" className="placeholder-icon" />
              <img alt="" src="/static/img/002/eye.svg" className="eye eye-open" style={{display: 'none'}} />
              <img alt="" src="/static/img/002/hide.svg" className="eye eye-close" />
              <input type="password" className="form-control login-input password-login" />
              <label className="login-label">
                Password
              </label>
            </fieldset>
            <button className="form-control btn login-button">
              ورود
            </button>

            <div className="row login-bottom-item">
              <div className="col">
                <input type="checkbox" style={{position: 'relative', top: 4,}} />
                مرا به خاطر بسپار
              </div>
              <div className="col text-left">
                <span>
                بازیابی رمز عبور
                </span>
              </div>
            </div>
          </div>
          <div className="form-group register-tab" style={{display: 'none'}}>
            <fieldset className="form-group">
              <img alt="" src="/static/img/002/avatar.svg" className="placeholder-icon" />
              <input type="email" className="form-control login-input" />
              <label className="login-label" htmlFor="email-register">
                Email or Phone
              </label>
            </fieldset>
            <button className="form-control btn register-button">
              ثبت&zwnj;نام
            </button>

          </div>
        </div>
      </div>
    )
  }
}
