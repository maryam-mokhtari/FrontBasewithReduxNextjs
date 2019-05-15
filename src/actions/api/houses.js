import {mFetch, } from '../dynamicAction'

export const getHouses = (isAll) => {
  return (dispatch) => {
    return dispatch(mFetch('/rent/search/', 'HOUSES', 'POST'))
  }
}

export const getPlusHouses = (isAll) => {
  return (dispatch) => {
    return dispatch(mFetch('/rent/search/', 'HOUSES', 'POST'))
  }
}
