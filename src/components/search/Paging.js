import React, { Component } from 'react'

export default class Paging extends Component {
  render() {
    return (
      <div className="paging-box">
        <div className="paging">
          <span className="paging-number selected">1</span>
          <span className="paging-number">2</span>
          <span className="paging-number">3</span>
          <span className="paging-number">4</span>
          <span className="paging-number arrow">
            <div>
              >
            </div>
          </span>
        </div>
        <div>
          ۱ - ۸ از ۸۸ اجاره
        </div>
      </div>
    )
  }
}
