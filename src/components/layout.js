/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./Nav"
import Footer from './Footer'
//import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div>
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      </div>
      <div className=" bg-gray-200 pt-5 lg:pt-4 w-full mx-auto ">

        <main>{children}</main>
        
      </div>
      <Footer className="my-0 mx-auto w-full "/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
