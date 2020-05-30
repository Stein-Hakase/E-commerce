import  { combineReducers } from 'redux'
import userReducer from './user/user-reducer'
import CartReducer from './Cart/CartReducer'

export default combineReducers({
    user:userReducer,
    cart:CartReducer
})