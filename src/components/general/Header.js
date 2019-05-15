import React, { Component } from 'react'
import Searchmodal from './Searchmodal'
import Sidenav from './Sidenav'
import Searchnav from './Searchnav'

export default class Header extends Component {
  render() {
    return (
      <div>
        <Searchmodal />
        <Sidenav />
        <Searchnav />
      </div>
    )
  }
}
