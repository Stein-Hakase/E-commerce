import {CartToggleActions}from './CartTypes'
import {AddToCart,DecreaseItem} from './CartUtils'


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
            case CartToggleActions.DECREASE_ITEM:
                return{
                    ...state,
                    cartItems:DecreaseItem(state.cartItems,action.payload)
                }
    
        case CartToggleActions.DELETE_ITEM:
           return {
               ...state,
               cartItems:state.cartItems.filter(item=>item.id!==action.payload.id)
          }
        
        default:
            return state;
    }
}
export default CartReducer