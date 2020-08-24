---
title: Como fazer um README.md personalizado no Github
description: Saiba como destacar o seu perfil no Github
date: 2020-08-24
img: assets/img/readme.webp
badges:
  - github
  - html
page: blog
---
O GitHub é uma plataforma onde hospedamos nossos códigos e projetos, mas já faz algum tempo que eles disponibilizaram um recurso onde podemos, personalizar o nosso perfil no github. Desta forma:

![Github Profile](assets/img/readme.webp "Github Profile")

Eu vou mostrar que é simples e fácil criar um README.md personalizado.

## Como criar um README.md

![Novo repositório](assets/img/repositorio.webp "Novo repositório")

A primeira coisa que devemos fazer é criar um repositório no Github com o mesmo nome do nosso username, após isso iremos marcar para inicializar o projeto com um README padrão, e por fim clique em "*Create repository*", para criar o repositório.

Após criar o repositório, você pode fazer as alterações tanto no próprio editor do código no Github ou clonar o projeto e abrir em um editor de códigos, recomendo a segunda opção.

Se você não sabe editar um arquivo markdown, <a href="https://guides.github.com/features/mastering-markdown/" alt="Markdown Tutorial" rel="noopener noreferrer" target="_blank">**clique aqui**</a>. Esse site é muito útil editar os arquivos markdown, saber como colocar um H1, listas, links e etc.

## Adicionando Badges

No site <a href="https://shields.io/" alt="Shields.io" rel="noopener noreferrer" target="_blank">**shields.io**</a> você pode criar um badge da maneira que desejar, é simples e fácil, os badges são desse jeito:

<img src="https://img.shields.io/badge/badge-este%20%C3%A9%20um%20badge-red" alt="badge"/>

Já <a href="https://github.com/alexandresanlim/Badges4-README.md-Profile" alt="Badges4" rel="noopener noreferrer" target="_blank"> **neste repositório**</a> temos alguns badges pré prontos com imagens, o repositório esta bem organizado com alguns exemplos separados por categoria, alguns deles são: social, streaming, games, skills e etc. Um exemplo do que temos lá:

<img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin"/>

## Adicionando cores e imagens svg

O site <a href="https://simpleicons.org/" alt="Simple Icons" rel="noopener noreferrer" target="_blank">Simple Icons</a> possui uma variedade enorme de icones de logos de diversos tipos, com o código das cores do logo das empresas logo abaixo, basta fazer uma busca rápida que encontramos as cores para colocarmos nos nossos badges.

Uma forma de encontrar o link de uma imagem de logotipo é trocar o nome neste link de imagem:

```html
https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white
```

No código acima, onde esta escrito Linkedin, podemos trocar por outro nome de logo, por exemplo Facebook, é só ir trocando pelo os logos que você desejar que ele faz a alteração, ou utilizar o Simple Icons para encontrar o logo que você deseja.