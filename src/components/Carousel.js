import React,{useState, useEffect} from 'react'

import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Pic1 from '../images/iot.jpg'
import Pic2 from '../images/SMART-CITY.png'
import Pic3 from '../images/CONNECTED-CARS.jpg'

const sliderData = [
  {
    image: Pic1,
    text: 'IOT ECOSISTEM PRODUCTS',
    color:'bg-indigo-900',
    id:1
  },
  {
    image: Pic2,
      text: 'IOT HARDWARE DEV BOARDS',
      color:'bg-gray-800',
      id:2
  },
  {
    image: Pic3,
      text: 'GEOLOCATION AND TRACKING SERIES',
      color:'bg-primary-100',
      id:1
  }

];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`hidden ${className}`}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    /> 
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`hidden ${className}`}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />

  );
}

const Carousel = ()=>{

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => (
      <div
        style={{
          
          borderRadius: "10px",
          padding: "30px"
        }}
      >
        <ul  style={{ margin: "0px"}}> {dots} </ul>
      </div>
    )
 
  }
    return(
      <div className="m-10 mx-auto px-5 py-2   lg:px-7 lg:py-1 bg-gray-200">


<Slider {...settings}>
{ sliderData.map((slide,i) =>{ 

  
 
  
  return (
  <div key={slide.id} className="relative rounded-lg block md:flex items-center  shadow-xl bg-gray-100 " style={{minHeight: `22rem`}}>
              <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg " style={{minHeight: `22rem`}} >
             

                  <img className="absolute inset-0 w-full h-full object-cover object-center " 
                  src={slide.image}  
                  alt="Iot pic" />
                  
                  <div className={`absolute inset-0 w-full h-full ${slide.color} opacity-75`}></div>
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white px-10">
                    
                
                    <p className="font-bold text-2xl  text-center ">{slide.text}</p>
                  </div>
                </div>
            
              <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-b-lg md:rounded-r-lg">
                <div className="p-12 md:pr-24 md:pl-16 md:py-12">
                  <p className="text-gray-600"><span className="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
                  <a className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
                    <span>Learn more about our users</span>
                    <span className="text-xs ml-1">&#x279c;</span>
                  </a>
                </div>

                <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12 " viewBox="0 0 100 100" preserveAspectRatio="none" >
                <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
               
              </div>
              
     {/* <button className="absolute top-0 mt-32 left-1.5 lg:left-0 bg-white rounded-full shadow-md  h-10 w-10  md:h-12 md:w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
        <span className="block" style={{transform: `scale(-1)`}}>&#x279c;</span>
      </button>
      <button className="absolute top-0 mt-32 right-1.5 lg:right-0 bg-white rounded-full shadow-md h-10 w-10 md:h-12 md:w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
        <span className="block" style={{transform: `scale(1)`}} >&#x279c;</span>
    </button>*/}
    </div>)})  }
    
    
    </Slider>

     </div>   

    )
}
export default Carousel

