import {createStore} from 'redux'
import rootReducer from './StoreReducers'

const AmazonStore=createStore(rootReducer)

export default AmazonStore;