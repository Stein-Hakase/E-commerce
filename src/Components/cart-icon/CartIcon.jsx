import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { ToggleCart } from '../../Redux/Cart/CartAction'
const CartIcon=({ToggleCart})=>(
    <div className='cart-icon'>
        <ShoppingIcon onClick={ToggleCart} className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
)
const mapDispatchTostate=dispatch=>({
ToggleCart:()=>dispatch(ToggleCart())
})
export default connect(null,mapDispatchTostate) (CartIcon)