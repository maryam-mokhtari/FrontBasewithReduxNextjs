import React, { Component } from 'react'
import Customers from './Customers'
import Visa from './Visa'

export default class VisaCustomers extends Component {
  render() {
    return (
      <div id="visa-customers">
        <Customers />
        <div className="visa-customer"></div>
        <Visa />
      </div>
    )
  }
}
