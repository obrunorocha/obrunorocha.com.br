import React from "react"
import GlobalStyles from '../styles/global'
import Layout from "../components/Layout"
import * as S from '../components/Contact/styled'

const Thanks = () => (
  <Layout>
    <GlobalStyles />
    <S.ThanksContainer>
      <S.Title>Mensagem enviada com sucesso!</S.Title>
      <S.Description>Obrigado pelo contato, em breve irei responder a sua mensagem!</S.Description>
      <S.ThanksButton to="/contato" >Voltar</S.ThanksButton>
    </S.ThanksContainer>
  </Layout>
)

export default Thanks