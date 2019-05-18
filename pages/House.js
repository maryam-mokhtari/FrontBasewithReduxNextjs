import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import withRedux from "next-redux-wrapper"
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'
import Searchbar from '../components/search/Searchbar'
import Main from '../components/house/Main'

class House extends Component {

  render() {
    const house = { id: 1, title: 'خانه ۱', is_plus: false, price: 200 }
    return (
      <div>
        <Header />
        <Navbar />
        <Searchbar />
        <Main house={house} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

export default withRouter(connect(mapStateToProps, {
})(House))
