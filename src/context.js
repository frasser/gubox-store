import React, { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const addToCart = element => {
    setCart(prev=>{
      //Is te item already added in the cart?
     // console.log('PREV',prev);
      const isItemInCart = prev.find(item => item.pid === element.pid);
      if (isItemInCart) {
        return prev.map(item =>
          item.pid === element.pid
          ? {...item,quantity:item.quantity + element.quantity}
          : item
          
          );
      }
      //fist time the item added
      return [...cart, element]
    
    }

      
      )
  }
  //[...cart, element]
  const removeToCart = payload =>{
  /*setCart({
      
    
    cart:cart.filter(items => items.pid !== payload.pid)
   
  

  }

  )

  return cart*/
  const del = cart.filter(items =>items.pid !== payload.pid)
  setCart(del)


}
const reduceQty = payload =>{
  setCart(prev=>{
    const ItemInCart = prev.find(item => item.pid === payload.pid);
    if (ItemInCart) {
      return prev.map(item =>
        item.pid === payload.pid
        ? {...item,quantity:item.quantity - 1}
        : item
        
        
        );
   
    }
    console.log('reduceQTY',cart);

  })

}
const addQty = payload =>{
  setCart(prev=>{
    const ItemInCart = prev.find(item => item.pid === payload.pid);
    if (ItemInCart) {
      return prev.map(item =>
        item.pid === payload.pid
        ? {...item,quantity:item.quantity + 1}
        : item
        
        );
    }
    console.log('addQTY',cart);

  })

}

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeToCart,
        reduceQty,
        addQty,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
