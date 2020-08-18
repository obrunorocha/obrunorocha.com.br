import styled from 'styled-components'
import Link from "gatsby-link"

export const Container = styled.div.attrs(props => ({
  className: "container"
}))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

export const Button = styled(Link).attrs(props => ({
  className: "btn btn-light border-secondary"
}))``

export const Title = styled.h1`
  font-size: 130px;
  @media(max-width: 600px){
    font-size: 70px;
  }
`

export const Description = styled.p`
  text-align: center;
`