import Config from 'react-native-config'

import { getHomeData, mapHomeDataResponse } from '../../Services/Home/Home'

import HomeDataStubs from '../../Stubs/mock.json'

import {
  HOME_REQUEST_FAILED,
  HOME_REQUEST_STARTED,
  HOME_REQUEST_SUCCESS
} from './ActionTypes'

function getHomeDataAction(gender) {
  return (dispatch) => {
    const { mockResponse } = Config || {}

    if (mockResponse) {
      dispatch(getHomeDataStarted(gender))
      const mappedResponse = mapHomeDataResponse(HomeDataStubs)

      setTimeout(() => {
        dispatch(getHomeDataSuccess({ [gender]: mappedResponse }, gender))
      }, 3000)
    } else {
      getHomeData(
        { gender },
        {
          onStart: () => dispatch(getHomeDataStarted(gender)),
          onSuccess: (response) =>
            dispatch(getHomeDataSuccess({ [gender]: response }, gender)),
          onError: (error) => dispatch(getHomeDataFailed(error, gender))
        }
      )
    }
  }
}

function getHomeDataStarted(gender) {
  return { type: HOME_REQUEST_STARTED, payload: gender }
}

function getHomeDataSuccess(data, gender) {
  return { type: HOME_REQUEST_SUCCESS, payload: data, meta: gender }
}

function getHomeDataFailed(error, gender) {
  return {
    type: HOME_REQUEST_FAILED,
    error: true,
    payload: error,
    meta: gender
  }
}

export { getHomeDataAction }
