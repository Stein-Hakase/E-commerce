import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './CartIcon.scss'
import { connect } from 'react-redux'
import { ToggleCart } from '../../Redux/Cart/CartAction'
import { selectCartItemsCount } from '../../Redux/Cart/cartSelectors'
import { createStructuredSelector } from 'reselect'
const CartIcon=({ToggleCart,itemsCount})=>(
    <div className='cart-icon'>
        <ShoppingIcon onClick={ToggleCart} className='shopping-icon'/>
        <span className="item-count">{itemsCount}</span>
    </div>
)
const mapDispatchTostate=dispatch=>({
ToggleCart:()=>dispatch(ToggleCart())
})
const mapStateToProps=createStructuredSelector({
    itemsCount:selectCartItemsCount
    })
export default connect(mapStateToProps,mapDispatchTostate) (CartIcon)