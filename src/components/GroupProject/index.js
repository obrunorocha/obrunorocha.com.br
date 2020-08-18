import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '../../utils/getThemeColor'

import PostItem from "../PostItem"

const GroupProject = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query Projetos {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, 
        filter: {frontmatter: {page: {eq: "projetos"}}}, 
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

  const projetosList = allMarkdownRemark.edges

  return (
    <>
      <h2><AniLink cover direction="left" duration={0.5} bg={getThemeColor()} to="/projetos">Projetos</AniLink></h2>
      {projetosList.map((
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

export default GroupProject