import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )
  const author = site.siteMetadata.author

  const metaDescription = description || site.siteMetadata.description
  
  const url = site.siteMetadata.siteUrl

  const ogImage = `${url}${image || "/assets/img/cover.png"}`
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `abstract`,
          content: `Desenvolvedor Front-end Bruno Rocha Sorocaba Tutoriais Programador Web Sorocaba Otimização de Site Sorocaba Posicionamento no Google Sorocaba`,
        },
        {
          name: `keywords`,
          content: `Desenvolvedor Front-end Bruno Rocha Sorocaba Tutoriais Programador Web Sorocaba Otimização de Site Sorocaba Posicionamento no Google Sorocaba`,
        },
        {
          name: `dc.keywords`,
          content: `Desenvolvedor Front-end Bruno Rocha Sorocaba Tutoriais Programador Web Sorocaba Otimização de Site Sorocaba Posicionamento no Google Sorocaba`,
        },
        {
          name: `author`,
          content: `Bruno Rocha - Desenvolvedor Front-end Otimazação de Sites`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `geo.placename`,
          content: `Sorocaba, Sorocaba - SP, Brasil`,
        },
        {
          name: `geo.region`,
          content: `BR-São Paulo`,
        },
        {
          property: `og:site_name`,
          content: `Bruno Rocha - Desenvolvedor Front-End`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:url`,
          content: url
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `contactCity`,
          content: `Sorocaba`,
        },
        {
          name: `robots`,
          content: `all`,
        },
        {
          name: `googlebot`,
          content: `all`,
        },
        {
          name: `InktomiSlurp`,
          content: `all`,
        },
        {
          name: `Unknownrobot`,
          content: `all`,
        },
        {
          name: `distribution`,
          content: `global`,
        },
        {
          name: `rating`,
          content: `general`,
        },
        {
          name: `revisit-after`,
          content: `7 days`,
        },
        {
          name: `email`,
          content: `obrunorocha@outlook.com`,
        },
        {
          name: `HandheldFriendly`,
          content: `True`,
        },
        {
          name: `MobileOptimized`,
          content: `768`,
        },
        {
          name: `apple-mobile-web-app-capable`,
          content: `yes`,
        },
        
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
