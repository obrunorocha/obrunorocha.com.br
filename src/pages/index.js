import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import Profile from "../components/Profile"
import GroupBlog from "../components/GroupBlog"
import GroupProject from "../components/GroupProject"
import * as S from '../components/Home/styled'

const IndexPage = () => (
  <Layout>
    <S.Container>
      <SEO title="Início"/>
      <Profile/>
      <S.Row>
        <GroupBlog/>               
      </S.Row>
      <S.Row>
       <GroupProject/>
      </S.Row>
    </S.Container>
  </Layout>
)

export default IndexPage
