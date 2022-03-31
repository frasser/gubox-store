import React,{useContext,useEffect,useState} from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import  qtyProducts from '../utils/qtyProducts'
import {IoTicketOutline} from "@react-icons/all-files/io5/IoTicketOutline"
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import {CartContext} from '../context'

const  Nav =({siteTitle})=> {
	const {cart} = useContext(CartContext)
	const [count,setCount] = useState(0)
	const [draw,setDraw] = useState(false)
	


const handleDrawerMenu = ()=>{
setDraw(!draw)

} 

	const getCount = ()=>{
        setCount(
            qtyProducts(cart)        
        )
    }


   
    useEffect(() => {
       // inputRef.current.focus()  
        getCount()
		;
      }, [cart])


    return (
		
        <nav id="header" className="fixed bg-primary-400  text-white w-full z-20 top-0">
	{/*<div id="progress" className="h-1 z-40 top-0"
		style={"background:linear-gradient(to right, #FFC100 var(--scroll), transparent 0);"}></div>*/}
	<div className="w-full md:max-w-5xl lg:max-w-7xl mx-auto flex flex-wrap  h-16 lg:h-14  mt-0 ">
		<div className="inline-block   w-3/4  md:w-5/6  text-center lg:hidden pl-14 md:pl-24 py-2 ">
			
            <Link to="/" className="text-white font-bold text-base no-underline  hover:no-underline">
                {siteTitle}
            </Link>

		</div>
		<div className="inline-block w-1/12 lg:hidden  ">
		
		
		
			<Link to="/cart">
				<button  onClick={()=>{setDraw(false)}} className="inline-flex items-center   md:px-5      focus:outline-none  hover:border-soft-blue-100   py-5">
					<div className=" relative bg-g w-auto">
						{
							count > 0 ? <div className="absolute -top-1 right-2  md:right-0  text-xs rounded-full -mt-1 -mr-2 px-1 font-bold  bg-soft-blue-100 text-white">{count}</div>:''
						}
						
					<AiOutlineShoppingCart className="text-white w-6 h-6 sm:w-7  " />

					</div>
				
				</button>
			
			</Link>
			

		</div>
		
		<div className="inline-block w-1/6 md:w-1/12 lg:hidden pr-4 bg-soft-blue-100 justify-end ">
			
			<button onClick={handleDrawerMenu} id="nav-toggle" className="flex justify-items-end px-3 py-5 md:p-5 text-white border-gray-600 focus:outline-none" >
			<svg fill="text-yellow-300" viewBox="0 0 20 20" className="w-6 h-6 fill-current">
				<title>Menu</title>
				<path fillRule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
				clipRule="evenodd">
				</path>
          	</svg>
            </button>
		</div>

        {/*******   MENU PARA VISTA MEDIA Y COMPLETA *****/}
		<div  className={`w-full  flex-grow   lg:flex lg:items-center lg:w-auto ${draw ? 'block':'hidden'}  lg:block  lg:mt-0  md:bg-transparent z-20   bg-primary-400 "
			id="nav-content`}>

            <div className="hidden lg:flex   py-2 bg-gray-700 justify-start ">
			
            <Link to="/" className="text-white font-bold text-base no-underline hover:no-underline">
                {siteTitle}
            </Link>
		    </div>
			<ul className="list-reset lg:flex justify-end flex-1 items-center  pr-5 bg-primary-400">
				<li className="mr-1 cursor-pointer">
                    <Link to="/" onClick={handleDrawerMenu} className="border-b-0 md:border-b-4 border-transparent inline-block py-3.5 px-4 text-white font-base hover:border-soft-blue-100" >
                        Home
                    </Link>
				</li>
				<li className="mr-1 cursor-pointer">
                    <Link to="/" onClick={handleDrawerMenu}  className="inline-block  hover:text-underline border-b-0 md:border-b-4 border-transparent  text-white  hover:border-soft-blue-100 py-3.5 px-4 font-">
					Products
                    </Link>
				</li>
				<li className="mr-1 cursor-pointer">
                    <Link to="/shop/" onClick={handleDrawerMenu} className="inline-block   hover:text-underline py-3.5 px-4 font-base border-b-0 md:border-b-4 border-transparent  text-white  hover:border-soft-blue-100 ">
					Shop
                    </Link>
				</li>
				<li className="mr-1 cursor-pointer">
                    <Link to="/" onClick={handleDrawerMenu} className="inline-block  hover:text-underline py-3.5 px-4 font-base border-b-0 md:border-b-4 border-transparent text-white hover:border-soft-blue-100 ">
					Support
                    </Link>
				</li>
				<li className="mr-1 cursor-pointer">
                    <Link to="/" onClick={handleDrawerMenu} className="inline-block   hover:text-underline py-3.5 px-4 font-base border-b-0 md:border-b-4 border-transparent text-white hover:border-soft-blue-100 ">
					Services
                    </Link>
				</li>
				<li className="mr-1 cursor-pointer lg:hidden ">
                    <Link to="/" onClick={handleDrawerMenu} className="inline-block   hover:text-underline py-3.5 px-4 font-base border-b-0 md:border-b-4 border-transparent text-white hover:border-soft-blue-100 ">
					Promos
                    </Link>
				</li>
			</ul>
			<div className="hidden lg:flex     justify-between  ">
			{/*<svg className="hidden md:block absolute inset-y-0 h-full w-6 fill-current text-gray-100  " viewBox="0 0 100 100" preserveAspectRatio="none" >
                <polygon points="95,0 100,0 50,100 45,100" />
	</svg>*/}
			<button  className="inline-flex items-center px-3   border-b-0 md:border-b-4 border-transparent focus:outline-none hover:border-soft-blue-100   ml-10 py-3.5">
                <IoTicketOutline className="text-white w-8 h-6"/>
            </button>

			<Link to="/cart">
			<button onClick={handleDrawerMenu}  className="inline-flex items-center px-3   border-b-0 md:border-b-4 border-transparent focus:outline-none  hover:border-soft-blue-100   ml-4 py-3.5">
				<div className=" relative bg-g w-auto">
						{
							count > 0 ? <div className="absolute -top-1 right-2  md:right-0  text-xs rounded-full -mt-1 -mr-2 px-1 font-bold  bg-soft-blue-100 text-white">{count}</div>:''
						}
					<AiOutlineShoppingCart className="text-white w-8 h-6  " />
				</div>
            </button>
			</Link>
			</div>


		</div>
	</div>
</nav>

    )
}

export default Nav


/*Style={{min height: 19 rem;}}*/

/*style="max-height: 60px;"*/