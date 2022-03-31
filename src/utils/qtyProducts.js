const qtyProducts = (cart)=>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.quantity 

    const sum = cart.reduce(reducer,0)
    
    return sum
}

export default qtyProducts 