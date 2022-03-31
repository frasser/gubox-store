import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-primary-200 mb-6 px-5">
    <div className="my-0 mx-auto w-full py-6 px-4 bg-successgreen">
      <h1 className="m-0 text-xl font-bold text-white no-underline bg-fbcolor">
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
