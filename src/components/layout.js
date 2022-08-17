import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
//非頁面組件（例如Layout）可以使用StaticQuery
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style= {{ margin: '0 auto', maxWidth: '700px', padding: '`${rhythm(2)`', paddingTop: '`${rhythm(1.5)`'}}
    >
      <Link to={`/`}>
        <h3
          style={{
            marginBbottom: '`${rhythm(2)`',
            display: 'inline-block',
            fontStyle: 'normal'
          }}
        >
           {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/about/`}
        style={{
          float: 'right'
        }}
      >
        About
      </Link>
      {children}
    </div>
  )
}
export default Layout
