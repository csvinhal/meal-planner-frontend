import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import loadingReducer, { State as LoadingState } from './loading'
import toastReducer, { State as ToastState } from './toast'

export interface RootReducer {
  toast: ToastState
  loader: LoadingState
}

const rootReducer = combineReducers({
  toast: toastReducer,
  loader: loadingReducer,
})

const store = createStore(rootReducer, composeWithDevTools())

export default store
