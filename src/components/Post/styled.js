import styled from 'styled-components'

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const Row = styled.div.attrs(props => ({
  className: "row"
}))`
  justify-content: center;
`

export const PostImage = styled.div.attrs(props => ({
  className: "postImage"
}))``

export const ColDefault = styled.div.attrs(props => ({
  className: "col-sm-12"
}))``

export const Col1 = styled.div.attrs(props => ({
  className: "col-md-9 col-sm-12"
}))``

export const Col2 = styled.div.attrs(props => ({
  className: "col-md-3 col-sm-12"
}))``

export const PostTag = styled.span.attrs(props => ({
  className: "badge datatime"
}))``

export const Tag = styled.div.attrs(props => ({
  className: "badge"
}))`
  text-transform: capitalize;
`