import { remove as _remove } from 'lodash'

import { ActionTypes } from '../Actions'

const initialState = {
  items: []
}

function wishListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.ADD_TO_WISH_LIST:
      return { ...state, items: [...state.items, action.payload] }

    case ActionTypes.REMOVE_FROM_WISH_LIST: {
      const _items = [...state.items]
      _remove(_items, (item) => {
        return item.id === action.payload?.id
      })

      return { ...state, items: _items }
    }

    default:
      return state
  }
}

export default wishListReducer
