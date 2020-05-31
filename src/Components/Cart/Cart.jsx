import React from 'react'
import './Cart.scss'
import CustomButton from  '../Custom-button/CustomButton'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux'
import { selectCartItems } from '../../Redux/Cart/cartSelectors'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'
import { ToggleCart } from '../../Redux/Cart/CartAction'


const Cart =({items,history,dispatch})=>{
  return(
    <div className='cart-dropdown'>
            <div className='cart-items'>
              {
                items.length?
                items.map(item=>
                  <CartItem key={item.id} item={item} />
                )
                :<span className='empty-message'>your cart is empty</span>
              }
            </div>
      <CustomButton onClick={
        ()=>{
        dispatch(ToggleCart())
        history.push('/checkout')}
        } >
          CHECK-OUT</CustomButton>
    </div>
)}
const mapStateToProps=createStructuredSelector({
  items:selectCartItems
 })

 export default withRouter(connect(mapStateToProps) (Cart))
