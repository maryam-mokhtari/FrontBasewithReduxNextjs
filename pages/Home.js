import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getTestData } from '../actions'
import { isArrayOK } from '../utils/array'

class Home extends Component {

  componentDidMount() {
    this.props.getTestData()
  }

  render() {
    const {
      getTestData,
      testData, isTestLoading,
    } = this.props
    return (
      <div>
      <div id="top-slide">
      </div>
        {testData && isArrayOK(testData.data)?
          testData.data.map(item => <div key={item.id}>{item.id}</div>) :
          isTestLoading?
            <div>Loading...</div> :
            <div>No Data</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {isTestLoading, testData} = state.general
  const errorMessage = state.errorMessage
  const inputValue = ownProps.location.pathname.substring(1)
  return {isTestLoading, testData, }
}

export default withRouter(connect(mapStateToProps, {
  getTestData,
})(Home))
