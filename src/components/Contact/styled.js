import styled from 'styled-components'
import Link from "gatsby-link"

export const Container = styled.div.attrs(props => ({
  className: "container"
}))``

export const Row = styled.div.attrs(props => ({
  className: "row"
}))``

export const Wrapper = styled.div`
  height: 100vh;
`

export const ColMedium = styled.div.attrs(props => ({
  className: "col-md-6 col-sm-12"
}))`
  padding-top: 1rem;
`

export const ColDefault = styled.div.attrs(props => ({
  className: "col-sm-12"
}))`
  padding-top: 1rem;
`

export const TextInput = styled.input.attrs(props => ({
  type: "text",
  className: "form-control",
}))``

export const Textarea = styled.textarea.attrs(props => ({
  className: "form-control",
  id: "textarea",
  placeholder: "Mensagem"
}))``

export const Button = styled.button.attrs(props => ({ 
  className:"btn btn-light border-secondary"
}))``

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