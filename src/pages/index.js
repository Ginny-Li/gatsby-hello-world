import React from "react"
import { Link, graphql } from "gatsby"

export default function Home({ data }) {
  return (
      <div>
        <h1
          style={{
            display: "inline-block",
            borderBottom: "1px solid",
          }}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <h3
                style={{
                  marginBottom: "`${rhythm(1 / 4)}`",
                }}
              >
                {node.frontmatter.title}{" "}
                <span
                  style={{
                    color: "#bbb",
                  }}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
