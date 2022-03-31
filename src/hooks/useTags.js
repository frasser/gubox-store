import {graphql} from 'gatsby'

export default function useTags() {
    const result = graphql`
    query MyTags{
        allStrapiTags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `
    return result
    
}


