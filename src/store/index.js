import {createStore} from 'redux'
import UsersReducers from './reducers/UsersReducers'

const store = createStore(UsersReducers)
export default store