import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getHouses, getPlusHouses, } from '../actions'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'
import Navbar from '../components/general/Navbar'
import Searchbar from '../components/search/Searchbar'
import Main from '../components/search/Main'

const path = window.location.pathname.split('/')[1]
const showType = window.location.pathname.split('/')[2]

class Houses extends Component {

  componentDidMount() {
    if (path === 'search') {
      this.props.getPlusHouses(1, 2)
      this.props.getHouses(1, 4)
    } else if (path === 'show') {
      if (showType === 'all') {
        this.props.getHouses(1, 20)
      } else if (showType === 'plus') {
        this.props.getPlusHouses(1, 20)
      }
    }
  }

  render() {
    const {
      isHousesLoading,
      isPlusHousesLoading,
      // houses, plusHouses
    } = this.props

    const houses = {rooms: [
      { id: 1, title: 'خانه ۱', is_plus: true, price: 200 },
      { id: 2, title: 'خانه ۲', is_plus: false, price: 400 },
      { id: 3, title: 'خانه ۳', is_plus: true, price: 100 },
      { id: 4, title: 'خانه ۴', is_plus: false, price: 500 },
      { id: 5, title: 'خانه ۵', is_plus: false, price: 600 },
      { id: 6, title: 'خانه ۶', is_plus: true, price: 300 },
      { id: 7, title: 'خانه ۷', is_plus: false, price: 700 },
    ]}
    const plusHouses = {rooms: [
      { id: 1, title: 'خانه ۱', is_plus: true, price: 200 },
      { id: 3, title: 'خانه ۳', is_plus: true, price: 100 },
      { id: 6, title: 'خانه ۶', is_plus: true, price: 300 },
    ]}
    const mainProps = { isHousesLoading, houses, isPlusHousesLoading, plusHouses, }
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
  const { isHousesLoading, houses, isPlusHousesLoading, plusHouses, } = state.general
  return { isHousesLoading, houses, isPlusHousesLoading, plusHouses, }
}

export default withRouter(connect(mapStateToProps, {
  getHouses, getPlusHouses,
})(Houses))
