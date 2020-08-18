import React from 'react'
import * as S from './styled'

const Contact = () => (
  <S.Wrapper>
    <S.Container>
      <S.Row className="pt-5">
        <h1>Contato</h1>
        <p>Entre em contato comigo usando o formulário abaixo, ou envie um e-mail para: <strong>obrunorocha@outlook.com</strong></p>
        <form name="contact-form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <S.Row>
            <S.ColMedium>
              <S.TextInput placeholder="Nome" aria-label="Nome" name="nome"/>
            </S.ColMedium>
            <S.ColMedium>
              <S.TextInput placeholder="E-mail" aria-label="E-mail" name="email"/>
            </S.ColMedium>
          </S.Row>
          <S.ColDefault>
            <S.TextInput placeholder="Assunto" aria-label="Assunto" name="subject"/>
          </S.ColDefault>
          <S.ColDefault>
            <S.Textarea rows="3" name="message"/>
          </S.ColDefault>
          <S.ColDefault>
            <S.Button type="submit">Enviar</S.Button>
          </S.ColDefault>
        </form>
      </S.Row>
    </S.Container>
  </S.Wrapper>
)

export default Contact