import React from 'react'
import './cartItem.scss'
const CartItem=({item})=>(

    <div className='cart-item'>
        <img
            className='image'
            src={item.imageUrl}
            alt='item'
                      
        />
        <div className='item-details'>
        <span className='name'>{item.name}</span>
        <span className='price'>{item.quantity} x ${item.price}</span>
  
        </div>
       
    </div>
)

export default  (CartItem)