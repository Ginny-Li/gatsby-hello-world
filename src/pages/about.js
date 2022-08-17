import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
//只有頁面可以進行頁面查詢
const About = ({ data }) => {
  return (
    <div>
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        We're the only site running on your computer dedicated to showing the
        best photos and videos of pandas eating lots of food.
      </p>
    </div>
  )
}
export default About
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
