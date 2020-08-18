import React from 'react'
import PropTypes from 'prop-types'
import getThemeColor from '../../utils/getThemeColor'
import * as S from './styled'

const PostItem = ({img, date, slug, title, description, badges=[]}) => (
  <S.Post>
    <S.PostBody>
      <S.PostImg src={img} alt={title}/>
      <S.PostGap>
        <S.PostDate>{date}</S.PostDate>
        <S.PostTitle>
          <S.PostLink cover direction="left" duration={0.5} bg={getThemeColor()} to={slug}>{title}</S.PostLink>
        </S.PostTitle>
        <S.PostSubTitle>{description}</S.PostSubTitle>
      </S.PostGap>
      <S.PostTags>
        {badges.map(badge => (
          <S.Tag className={badge}>{badge}</S.Tag>
        ))}
      </S.PostTags> 
    </S.PostBody>
  </S.Post>
)

PostItem.propTypes = {
  img: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  badges: PropTypes.shape({
    badge: PropTypes.string
  })
}

export default PostItem