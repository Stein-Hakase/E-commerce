import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { ToggleCart } from '../../Redux/Cart/CartAction'

const CartIcon=({ToggleCart,items})=>(
    <div className='cart-icon'>
        <ShoppingIcon onClick={ToggleCart} className='shopping-icon'/>
        <span className="item-count">{items.length}</span>
    </div>
)
const mapDispatchTostate=dispatch=>({
ToggleCart:()=>dispatch(ToggleCart())
})
const mapStateToProps=(state)=>({
    items:state.cart.cartItems
    })
export default connect(mapStateToProps,mapDispatchTostate) (CartIcon)