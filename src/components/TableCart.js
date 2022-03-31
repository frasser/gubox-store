import React,{useState,useEffect,useRef,useContext} from 'react'
import priceFormat from '../utils/priceFormat'
import handleSumTotal from '../utils/sumTotal'
import {CartContext} from '../context'
const TableCart = () => {
    
    const {cart, removeToCart,reduceQty,addQty} = useContext(CartContext)

    const shipping = 20
    const myCart = cart
    const inputRef = useRef(null)  
    const [total,setTotal] = useState(0)
    const [qty, setQty] = useState(cart.quantity)
    console.log('qty',qty);
    console.log('inputtt',inputRef);
 
    console.log('MYCARTGDGDHJDJKD',cart);
    
    const handleRemove = product => () =>{
        removeToCart(product)
        
    }
    const handleReduceQty = (prod)=>()=>{
     
        if(prod.quantity != 1 )  {  
        reduceQty(prod) 
       
        }
        
      

    }
    const handleAddQty = (prod)=>()=>{
        addQty(prod)
        console.log(prod);
    }

  /*  const handleRemoveCartItem = (item: CartItem) => {
        cartPresenter.removeCartItem(item);
      };
    
      const handleEditQuantityCartItem = (item: CartItem, quantity: number) => {
        cartPresenter.editQuantityCartItem(item, quantity);
      };
   */

      
    const getTotal = ()=>{
        setTotal(
            priceFormat(handleSumTotal(cart) + shipping) 
            
        )
    }
   
    useEffect(() => {
        //inputRef.current.focus()  
        getTotal()
      }, [cart])

  
    return (
        <>
            <div className="px-2" >
            <table className="  table-auto " >

                <tbody className="justify-between overflow-y-scroll overscroll-auto  w-full  " >
                   
                { cart.length === 0 ?(<p>0</p>):(cart.map((prod)=>{
                    console.log('PROD',prod.cover.localFile.publicURL);
                    return(
                        <tr  key={prod.pid}>
                             
                        <td className="py-2 pl-2 ">
                             <img className="h-16 w-40 rounded-lg shadow-md" src={prod.cover.localFile.publicURL} alt="hhd"  />
                            
                        </td>
                        <td className="flex flex-col  pl-2">
                            <div className="flex w-full leading-none text-sm font-semibold text-gray-700 overflow-clip overflow-hidden">
                            {prod.name}
                            </div>
                            <small className="text-gray-400 text-xs">{'PID:YOYO-7878'}</small>
                            <div className="text-gray-700 text-sm font-semibold">
                            {priceFormat(prod.price * prod.quantity)}
                            </div>
                        </td>
                        
                        <td className=" relative content-end pr-2">
                            <div className="flex flex-col  content-end  items-end">
                                <div className="flex text-gray-700  absolute top-0 right-0 mx-3 mt-0.5 ">
                                    <button onClick={handleRemove(prod)} className="h-5 w-5 font-semibold  rounded-full  pb-0.5 text-xs p-0.5 hover:bg-gray-400 hover:text-white focus:outline-none focus:text-white focus:bg-gray-400">
                                        X
                                    </button>
                                </div>
                                <div className="flex self-end mt-6 content-end h-full">   
                                <button onClick={handleReduceQty(prod)} className={` ${prod.quantity != 1 ? 'border-soft-blue-100' : 'cursor-not-allowed border-gray-200 opacity-70 '} bg-gray-100  h-8 w-8  rounded-full border-r border  cursor-pointer outline-none p-auto `}>
                                        <span className=" font-semibold text-soft-blue-100">
                                            -
                                        </span>
                                </button>
                                    <p ref={inputRef} className=" cursor-default appearance-none outline-none  focus:outline-none text-center justify-center w-5 bg-gray-200  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  ">
                                    {prod.quantity}
                                    </p>
                                <button onClick={handleAddQty(prod)}  className="  h-8 w-8  rounded-full bg-soft-blue-100  border-none cursor-pointer outline-none ">
                                        <span className="font-semibold py-1 text-white">
                                            +
                                        </span>
                                </button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    )
                })
                   



                )}





                    
                </tbody>

            </table>
            </div>

            <div className="flex flex-col justify-center   px-2">
            <div className="flex w-full py-3 px-2">
                <div className="flex bg-white rounded-lg w-full justify-between ">
                    <div className="flex py-2 px-5">
                        <input type="text" placeholder="Promo Code" className="focus:text-gray-500 focus:outline-none text-gray-300 text-sm font-semibold"/>
                    
                    </div>
                    <div className="flex p-2">
                    <button className="rounded-lg w-auto py-0.5 px-3 text-white bg-soft-blue-100 font-semibold text-sm">Apply</button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col  w-full justify-between p-4  ">
                <div className="flex flex-row justify-between border-b">
                    <div className="flex text-gray-700">subtotal</div>
                    <div className="flex "><span className="text-gray-700 font-semibold">{priceFormat(handleSumTotal(cart))} {" "}</span><span className="text-gray-400 text-xs align-text-bottom align-bottom"> {"  USD"}</span></div>
                </div>
                <div className="flex flex-row justify-between border-b">
                    <div className="flex text-gray-700">shipping</div>
                    <div className="flex "><span className="text-gray-700 font-semibold">{priceFormat(shipping)} {" "}</span><span className="text-gray-400 text-xs align-text-bottom align-bottom"> {"  USD"}</span></div>
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex text-gray-700">Cart total</div>
                    <div className="flex "><span className="text-gray-700 font-semibold">{total} {" "}</span><span className="text-gray-400 text-xs align-text-bottom align-bottom"> {"  USD"}</span></div>
                </div>
            </div >
            <div className=" text-center p-2 mt-5 ">
            <button disabled={cart.length === 0} className="bg-soft-blue-100 text-white w-auto rounded-full shadow-md font-semibold text-sm py-2 px-10 hover:bg-soft-blue-200 focus:outline-none ">
                Proceed To Checkout
            </button>
            </div>
            </div>
            
        </>
    )
}

export default TableCart
