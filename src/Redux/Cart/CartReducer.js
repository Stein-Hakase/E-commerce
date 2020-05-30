import {CartToggleActions}from './CartTypes'
import {AddToCart} from './CartUtils'


const INITIAL_STATE={
    hidden:true,
    cartItems:[]
}
const CartReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case CartToggleActions.TOGGLE_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
        case CartToggleActions.ADD_TO_CART:
            return{
                ...state,
                cartItems:AddToCart(state.cartItems,action.payload)
            }
    
        default:
            return state;
    }
}
export default CartReducer