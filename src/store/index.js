import { createStore, combineReducers } from 'redux'
import UserReducer from './user/reducer'

const reducers = combineReducers({
  user: UserReducer
})

const store = createStore(reducers)

export default store