import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getHouses } from '../actions'
import { isArrayOK } from '../utils/array'
import Header from '../components/Header'
import Firstpage from '../components/Firstpage'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Searchbar from '../components/search/Searchbar'
import Main from '../components/search/Main'

class Houses extends Component {

  componentDidMount() {
    this.props.getAllHouses();
  }

  render() {
    const {
      isAllHousesLoading,
      // allHouses,
    } = this.props
    const allHouses = {rooms: [
      { id: 1, title: 'خانه ۱', is_plus: true, price: 200 },
      { id: 2, title: 'خانه ۲', is_plus: false, price: 400 },
      { id: 3, title: 'خانه ۳', is_plus: true, price: 100 },
      { id: 4, title: 'خانه ۴', is_plus: false, price: 500 },
      { id: 5, title: 'خانه ۵', is_plus: false, price: 600 },
      { id: 6, title: 'خانه ۶', is_plus: true, price: 300 },
      { id: 7, title: 'خانه ۷', is_plus: false, price: 700 },
    ]}
    const mainProps = { isAllHousesLoading, allHouses, }
    return (
      <div>
        <Header />
        <Navbar />
        <Searchbar />
        <Main {...mainProps} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { isAllHousesLoading, allHouses, } = state.general
  return { isAllHousesLoading, allHouses, }
}

export default withRouter(connect(mapStateToProps, {
  getAllHouses,
})(Houses))
