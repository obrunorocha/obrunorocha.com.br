import React from "react"
import GlobalStyles from '../../styles/global'
import * as S from '../components/Contact/styled'

const Thanks = () => (
  <Layout>
    <GlobalStyles />
    <S.ThanksContainer>
      <S.Title>Mensagem enviada com sucesso!</S.Title>
      <S.Description>Obrigado pelo contato, em breve irei responder a sua mensagem!</S.Description>
      <S.Button to="/contato" >Voltar</S.Button>
    </S.ThanksContainer>
  </Layout>
)

export default Thanks