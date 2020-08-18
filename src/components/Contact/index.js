import React from 'react'
import * as S from './styled'

const Contact = () => (
  <S.Wrapper>
    <S.Container>
      <S.Row className="pt-5">
        <h1>Contato</h1>
        <p>Entre em contato comigo usando o formulário abaixo, ou envie um e-mail para: <strong>obrunorocha@outlook.com</strong></p>
        <form action="">
          <S.Row>
            <S.ColMedium>
              <S.TextInput placeholder="Nome" aria-label="Nome"/>
            </S.ColMedium>
            <S.ColMedium>
              <S.TextInput placeholder="E-mail" aria-label="E-mail"/>
            </S.ColMedium>
          </S.Row>
          <S.ColDefault>
            <S.TextInput placeholder="Assunto" aria-label="Assunto"/>
          </S.ColDefault>
          <S.ColDefault>
            <S.Textarea rows="3"/>
          </S.ColDefault>
          <S.ColDefault>
            <S.Button>Enviar</S.Button>
          </S.ColDefault>
        </form>
      </S.Row>
    </S.Container>
  </S.Wrapper>
)

export default Contact