import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

///import Layout from "../components/layout"
import Carousel from '../components/Carousel'
import Partners from '../components/Partners'

import Higlits from '../components/Higlits'
import LatestProducts from '../components/LatestProducts'
import Seo from "../components/seo"
import UseTags from '../hooks/useTags'




const mock = {
  "prod": [
    {
      "id": 1,
      "name": "Antenna yt 870-20mhz",
      "price": 2, 
      "img":'https://www.mouser.es/images/linxtechnologies/lrg/ANT-xxx-CW-HWR.jpg',
    },
    {
      "id": 2,
      "name": "Antenna 915mhz",
      "price": 5, 
      "img":'https://storage.googleapis.com/public-assets-xd-sigfox-production-338901379285/build_helicoidal.jpg',
    },
    {
      "id": 3,
      "name": "stm32h low power board",
      "price": 6, 
      "img":'https://developer.nordicsemi.com/nRF_Connect_SDK/doc/0.3.0/zephyr/_images/stm32_min_dev.jpg',
    },
    {
      "id": 4,
      "name": "Ceramic ant 920mhz",
      "price": 8, 
      "img":'https://suntsu.com/wp-content/uploads/2021/02/Antennas-Chip.jpg',
    },
    {
      "id": 5,
      "name": "Acelerometer vgu80 bread board",
      "price": 4, 
      "img":'https://core-electronics.com.au/media/catalog/product/cache/1/image/fe1bcd18654db18f328c2faaaf3c690a/1/5/15760-triple_axis_accelerometer_breakout_-_lis2dh12__qwiic_-01.jpg',
    }
  ]}

const IndexPage = () => {

  const response = UseTags();
  console.log('index response query',response);
  //const products = response.allStrapiProduct.edges

  //console.log('response hook',response);

  //console.log('query',query)
  return(
  <>
    <Seo title="Home" />
    <Carousel />
    <div className="">
    
   
   <LatestProducts products={mock}/>
   <Higlits/>
    </div>
    <div className="bg-yellow-500">
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      <Partners/>
    </div>
  </>
)
  }
export default IndexPage
/*export const pageQuery = graphql`
  query IndexQuery {
    allStrapiTags {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`*/

/*

    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />

*/
