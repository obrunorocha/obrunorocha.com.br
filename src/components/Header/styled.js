import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const Navbar = styled.nav.attrs(props => ({
  className: "navbar navbar-expand-lg"
}))``

export const NavbarBrand = styled(AniLink).attrs(props => ({
  className: "navbar-brand",
}))``

export const Button = styled.button.attrs(props => ({
  className: "navbar-toggler",
  type: "button"
}))``

export const Span = styled.span.attrs(props => ({
  className: "navbar-toggler-icon"
}))``

export const NavbarCollapse = styled.div.attrs(props => ({
  className: "collapse navbar-collapse",
  id: "navbarSupportedContent"
}))``

export const MenuList = styled.ul.attrs(props => ({
  className: "navbar-nav ml-auto"
}))``

export const MenuItem = styled.li.attrs(props => ({
  className: "nav-item"
}))``

export const MenuLink = styled(AniLink).attrs(props => ({
  className: "nav-link",
}))`
  cursor: pointer;
  &.light {
    color: #d4d400;
    &:hover {
      color: #e2e240;
    }
  }
`