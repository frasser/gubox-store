import React,{useState, useContext} from 'react'
import {graphql} from 'gatsby'
//import Layout from "../components/layout"
import PostsModal from './PostsModal'
import AddedModal from './AddedModal'
import PostPerProduct from './PostPerProduct'
import priceFormat from '../utils/priceFormat'
import Seo from "../components/seo"
import {CartContext} from '../context'
//import UseProduct from '../hooks/useProduct'


const ProductDetail = ({id,name,slug,details,tags,price,cover}) => {

  const formatedPrice = priceFormat(price)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = ()=>{
      addToCart({price, pid: id, name, cover, quantity: qty })
      handleOpenAddedModal()
    
  }
    
  
    const [containerState, setContainerState] = useState({
        loading:true,
        error:null,
        data:undefined,
        modalIsOpen:false
        })

    const [containerSecondState, setContainerSecondState] = useState({
        addedModalIsOpen:false
    })

        const handleOpenAddedModal = e =>{
            setContainerSecondState({addedModalIsOpen: true})
        }
        const handleCloseAddedModal = e =>{
            setContainerSecondState({addedModalIsOpen: false})
        }
    
        const handleOpenModal = e =>{
            setContainerState({modalIsOpen: true});
          };
          
          const handleCloseModal = e =>{
            setContainerState({modalIsOpen: false});
          };

         const  disableScroll = () => { document.body.style.overflow = 'hidden' }
         
  

    return (
        <>
            <Seo title="Product" />
            <div className={`h-screen md:h-auto   ${containerState.modalIsOpen?'overflow-y: hidden': 'overscroll-y-auto'}`}>
                <div className="flex flex-col  relative w-full h-full md:h-auto   pt-10 md:grid md:grid-rows-10 md:grid-cols-3 md:gap-1">

                    <div className="flex h-3/5 md:h-auto md:order-1  md:col-span-1 ">
                        <img alt={`img-${name}`} src={cover.localFile.publicURL} className="  w-full  object-center"></img>
                        <div className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"></div>
                        <div className="absolute md:hidden   p-1.5 w-40 flex   space-x-1">
                        {tags.map((tag)=>{
                          
                                                return (
                    
                                                    
                                                    <div key={tag.id} className="" >
                                                    <small className="bg-green-400 text-white rounded-md p-1  ">{tag.name}</small>
                                                    </div>
                                                  )
                        })}
                    </div>
                    </div>
                    

                    <div className="flex flex-col  bg-gray-50 md:bg-gray-100 w-full rounded-t-3xl md:rounded-none md:order-2  px-7 py-4 absolute md:static inset-x-0 bottom-0 h-2/5 md:h-auto z-0  md:col-span-2  md:grid  md:auto-rows-auto md:grid-cols-2 md:gap-3">
                        <div className="md:flex md:relative md:flex-col md:order-1 md:col-span-1  md:p-3 md:border-r">
                        <div className="flex  h-10 md:h-auto md:flex-col text-center  ">
                            <h3 className="text-gray-700 uppercase text-base text-center  font-semibold md:text-lg">{name}</h3> 
                        </div>
                        <div className="hidden md:flex  ">
                         <h1 className=" text-gray-500 font-semibold">PID: <small className=" text-gray-500 ">{'GB-MCU10'}</small></h1>
                        </div>
                        <div className="flex flex-col px-2 pb-2 md:py-3">
                            <p className="text-gray-500 text-sm md:text-base">
                            {details}<button onClick={handleOpenModal} type="button" className="bg-blue-50 rounded-3xl  py-0.1 px-1.5 text-blue-400 font-semibold md:hidden">Details +</button>
                            <PostsModal
                                    isOpen={containerState.modalIsOpen}
                                    onClose={handleCloseModal}
                                    onAfterOpen={disableScroll} 
                             />
                            </p>
                        </div>
                        <div className="hidden  p-1.5 w-40 md:flex md:absolute   space-x-1 bottom-0 ">
                        {tags.map((tag)=>{
                            
                                                return (
                    
                                                    
                                                    <div key={tag.id} className="" >
                                                    <small className="bg-green-400 text-white rounded-md p-1 md:text-base md:font-semibold ">{tag.name}</small>
                                                    </div>
                                                  )
                        })}
                        </div>
                        </div>
                        <div className="flex flex-row md:flex-col  items-center justify-between md:justify-start  md:space-y-6  px-10  mb-6   absolute md:static inset-x-0 bottom-2  md:order-2 md:col-span-1  md:p-3">
                                <div className="flex  md:order-2  md:py-6">
                                    <span className=" text-gray-700 text-lg font-semibold align-middle md:text-3xl md:font-bold"><span className="text-sm md:text-xl font-bold text-gray-600">USD</span> {formatedPrice}  </span>
                                </div>

                                <div className="flex  md:order-1  p-1 ">
                                <button onClick={()=> (qty > 1 ? setQty(qty - 1) : null)} className=" bg-gray-100 h-full md:h-8 w-8 rounded-l-xl md:rounded-full border-r md:border md:border-soft-blue-100 cursor-pointer outline-none p-auto">
                                    <span className="font-semibold md:text-soft-blue-100">
                                        -
                                    </span>
                                </button>
                                <input type="text" disabled value={qty}  min="1"  className="cursor-default appearance-none outline-none focus:outline-none text-center w-8 bg-gray-100  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  "/>
                                
                                <button onClick={()=> setQty(qty + 1)} className=" bg-gray-100 h-full md:h-8 w-8 rounded-r-xl md:rounded-full md:bg-soft-blue-100 border-l md:border-none cursor-pointer outline-none ">
                                    <span className="font-semibold py-1 md:text-white">
                                        +
                                    </span>
                                </button>
                                </div>
                                <div className="flex md:flex-row md:order-3 ">
                                
                                    <button onClick={handleSubmit} className="p-2  rounded-lg md:rounded-full bg-soft-blue-100 text-white hover:shadow-none hover:bg-soft-blue-200 focus:outline-none   shadow-lg md:w-32" >
                                        <i className="hidden md:block font-semibold text-base">Add to cart</i>
                                        <i className="block md:hidden">
                                       <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"> 
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>   
                                        </svg>
                                        </i>
                                     
                                    </button>
                                    <AddedModal
                                        isOpen={containerSecondState.addedModalIsOpen}
                                        onClose={handleCloseAddedModal}
                                        onAfterOpen={disableScroll} 
                                    />
                                
                                </div> 
                        </div>


                    </div>

                </div>
                <div className=" hidden md:flex  w-full bg-gray-50 ">
                        <PostPerProduct/>
                </div>
            </div>
        </>
    )
}

export default ProductDetail

/*export const query = graphql`
  query ProductTemplate {
    strapiProduct(id: {eq: "Product_2"}) {
        name
        slug
        details
        price
        tags {
          name
        }
      }
  }
`*/