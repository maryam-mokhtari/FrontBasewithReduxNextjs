import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Head from 'next/head'
import { startClock, addCount, serverRenderClock } from '../src/actions'
import Page from '../components/Page'
import Homepage from '../components/Homepage'
import Apartments from '../components/homepage/Apartments'

class Index extends React.Component {

  static getInitialProps ({ store, isServer }) {
    store.dispatch(serverRenderClock(isServer))
    store.dispatch(addCount())

    return { isServer }
  }

  componentDidMount () {
    this.timer = this.props.startClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/css/base.css" />
          <link rel="stylesheet" href="/static/css/search.css" />
          <link rel="stylesheet" href="/static/css/switch.css" />
          <link rel="stylesheet" href="/static/css/page.css" />
          <link rel="stylesheet" href="/static/css/collapse.css" />
          <link rel="stylesheet" href="/static/css/sidenav.css" />
          <link rel="stylesheet" href="/static/css/login.css" />
          <link rel="stylesheet" href="/static/css/override.css" />
          <link rel="stylesheet" href="/static/css/responsive-min.css" />
          <link rel="stylesheet" href="/static/css/responsive-max.css" />
          <link rel="stylesheet" href="/static/css/r-max.css" />
          <link rel="stylesheet" href="/static/css/r-min.css" />
          <link rel="stylesheet" href="/static/css/page-r-max.css" />
          <link rel="stylesheet" href="/static/css/page-r-min.css" />
          <link rel="stylesheet" href="/static/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/static/css/owl.theme.default.min.css" />
          <link rel="stylesheet" href="/static/css/carousel.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css" />
          <link rel="stylesheet" href="/static/css/slick.css" />

          <title>BaManRo - با من رو</title>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        </Head>
        <Homepage />

        <script src="https://code.jquery.com/jquery.min.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" type="text/javascript"></script>
        <script src="/static/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="/static/js/sidenav.js" type="text/javascript"></script>
        <script src="/static/js/owl.carousel.min.js" type="text/javascript"></script>
        <script src="/static/js/base.js" type="text/javascript"></script>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCount: bindActionCreators(addCount, dispatch),
    startClock: bindActionCreators(startClock, dispatch)
  }
}


export default connect(
  null,
  mapDispatchToProps
)(Index)
