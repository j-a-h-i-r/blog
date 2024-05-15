import * as React from "react"
import { Link } from "gatsby"
import { ThemeToggle } from "./themetoggle"

const twoColLayout = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div style={twoColLayout}>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <ThemeToggle />
      </div>
    )
  } else {
    header = (
      <div style={twoColLayout}>
        <Link className="header-link-home" to="/">
          {title}
        </Link>
        <ThemeToggle />
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
