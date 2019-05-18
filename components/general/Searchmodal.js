import React, { Component } from 'react'

export default class Searchmodal extends Component {

  render() {
    return (
      <div className="modal" tabIndex="-1" role="dialog" id="searchModal">
        <div className="modal-dialog modal-dialog-full" role="document">
          <div className="modal-content search-modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Search</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src="/static/img/magnifying-glass-browser.svg" className="search-modal-btn" alt="جستجو" title="جستجو" />
              <input type="email" className="form-control search-input"
                placeholder="موضوع مورد نظر را جستجو کنید..." />
              <div className="search-categories">
                <div>CATEGORIES</div>
                <span>Analytics&nbsp;(41)</span>
                <span>Customer&nbsp;Experience&nbsp;(61)</span>
                <span>Customer&nbsp;Support&nbsp;(35)</span>
                <span>Design&nbsp;(21)</span>
                <span>Engagement&nbsp;Signals&nbsp;(10)</span>
                <span>Engineers&nbsp;(23)</span>
                <span>Frustration&nbsp;Metrics&nbsp;(17)</span>
                <span>FullStory&nbsp;Culture&nbsp;(32)</span>
                <span>FullStory&nbsp;Customer&nbsp;Use&nbsp;Cases&nbsp;(27)</span>
                <span>Integrations&nbsp;(16)</span>
                <span>Marketing&nbsp;(19)</span>
                <span>Mobile&nbsp;(4)</span>
                <span>Popular&nbsp;(19)</span>
                <span>Proactive&nbsp;Support&nbsp;(6)</span>
                <span>Product&nbsp;Development&nbsp;(16)</span>
                <span>Product&nbsp;Features&nbsp;(38)</span>
                <span>Product&nbsp;Management&nbsp;(13)</span>
                <span>Research&nbsp;(6)</span>
                <span>SaaS&nbsp;(2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
