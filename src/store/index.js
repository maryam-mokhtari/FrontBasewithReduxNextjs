import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import basicInitialState from './initial'
//
// const basicInitialState = {
//   lastUpdate: 0,
//   light: false,
//   count: 0
// }
//
// export const ActionTypes = {
//   ADD: 'ADD',
//   TICK: 'TICK'
// }

// REDUCERS
// export const reducer = (state = basicInitialState, action) => {
//   switch (action.type) {
//     case ActionTypes.TICK:
//       return Object.assign({}, state, {
//         lastUpdate: action.ts,
//         light: !!action.light
//       })
//     case ActionTypes.ADD:
//       return Object.assign({}, state, {
//         count: state.count + 1
//       })
//     default:
//       return state
//   }
// }

// ACTIONS
// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({ type: ActionTypes.TICK, light: !isServer, ts: Date.now() })
// }
//
// export const startClock = () => dispatch => {
//   return setInterval(
// }
//     () => dispatch({ type: ActionTypes.TICK, light: true, ts: Date.now() }),
//     1000
//   )
//
// export const addCount = () => dispatch => {
//   return dispatch({ type: ActionTypes.ADD })
// }






export const initStore = (initialState = basicInitialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
