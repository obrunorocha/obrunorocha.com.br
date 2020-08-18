import React from 'react'

import Avatar from '../Avatar'
import getThemeColor from '../../utils/getThemeColor'

import * as S from './styled'

const Profile = () => (
  <S.Row>
    <S.Col1>
      <S.Gap>
        <S.HomePosition>Desenvolvedor Front-end</S.HomePosition>
        <p>
          Eu me chamo <S.Link cover direction="left" duration={0.5} bg={getThemeColor()} to="/sobre">Bruno Rocha</S.Link>, sou Desenvolvedor Front-end e aqui é o meu espaço para compartilhar o meu conhecimento sobre a área e outros assuntos.
        </p>
        <p>
          Acesse o meu <S.Link cover direction="left" duration={0.5} bg={getThemeColor()} to="/blog">Blog</S.Link>, entre em <S.Link cover direction="left" duration={0.5} bg={getThemeColor()} to="/contato">Contato</S.Link> comigo ou envie um email para <S.Email>obrunorocha@outlook.com</S.Email>
        </p>
      </S.Gap>
    </S.Col1>
    <S.Col2>
      <S.AvatarWrapper>
        <Avatar />
      </S.AvatarWrapper>
    </S.Col2> 
  </S.Row>
)

export default Profile