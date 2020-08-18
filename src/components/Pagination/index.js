import React from 'react'
import propTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor'

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage
}) => (

  <S.PaginationWrapper>
    {!isFirst && <AniLink cover direction="right" duration={0.5} bg={getThemeColor()} to={prevPage}>Anterior</AniLink>}
    <span>
      {currentPage} de {numPages}
    </span>
    {!isLast && <AniLink cover direction="left" duration={0.5} bg={getThemeColor()} to={nextPage}>Próxima</AniLink>}
  </S.PaginationWrapper>
)

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
  posts: propTypes.string
}

export default Pagination