import { RSAA } from 'redux-api-middleware'
import actionTypes from './ActionTypes'
import baseUrl from '../utils/baseurl'

export const mFetch = (endpoint, actionType, method, body, metaRequest, metaSuccess,
    isHeaderContent = true, isHeaderAccept = true, headers = {}) => {
  endpoint = baseUrl + endpoint
  console.log('mFetch:', endpoint, actionType, method, body, metaRequest, metaSuccess,
  isHeaderContent, isHeaderAccept, headers);
  const csrfToken = localStorage.getItem('token')
  if (!method) {
    method = 'GET'
  }
  // let headers = {}
  if (isHeaderContent) {
    headers['Content-Type'] = 'application/json'
  }
  if (isHeaderAccept) {
    headers['Accept'] = 'application/json'
  }
  headers['token'] = csrfToken
  console.log('headers is : ', headers)
  let request = {
    type: actionTypes[actionType + '_REQUEST']
  }
  let success = {
    type: actionTypes[actionType + '_SUCCESS'],
    payload: (action, state, response) => {
      console.log('success', actionType);
      if (response.headers.get('Content-Range')) {
        return response.json().then(data => ({
          data: data,
          range: response.headers.get('Content-Range')
        }))
      }
      const result = response.json()
      return result.data? result.data : result
    },
  }
  let failure = {
    type: actionTypes[actionType + '_FAILURE'],
    payload: (action, state, response) => {
      return response.json()
    },
  }
  if (metaRequest) {
    request.meta = metaRequest
  }
  if (metaSuccess) {
    success.meta = metaSuccess
  }
  let callAPI = {
    endpoint,
    method,
    // credentials: 'include',
    types: [
      request,
      success,
      failure
    ],
  }
  callAPI.headers = headers
  if (body) {
    callAPI.body = JSON.stringify(body)
  }
  console.log('RSAA', callAPI);
  return {
    [RSAA]: callAPI
  }
}

export const loadInfo = (endpoint, actionType, pageNumber, pageSize, sortColumn, isDescending, searchParams, ) => {
  return async (dispatch) => {
    return dispatch(mFetch(endpoint, actionType))
  }
}
