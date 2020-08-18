import React from 'react'

import * as S from './styled'
import Icons from '../SocialLinks/Icons'
import content from '../SocialLinks/content'

const Gatsby = Icons[content[4].label]
const Bootstrap = Icons[content[5].label]
const Netlify = Icons[content[6].label]

const Footer = () => (
<S.Footer>
  <S.ContainerFluid>
    <S.Container>
      <S.Row>
        <S.FooterCol1>
          <S.FooterLogo>
            Bruno Rocha
          </S.FooterLogo>
          <p>Desenvolvedor Front-end - 2020</p>
        </S.FooterCol1>
        <S.FooterCol2>
          <S.FooterIcons>
            <Gatsby width="35" title={'Feito com Gatsby'} />
            <Bootstrap width="35" title={'Layout Bootstrap'} />
            <Netlify width="35" title={'Hospedado no Netlify'} />
          </S.FooterIcons>
        </S.FooterCol2>
      </S.Row>
    </S.Container>
  </S.ContainerFluid>
</S.Footer>
)

export default Footer