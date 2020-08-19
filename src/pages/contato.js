import React from "react"
import { navigateTo } from "gatsby-link";

import * as S from '../components/Contact/styled'
import Layout from "../components/Layout"
import SEO from "../components/seo"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <SEO title="Contato"/>
        <S.Wrapper>
          <S.Container>
            <S.Row className="pt-5">
              <h1>Contact</h1>
              <p>Entre em contato comigo usando o formulário abaixo, ou envie um e-mail para: <strong>obrunorocha@outlook.com</strong></p>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
              >
                <input type="hidden" name="form-name" value="contact"/>
                <input type="hidden" name="bot-field" onChange={this.handleChange}/>
                <S.Row>
                  <S.ColMedium>
                    <S.TextInput type="text" name="name" placeholder="Nome" onChange={this.handleChange} />
                  </S.ColMedium>
                  <S.ColMedium>
                    <S.TextInput type="email" name="email" placeholder="Email" onChange={this.handleChange} />
                  </S.ColMedium>
                </S.Row>
                <S.ColDefault>
                  <S.TextInput name="subject" placeholder="Assunto" onChange={this.handleChange} />
                </S.ColDefault>
                <S.ColDefault>
                  <S.Textarea name="message" rows="3" onChange={this.handleChange} />
                </S.ColDefault>
                <S.ColDefault>
                  <S.Button type="submit">Enviar</S.Button>
                </S.ColDefault>
              </form>
            </S.Row>
          </S.Container>
        </S.Wrapper>
      </Layout>
    )
  }
}