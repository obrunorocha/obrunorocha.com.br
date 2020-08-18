import styled from "styled-components"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const RecommendedWrapper = styled.section`
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 2rem 0;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  &:hover {
  }
  &.previous {
    justify-content: flex-start;
  }
  &.next {
    justify-content: flex-end;
  }
`