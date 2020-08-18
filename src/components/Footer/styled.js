import styled from 'styled-components'

export const Footer = styled.footer`
  position:relative;
  bottom:0;
`

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const ContainerFluid = styled.div.attrs(props => ({
  className: "container-fluid"
}))``

export const Row = styled.div.attrs(props => ({
  className: "row"
}))``

export const FooterCol1 = styled.div.attrs(props => ({
  className: "col-md-8 col-sm-12"
}))`
  padding-top: 3rem;
  @media(min-width: 768px){
    padding-bottom: 3rem;
  }
`

export const FooterCol2 = styled.div.attrs(props => ({
  className: "col-md-4 col-sm-12"
}))`
  justify-content: flex-end;
  align-items: center;
  padding: 3rem 0;
  @media(min-width: 768px){
    display: flex;
  }
`
export const FooterLogo = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
`

export const FooterIcons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
`