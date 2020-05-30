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