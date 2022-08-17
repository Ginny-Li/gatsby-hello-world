import React from "react"
import { graphql } from "gatsby"

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
      <div>
        <h1>{post.frontmatter.title}</h1>
        {/* dangerouslySetInnerHTML是 React 用來替代 DOM 的 innerHTML */}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
  )
}
export default BlogPost
export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
