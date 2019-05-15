import ActionTypes from '../ActionTypes'

export const serverRenderClock = isServer => dispatch => {
  return dispatch({ type: ActionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(
    () => dispatch({ type: ActionTypes.TICK, light: true, ts: Date.now() }),
    1000
  )
}

export const addCount = () => dispatch => {
  return dispatch({ type: ActionTypes.ADD })
}
