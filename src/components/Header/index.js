import React, { useState, useEffect } from 'react'
import * as S from './styled'

import Icons from '../SocialLinks/Icons'
import links from './content'
import getThemeColor from '../../utils/getThemeColor'

const Menu = Icons.Menu
const Search = Icons.Search
const Light = Icons.Light

const Header = () => {

  const [theme, setTheme] = useState(null)

  const isDarkMode = theme === 'dark'
  useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return(
  <S.Navbar>
    <S.Container>
      <S.NavbarBrand cover direction="right" duration={0.5} bg={getThemeColor()} to="/">Bruno Rocha</S.NavbarBrand>
      <S.Button data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <S.Span>
          <Menu width="24"/>
        </S.Span>
      </S.Button>
      <S.NavbarCollapse>
        <S.MenuList>
          {links.map((link, i) => (
            <S.MenuItem key={i}>
              <S.MenuLink cover direction="left" duration={0.5} bg={getThemeColor()} to={link.url} title={link.title} activeClassName="active">{link.label}</S.MenuLink>
            </S.MenuItem>
          ))}
          <S.MenuItem>
            <S.MenuLink cover direction="left" duration={0.5} bg={getThemeColor()}  to="/search">
              <Search width="24" title="Pesquisar"/>
            </S.MenuLink>
          </S.MenuItem>
          <S.MenuItem title="Mudar o tema" onClick={()=>{
                window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
              }}>
            <S.MenuLink 
              className={theme}>
              <Light width="24"/>              
            </S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavbarCollapse>
    </S.Container>
  </S.Navbar>
  )
}

export default Header