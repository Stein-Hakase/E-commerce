import {CartToggleActions}from './CartTypes'
const INITIAL_STATE={
    hidden:true
}
const CartReducer =(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case CartToggleActions.TOGGLE_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
    
        default:
            return state;
    }
}
export default CartReducer