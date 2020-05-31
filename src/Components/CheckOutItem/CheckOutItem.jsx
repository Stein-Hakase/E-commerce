import React from 'react'
import './CheckOutItem.scss'
import {DeleteItem,DecreaseItem,AddToCart} from '../../Redux/Cart/CartAction'
import {connect} from 'react-redux'

const CheckOutItem =({item,deletItem,decreasItem,addItem})=>{

    const {name,imageUrl,price,quantity}=item
    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'></img>
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={()=>decreasItem(item)}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow'onClick={()=>addItem(item)}>&#10095;</div>
        </span>
        <span className='price'>{price}</span>
        <div onClick={()=>deletItem(item)} className='remove-button'>&#10006;</div>

    </div>
)
}
const mapDispatchToProps=dispatch=>({
    deletItem:item=>dispatch(DeleteItem(item)),
    decreasItem:item=>dispatch(DecreaseItem(item)),
    addItem:item=>dispatch(AddToCart(item))
})
export default connect(null,mapDispatchToProps) (CheckOutItem)