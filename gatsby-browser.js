/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const Global = require ("./src/styles/global.css")
const React = require("react")
const Layout = require("./src/components/layout").default
const {CartProvider} = require("./src/context")


exports.wrapRootElement = ({element})=>(
    <CartProvider>
        <Layout>{element}</Layout>
    </CartProvider>
)