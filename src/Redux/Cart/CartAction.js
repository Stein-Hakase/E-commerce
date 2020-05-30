import {CartToggleActions} from './CartTypes'
export const ToggleCart=()=>({
    type:CartToggleActions.TOGGLE_CART

})
export const AddToCart=(item)=>({
    type:CartToggleActions.ADD_TO_CART,
    payload:item
    
})