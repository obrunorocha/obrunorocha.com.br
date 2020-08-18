import styled from 'styled-components'

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const ContainerFluid = styled.div.attrs(props => ({
  className: "container-fluid"
}))``

export const Row = styled.div.attrs(props => ({
  className: "row"
}))`
  padding-top: 3rem;
`