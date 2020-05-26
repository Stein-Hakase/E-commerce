import React from 'react'
import SHOP_DATA from './shop.data'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state={
            data:SHOP_DATA,
        }
    }

    render(){
        return(
            <div>
                this is the stupid Shop
            </div>
        )
    }
}
export default Shop