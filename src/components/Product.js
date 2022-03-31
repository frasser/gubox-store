import React,{useState} from 'react'
import {Link} from 'gatsby'
const Product = ({node}) => {
   
    const [qty, setQty] = useState(1)
    return (
        
        <div   className={` w-full max-w-sm mx-auto  rounded-3xl shadow-md overflow-hidden   `}>
        <Link to={`/${node.slug}`}>
            <div  className="flex relative items-end justify-end h-32  md:h-56 w-full bg-cover  " style={{backgroundImage: `url(${node.cover.localFile.publicURL})`}}>
                
            <div className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"></div>

                
            </div>
        </Link>
        
        <div className="px-1.5 py-1 h-24   bg-white">
        
                <div className="flex h-10 ">
                    <Link to={`/${node.slug}`}>
                        <h3 className="text-gray-700 uppercase text-xs md:text-sm font-semibold">{node.name}</h3> 
                    </Link>
                </div>
        
                <div className="flex flex-row   items-center justify-between   px-2 md:px-3 mt-1.5  ">
                    <div className="flex ">
                        <span className=" text-gray-400 text-md font-semibold align-middle ">${node.price} </span>
                    </div>

                    <div className="hidden md:flex ">
                    <button onClick={()=> (qty > 1 ? setQty(qty - 1) : null)} className=" bg-gray-100 h-full w-8 rounded-l-xl border-r cursor-pointer outline-none p-auto">
                        <span className="font-semibold">
                            -
                        </span>
                    </button>
                    <input type="text" value={qty}    min="1"  className="cursor-default appearance-none outline-none focus:outline-none text-center w-8 bg-gray-100 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "/>
                    <button  onClick={()=> setQty(qty + 1)} className=" bg-gray-100 h-full w-8 rounded-r-xl border-l cursor-pointer outline-none ">
                        <span className="font-semibold py-1">
                            +
                        </span>
                    </button>
                    </div>
                    <div className="flex ">
                    
                        <button className="p-2 rounded-lg bg-soft-blue-100 text-white hover:shadow-none hover:bg-soft-blue-200 focus:outline-none   shadow-lg">
                            <svg className="h-4 w-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>
                    
                    </div> 
                </div>


           
        </div>
        

        </div>
        
    )
}

export default Product
