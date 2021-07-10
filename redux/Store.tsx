import { createStore } from 'redux'
import { headerReducer } from './Reducers/index'
const Store = createStore(headerReducer)
export default Store