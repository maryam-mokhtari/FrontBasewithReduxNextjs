import React, { Component } from 'react'
import { isArrayOK } from '../../utils/array'
import Explorer from '../general/Explorer'
import ToppageBar from './ToppageBar'
import Plus from './Plus'
import Normal from './Normal'
import SearchMap from './SearchMap'
import ShowmapButton from './ShowmapButton'
import Loading from '../nodata/Loading'
import NoData from '../nodata/NoData'

export default class Main extends Component {
  render() {
    const PLUSCOUNT = 2
    const NORMAL1COUNT = 2
    const NORMAL2COUNT = 2
    const { isHousesLoading, houses } = this.props
    console.log('Main Props:', this.props);
    return (
      <span>
      {isHousesLoading?
        <Loading />
        :
        houses && isArrayOK(houses.rooms)?
        <main id="main" className="sec search-main">
          <ToppageBar />
          <main id="inner-main">
            <div id="search-result">
              <Explorer id="explorer2" isInner={true} />
              <Plus houses={houses.rooms.filter((item, index) => item.is_plus).filter((item, index) => index < PLUSCOUNT)} />
              <Normal houses={houses.rooms} normal1Count={NORMAL1COUNT} normal2Count={NORMAL2COUNT} />
            </div>
            <SearchMap />
          </main>
          <ShowmapButton />
        </main>
        :
        <NoData />
      }
      </span>
    )
  }
}
