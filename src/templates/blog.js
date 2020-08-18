import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import SEO from "../components/seo"

import * as S from '../components/Blog/styled'
import PostItem from "../components/PostItem"
import Pagination from '../components/Pagination'

const Blog = props => {
  const postList = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/page/${currentPage - 1}`
  const nextPage = `/blog/page/${currentPage + 1}`  

  return (
  <Layout>
    <SEO title="Blog"/>
    <S.Container>
      <S.PageTitle>Blog</S.PageTitle>    
      <S.LastPosts>
      
      {postList.map(({
        node: {
          frontmatter: {date, img, title, description, badges, page},
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
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {page: {eq: "blog"}}}
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

export default Blog