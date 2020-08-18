import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../components/Projetos/styled'
import PostItem from "../components/PostItem"
import Pagination from '../components/Pagination'

const Projetos = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/projetos' : `/projetos/page/${currentPage - 1}`
  const nextPage = `/projetos/page/${currentPage + 1}`  

  return (
  <Layout>
    <SEO title="Projetos"/>
    <S.Container>
      <S.LastPosts>
      <h1>Projetos</h1>
      {postList.map(({
        node: {
          frontmatter: {date, img, title, description, badges},
          fields: { slug },
        }
      }) => (
        <PostItem slug={slug} img={img} date={date} title={title} description={description} badges={badges} />
      ))}
      </S.LastPosts>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </S.Container>
  </Layout>
  )
}

export const query = graphql`
  query ProjetosList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {page: {eq: "projetos"}}}
      limit: $limit
      skip: $skip
      ){
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
`

export default Projetos