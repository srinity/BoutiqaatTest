import { ActionTypes } from '../Actions'

const initialState = {
  data: {
    women: {},
    men: {}
  },
  isLoading: {
    women: false,
    men: false
  },
  error: null
}

function homeReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.HOME_REQUEST_STARTED:
      return {
        ...state,
        error: null,
        isLoading: { ...state.isLoading, [action.payload]: true }
      }

    case ActionTypes.HOME_REQUEST_SUCCESS:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
        isLoading: { ...state.isLoading, [action.meta]: false }
      }

    case ActionTypes.HOME_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: { ...state.isLoading, [action.meta]: false }
      }

    default:
      return state
  }
}

export default homeReducer
