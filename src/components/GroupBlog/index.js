import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '../../utils/getThemeColor'

import PostItem from "../PostItem"

const GroupBlog = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Blog {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, 
        filter: {frontmatter: {page: {eq: "blog"}}}, 
        limit: 5) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              description
              img
              badges
            }
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges

  return (
    <>
      <h2><AniLink cover direction="left" duration={0.5} bg={getThemeColor()} to="/blog">Blog</AniLink></h2>
      {postList.map((
        {
          node: {
            frontmatter: {date, img, title, description, badges},
            fields: { slug },
          }
        }
      ) => (
        <PostItem
          slug={slug}
          img={img}
          date={date}
          title={title}
          description={description}
          badges={badges}
        />
      ))}
    </>
  )

}

export default GroupBlog