import styled from 'styled-components'

export const Row = styled.div.attrs(props => ({
  className: "row"
}))`
  display: flex;
  align-items: center;
  padding-top: 3rem;
`

export const Col1 = styled.div.attrs(props => ({
  className: "col-md-9 col-sm-12"
}))``

export const Col2 = styled.div.attrs(props => ({
  className: "col-md-3 col-sm-12"
}))``

export const Blog = styled.div.attrs(props => ({
  className: "blog"
}))`
  padding-bottom: 3rem;
`

export const Date = styled.span.attrs(props => ({
  className: "badge datatime"
}))`
  padding-left: 0;
`

export const Tag = styled.span.attrs(props => ({
  className: "badge"
}))``
