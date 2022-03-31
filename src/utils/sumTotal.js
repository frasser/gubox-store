const handleSumTotal = (mycart)=>{
    const reducer = (accumulator, currentValue)=> accumulator + currentValue.price * currentValue.quantity

    const sum = mycart.reduce(reducer,0)
    
    return sum
}

export default handleSumTotal;