import {graphql, useStaticQuery} from 'gatsby'

export default function useProducts(){
    const result = useStaticQuery(graphql`
    query MyQuery {
        allStrapiProduct {
            edges {
              node {
                id
                name
                price
                qty
                slug
                details
                tags {
                  name
                }
                cover {
                  
                  localFile {
                    id
                    publicURL
                  }
                }
              }
            }
          }
      }
    `)
    return result
}