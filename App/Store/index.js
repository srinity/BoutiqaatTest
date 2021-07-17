import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import Thunk from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import Reactotron from '../Config/ReactotronConfig'

import { HomeReducer, WishListReducer } from './Reducers'

const persistWishListConfig = {
  key: 'WishList',
  storage: AsyncStorage,
  whitelist: ['items']
}

const middleWares = [Thunk]

const rootReducer = combineReducers({
  home: HomeReducer,
  wishList: persistReducer(persistWishListConfig, WishListReducer)
})

const initialData = {}
const storeAppliedMiddleWare = applyMiddleware(...middleWares)

const store = createStore(
  rootReducer,
  initialData,
  compose(storeAppliedMiddleWare, Reactotron.createEnhancer())
)

const persistor = persistStore(store)

export { persistor }

export default store
