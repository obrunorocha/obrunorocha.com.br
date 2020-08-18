import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Post = styled.div.attrs(props => ({
  className: "card"
}))`
  background-color: var(--card);
  margin-top: 1rem;
  padding: 0;
`

export const PostBody = styled.div.attrs(props => ({
  className: "card-body"
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 600px){
    padding: 1rem 1rem;
  }
`
export const PostImg = styled.img.attrs(props => ({
  className: 'd-none d-sm-block'
}))`
  width: 150px;
  height: 100px;
  object-fit: cover;
`

export const PostGap = styled.div.attrs(props => ({
  className: 'pl-md-3'
}))``

export const PostDate = styled.div.attrs(props => ({
  className: 'postDate'
}))``

export const PostTitle = styled.div.attrs(props => ({
  className: 'postTitleCard'
}))``

export const PostSubTitle = styled.div.attrs(props => ({
  className: 'card-subtitle'
}))``

export const PostLink = styled(AniLink).attrs(props => ({
  className: 'stretched-link'
}))``

export const PostTags = styled.div.attrs(props => ({
  className: 'ml-md-auto'
}))`
  text-transform: capitalize;
`

export const Tag = styled.span.attrs(props => ({
  className: 'badge'
}))``