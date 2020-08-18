import React from 'react'

import * as S from './styled'
import GlobalStyles from '../../styles/global'

const NotFound = () => (
  <>
    <GlobalStyles />
      <S.Container>
        <S.Title>404 :(</S.Title>
        <S.Description>Ooops!... A página que você estava procurando não foi encontrada.</S.Description>
        <S.Button to="/" >Voltar para Home</S.Button>
      </S.Container>
  </>
)

export default NotFound