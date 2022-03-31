/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async({graphql,actions})=>{
    const {createPage} = actions
    const productTemplate = path.resolve(`src/templates/Produ.js`)
    const result = await graphql(`
    query GET_PRODUCTS {
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
              id
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

  if (result.errors) {
      throw result.errors
  }
  result.data.allStrapiProduct.edges.forEach(({ node }) => {
    createPage({
      path: `${node.slug}`,
      component: productTemplate,
      context: node,
    })
  })

}


/**
 * 
 * 
 *   // Create a page for each product.
  allCategory.forEach(category => {
    category.CatalogEntryView.forEach(product => {
        createPage({
            path: `/category/10001/product/${product.uniqueID}/`,
            component: require.resolve("./src/templates/product.js"),
            context: { product },
        })
    })
})
 */