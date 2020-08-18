import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const PostFeature = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query LastPost {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {page: {eq: "blog"}}}
      limit: 1) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
              title
              img
              badges
            }
            excerpt
          }
        }
      }
    }     
  `)

  const postFeature = allMarkdownRemark.edges

  return(
    <>
      {postFeature.map(({
        node: {
          frontmatter: {date, img, title, badges},
          fields: { slug },
          excerpt
        }
      }) => ( 
        <S.Row>
          <S.Col1>
            <S.Blog>
              <S.Date>{date}</S.Date>
              <AniLink cover direction="left" duration={0.5} bg={getThemeColor()} to={slug}><h1>{title}</h1></AniLink>
              <p>{excerpt}</p>
              {badges.map(badge => (
                <S.Tag className={badge}>{badge}</S.Tag>
              ))}
            </S.Blog>
          </S.Col1>
          <S.Col2>
            <img src={img} alt={title} className="img-fluid" />
          </S.Col2>
        </S.Row>
      ))}
   </>
  )
}

export default PostFeature