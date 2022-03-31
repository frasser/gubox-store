import * as React from 'react'
import {useState} from 'react'
//import Layout from '../components/layout'
import Seo from "../components/seo"
import Brands from '../components/Brands'
import InfoShopping from '../components/InfoShopping'
import SearchBar from '../components/SearchBar'
import Filter from '../components/Filter'
import Products from '../components/Products'

import useProducts from '../hooks/useProducts'

/*export const query = graphql`
  
query MyQuery {
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



const Shop = ({data}) => {
  const response = useProducts();
  const products = response.allStrapiProduct.edges

  //console.log('response hook AllProducts--(shop)',response);

 
  
    const [containerState, setContainerState] = useState({
    loading:true,
    error:null,
    data:undefined,
    modalIsOpen:false
    })
    const handleOpenModal = e =>{
        setContainerState({modalIsOpen: true});
      };
      
      const handleCloseModal = e =>{
        setContainerState({modalIsOpen: false});
      };

    return (
        <>
            <Seo title="Store" />
            <SearchBar 
              onOpenModal={handleOpenModal} 
              onClose={handleCloseModal}
              modalIsOpen={containerState.modalIsOpen}
            />

            <div className="lg:grid grid-cols-4 gap-1 w-full  min-h-screen pt-14">
                <div className="hidden lg:block lg:col-span-1  p-3 ">
                <Filter/>
                <InfoShopping />

                </div>
                <div className="lg:col-span-3 ">
                  <Products  products={products}/>
                </div>
                

            </div>
            
    
            

            
      
            <Brands />
            
        </>
    )
}

export default Shop

/*export const query = graphql`
  {
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
