import { ADD_TO_WISH_LIST, REMOVE_FROM_WISH_LIST } from './ActionTypes'

function addToWishList(item) {
  return { type: ADD_TO_WISH_LIST, payload: item }
}

function removeFromWishList(item) {
  return { type: REMOVE_FROM_WISH_LIST, payload: item }
}

export { addToWishList, removeFromWishList }
