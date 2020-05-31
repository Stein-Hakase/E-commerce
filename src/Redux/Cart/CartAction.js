import {CartToggleActions} from './CartTypes'
export const ToggleCart=()=>({
    type:CartToggleActions.TOGGLE_CART

})
export const AddToCart=(item)=>({
    type:CartToggleActions.ADD_TO_CART,
    payload:item
    
})
export const DeleteItem=(item)=>({
    type:CartToggleActions.DELETE_ITEM,
    payload:item

})
export const DecreaseItem=(item)=>({
    type:CartToggleActions.DECREASE_ITEM,
    payload:item

})