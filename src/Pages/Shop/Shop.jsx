import React from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../Components/Preview-Collection/PreviewCollection'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:SHOP_DATA,
        }
    }

    render(){
        return(
            <div className='shop-page'>
                {
                    this.state.data.map(({id,...shop}) =>
                        <PreviewCollection key={id} {...shop} />
                    )
                }
            </div>
        )
    }
}
export default Shop