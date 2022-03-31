import React from 'react'
import Product from '../components/Product'




 const Products =({products})=>  {
    //const p = Object.values(products)
    return (
        
            <div className="  grid gap-6 grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 mt-6 p-3 md:p-5">
                {products.map(({node})=>{
                    return (
                    
                      <Product key={node.id}  node={node}/> 
                   
                    )
                })}
            </div>

            
    )
}
export default Products

