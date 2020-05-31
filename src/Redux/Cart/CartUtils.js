export const AddToCart=(cartItems,cartItemtoAdd)=>{
    const existingCart=cartItems.find(item=>item.id===cartItemtoAdd.id)
    if (existingCart){
        return cartItems.map(
            item=>
            item.id === cartItemtoAdd.id
            ?{...item,quantity:item.quantity+1}
            :item
        )
    } 

    return [...cartItems,{...cartItemtoAdd,quantity:1}]
}
export const DecreaseItem=(cartItems,cartToDec)=>{
    const existingCart=cartItems.find(item=>item.id===cartToDec.id)
    if (existingCart.quantity===1){
      return cartItems.filter(item=>item.id!==cartToDec.id)
    }else   return cartItems.map(
        item=>
        item.id === cartToDec.id
        ?{...item,quantity:item.quantity-1}
        :item
    )
}