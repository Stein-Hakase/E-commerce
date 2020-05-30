import React from 'react'
import './CollectionItem.scss'
import CustomButton from '../Custom-button/CustomButton'
import { connect } from 'react-redux'
import {AddToCart} from '../../Redux/Cart/CartAction'
const CollectionItem =({item,addItemToCart})=>{
    const {imageUrl,name,price}=item
    
    return(
        
        <div className='collection-item'>
            <div
            className='image'
            style={{backgroundImage:`url(${imageUrl})`}}
            
            />
     
               <div className='collection-footer'>
                   <span className='name'>{name}</span>
                   <span className='price'>{price}</span>

               </div>
               <CustomButton inverted onClick={()=>addItemToCart(item)}>Add To Cart</CustomButton>
            
           
        </div>
    )
}
const mapDispatchToState=dispatch=>({
    addItemToCart:item=>dispatch(AddToCart(item))
})
export default connect(null,mapDispatchToState)(CollectionItem)