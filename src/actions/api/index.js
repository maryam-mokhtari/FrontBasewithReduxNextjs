import {mFetch, } from '../dynamicAction'

export const getTestData = () => {
  return (dispatch) => {
    return dispatch(mFetch('/api/users?page=2', 'TEST'))
  }
  // return ({
  //   type: 'TEST_SUCCESS',
  //   payload: {
  //     data: [
  //       {
  //           "id": 4,
  //           "first_name": "Eve",
  //           "last_name": "Holt",
  //           "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  //       },
  //       {
  //           "id": 5,
  //           "first_name": "Charles",
  //           "last_name": "Morris",
  //           "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  //       },
  //       {
  //           "id": 6,
  //           "first_name": "Tracey",
  //           "last_name": "Ramos",
  //           "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  //       }
  //   ]},
  // })
}
