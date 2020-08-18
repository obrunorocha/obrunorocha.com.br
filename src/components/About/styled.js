import styled from 'styled-components'

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const Row = styled.div.attrs(props => ({
  className: "row"
}))``

export const ColDefault = styled.div.attrs(props => ({
  className: "col-sm-12"
}))``

export const LinkSocial = styled.a.attrs(props => ({
  target:"_blank",
  rel: "noopener noreferrer"
}))`
  padding: .5rem;
`
export const Gap = styled.div`
  padding-top: 1rem;
`

export const List = styled.ul.attrs(props => ({
  className: "skills"
}))`
  padding-left: 1.5rem;
`

export const PictureWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Social = styled.nav`
  display: flex;
  justify-content: center;
  background: transparent;
  padding-top: .5rem;  
`

export const Item = styled.li``