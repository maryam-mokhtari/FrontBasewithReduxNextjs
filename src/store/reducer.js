import ActionTypes from '../actions/ActionTypes'
import basicInitialState from './initial'
//
// const basicInitialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 0
// }

const reducer = (state = basicInitialState, action) => {
  switch (action.type) {
    case ActionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case ActionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

//
//
// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case ActionTypes.TEST_REQUEST:
//       return { ...state, isTestLoading: true, }
//     case ActionTypes.HOUSES_REQUEST:
//       return { ...state, isHousesLoading: true, }
//
//     case ActionTypes.TEST_SUCCESS:
//       return { ...state, testData: action.payload, isTestLoading: false }
//     case ActionTypes.HOUSES_SUCCESS:
//       return { ...state, houses: action.payload, isHousesLoading: false }
//
//     case ActionTypes.TEST_FAILURE:
//       return { ...state, isTestLoading: false, }
//     case ActionTypes.HOUSES_FAILURE:
//       return { ...state, isHousesLoading: false, }
//
//     default:
//       return state
//
//   }
// }
//
export default reducer
