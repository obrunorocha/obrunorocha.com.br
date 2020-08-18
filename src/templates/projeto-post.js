import React from 'react'
import { graphql } from 'gatsby'

import * as S from '../components/Post/styled'
import Layout from "../components/Layout"
import SEO from "../components/seo"
import RecommendedPosts from "../components/RecommendedPosts"

const ProjetoPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
  <Layout>
    <SEO title={post.frontmatter.title} description={post.frontmatter.description} image={post.frontmatter.img}/>
    <S.PostImage>
      <img src={post.frontmatter.img} alt={post.frontmatter.title}/>
    </S.PostImage>
         
    <S.Container>
      <S.Row className="pt-5">
        <S.ColDefault>
          <S.PostTag>{post.frontmatter.date}</S.PostTag>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.description}</p>
          <div dangerouslySetInnerHTML={{__html: post.html}}></div>
            {post.frontmatter.badges.map(badge => (
            <S.Tag className={badge}>{badge}</S.Tag>
            ))}
        </S.ColDefault>
      </S.Row>
    </S.Container>
    <S.Container>
      <S.Row>
        <S.ColDefault>
          <RecommendedPosts next={next} previous={previous}/>
        </S.ColDefault>
      </S.Row>  
    </S.Container>
  </Layout>
  )
}

export const query = graphql`
  query ProjetoPost($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      fields{
        slug
      }
      frontmatter {
        title
        description
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-br")
        img
        badges
        page
      }
      html
    }
  }
`

export default ProjetoPost