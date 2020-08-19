import React from "react"
import SEO from "../components/seo"
import GlobalStyles from '../styles/global'
import * as S from '../components/Contact/styled'

const Thanks = () => (
  <>
    <SEO title="Mensagem enviada!"/>
    <GlobalStyles />
    <S.ThanksContainer>
      <S.Title>Mensagem enviada com sucesso!</S.Title>
      <S.Description>Obrigado pelo contato, em breve irei responder a sua mensagem!</S.Description>
      <S.ThanksButton to="/contato" >Voltar</S.ThanksButton>
    </S.ThanksContainer>
  </>
)

export default Thanks