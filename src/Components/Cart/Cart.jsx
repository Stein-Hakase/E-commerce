import React from 'react'
import './Cart.scss'
import CustomButton from  '../Custom-button/CustomButton'
import CartItem from '../cartItem/CartItem'
import {connect} from 'react-redux'
import { selectCartItems } from '../../Redux/Cart/cartSelectors'

const Cart =({items})=>(
    <div className='cart-dropdown'>
            <div className='cart-items'>
              {
                items.map(item=>
                  <CartItem key={item.id} item={item} />
                )
              }
            </div>
      <CustomButton>CHECK-OUT</CustomButton>
    </div>
)
const mapStateToProps=(state)=>({
  items:selectCartItems(state)
 })
 export default connect(mapStateToProps) (Cart)
