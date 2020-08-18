import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

const Avatar = () => {
  const { profileImage } = useStaticQuery(
    graphql`
      query{
        profileImage: file(relativePath: { eq: "profile.webp" }){
          childImageSharp {
            fluid(maxWidth:180, maxHeight: 180){
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  return <S.AvatarImage fluid={profileImage.childImageSharp.fluid} alt="Bruno Rocha" />
} 

export default Avatar