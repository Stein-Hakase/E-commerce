import React from 'react'
import './CheckoutPage.scss'
import { connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItems ,selectCartItemsTotal} from '../../Redux/Cart/cartSelectors'
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem'
const CheckoutPage=({items,total})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
       
                {items.map(item=>
                  <CheckOutItem key={item.id} item={item} />
                )}
                <div className='total'>
                  <span>TOTAL: ${total}</span>

                </div>
    </div>
)
const mapStateToProps=createStructuredSelector({
    items:selectCartItems,
    total:selectCartItemsTotal
}
)
export default connect (mapStateToProps)(CheckoutPage)