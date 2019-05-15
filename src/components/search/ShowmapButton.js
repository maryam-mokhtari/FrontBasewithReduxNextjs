import React, { Component } from 'react'

export default class ShowmapButton extends Component {
  render() {
    return (
      <div className="showmap-button">
        <img src="/static/img/v2/map.png" alt="نمایش روی نقشه" title="نمایش روی نقشه" />
        نمایش بر روی نقشه
      </div>
    )
  }
}
