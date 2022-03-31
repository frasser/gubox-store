import React from 'react'
import Slider from "react-slick";

import { Link } from "gatsby"

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`z-10 absolute top-0 mt-36 right-1.5 lg:right-0 bg-white rounded-full shadow-md h-8 w-8 md:h-12 md:w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline  ${className}`}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      > <span className="block -mt-8 ml-1  md:-mt-6 md:ml-3" style={{transform: `scale(1)`}} >&#x279c;</span>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`z-10 absolute top-0 mt-36 left-1.5 lg:left-0 bg-white rounded-full shadow-md  h-8 w-8  md:h-12 md:w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline ${className}`}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      >
        <span className="block -mt-8 py-0.5 mr-1 md:-mt-6 md:py-0.5 md:mr-3" style={{transform: `scale(-1)`}}>&#x279c;</span>  
        </div>
    );
  }
const LatestProducts =({products})=>{
    const p = Object.values(products);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
               
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />
            }
          }
        ]
      };
    return(
        <>
        <h1 className="text-2xl lg:text-4xl text-gray-700 pl-7">LATEST PRODUCTS</h1>
        

        
        
      
 { /*      <div className=" mt-6 h-64 bg-red-600">
        <span className="absolute text-sm py-2 px-4 z-10 text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-600 border-none rounded-full mt-32 left-1 cursor-pointer" onClick={prev} >
        &#8249;
      </span>
      <span className="absolute  text-sm py-2 px-4 z-10 text-gray-700 bg-gray-300 hover:text-white hover:bg-gray-600 border-none rounded-full mt-32 right-1 cursor-pointer" onClick={next} >
        &#8250;
    </span>*/}

        <div className="max-w-xs sm:max-w-sm  mx-auto px-8  md:max-w-3xl lg:max-w-5xl xl:max-w-7xl  py-2  mt-8">
        <Slider {...settings}>
            {p[0].map((slide, i) => {
                

            // const price = formatprice(node.price)
            return (
                


               


                <div  key={slide.id}  className={` w-full md:w-11/12 max-w-sm   md:ml-3.5   rounded-md shadow-md overflow-hidden inline-block bg-white   `}>
                    <div className="flex relative items-end justify-end h-56 w-full bg-cover bg-yellow-200 " style={{backgroundImage: `url(${slide.img})`}}>
                    <div className="absolute inset-0 w-full h-full bg-gray-700 opacity-20"></div>
                        <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 z-10">
                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                        </button>
                        
                    </div>
                    <div className="px-5 py-3 h-24">
                        <h3 className="text-gray-700 uppercase">{slide.name}</h3>
                        <span className="text-gray-500 mt-2">${slide.price} 
                        
                        <span className="justify-end items-end float-right text-primary-100 ">
                        <Link to="/product/id">
                            Read More <span>&#x3e;</span>
                        </Link>
                        </span>
                         </span>
        
                       
                    </div>
                    </div>


                

           

            )
            })}
            </Slider>
       </div>
            
        {/*</div>*/}
        </>
    )
}

export default LatestProducts