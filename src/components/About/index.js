import React from 'react'
import Icons from '../SocialLinks/Icons'
import content from '../SocialLinks/content'

import Avatar from "../Avatar"
import skills from "./content"
import * as S from "./styled"

const Github = Icons[content[0].label]
const Codepen = Icons[content[1].label]
const Linkedin = Icons[content[2].label]
const Email = Icons[content[3].label]

const About = () => (
  <S.Container>
    <S.Row className="pt-5">
      <S.ColDefault>
        <S.PictureWrapper>
            <Avatar/>
        </S.PictureWrapper>
        <S.Social>
          <S.LinkSocial href={content[0].url} title={content[0].label}>
            <Github width="40"/>
          </S.LinkSocial>
          <S.LinkSocial href={content[1].url} title={content[1].label}>
            <Codepen width="40" />
          </S.LinkSocial>
          <S.LinkSocial href={content[2].url} title={content[2].label}>
            <Linkedin width="40"/>
          </S.LinkSocial>
          <S.LinkSocial href={content[3].url} title={content[3].label}>
            <Email width="40" />
          </S.LinkSocial>
        </S.Social>
      </S.ColDefault>

      <S.Row className="d-flex align-items-center">
        <S.ColDefault>
          <S.Gap>
            <h1>Sobre</h1>
            <p>Eu me chamo Bruno, sou natural de Sorocaba/SP e sou Desenvolvedor Front-end.</p>
            <p>Cursei Ciência da Computação na Universidade de Sorocaba - Uniso e tive algumas experiências profissionais na área de desenvolvimento web. 
              Fiz trabalho voluntário na faculdade ministrando aulas de lógica de programação e programação em linguagem c++.</p>
            <p>Por que Desenvolvimento Frontend? A área é muito dinâmica, sempre tem coisas interessantes para se aprender.</p>
            <p>Eu sou uma pessoa que gosta muito de aprender coisas novas, gosto de trabalhar em equipe, pois isso gera mais conhecimento e desafios novos a 
              cada dia.</p>
          </S.Gap>
        </S.ColDefault>        
      </S.Row>
      
      <S.Row className="pt-3">
        <h2>Habilidades</h2>
        <S.List>
          {skills.map((skill, i) => (
            <S.Item key={i}>{skill.name}</S.Item>
          ))}
        </S.List>     
        <p>O que eu não souber, eu aprendo rápido.</p>
      </S.Row>
    </S.Row>
  </S.Container>
)

export default About