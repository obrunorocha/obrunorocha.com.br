import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Row = styled.div.attrs(props => ({
  className: "row",
}))`
  display: flex;
  align-items: center;
  padding-top: 3rem;
`

export const Gap = styled.div`
  padding-top: 1rem;
` 

export const HomePosition = styled.h1`
  font-weight: bold;
`

export const Col1 = styled.div.attrs(props => ({
  className: "col-md-9 col-sm-12",
}))``

export const Col2 = styled.div.attrs(props => ({
  className: "col-md-3 col-sm-12",
}))`
  display: flex;
  justify-content: flex-end;
`

export const AvatarWrapper = styled.div.attrs(props => ({
  className: "d-none d-sm-block",
}))``

export const Link = styled(AniLink)`
  font-weight: bold;
`

export const Email = styled.strong`
  font-weight: bold;
`