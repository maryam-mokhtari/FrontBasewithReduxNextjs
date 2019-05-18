import React, { Component } from 'react'
import Header from '../components/general/Header'
import Firstpage from '../components/homepage/Firstpage'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'
import Explorer from '../components/general/Explorer'
import Ad from '../components/general/Ad'
import Services from '../components/homepage/Services'
import Apartments from '../components/homepage/Apartments'
import Customers from '../components/homepage/Customers'
import Visa from '../components/homepage/Visa'

export default class Homepage extends Component {

  render() {
    return (
      <div>
        <Header />
        <div id="top-slide">
          <Navbar />
          <Firstpage />
        </div>
        <Explorer />
        <Ad />
        <Services />
        <Ad />
        <Apartments />
        <div id="visa-customers">
          <Customers />
          <div className="visa-customer"></div>
          <Visa />
        </div>
        <Footer />
      </div>
    )
  }
}
