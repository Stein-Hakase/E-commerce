import  { combineReducers } from 'redux'
import userReducer from './user/user-reducer'
import CartReducer from './Cart/CartReducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './Directory/directory.reducer'
import shopReducer from './Shop/Shop.reducer'

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']

}
const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer
})

export default persistReducer(persistConfig,rootReducer)