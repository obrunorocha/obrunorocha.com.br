import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
h1, h2, h3 {
  font-weight: 700;
  line-height: 1.5;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2.5rem;
}

h3 {
  font-size: 2.25rem;
}

p {
  font-size: 1.12rem;
  font-weight: 400;
}

@media (max-width: 1200px) {
  h1 {
    font-size: 2.25rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.75rem;
  }
}

html, body {
  height:100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Roboto", Helvetica Neue, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  background-color: var(--bg);
  color: var(--colorFont);
}

body.light{
  --area: #f0f0f3;
  --bg: #f6f8fa;
  --colorFont: #2f363d;
  --card: #fff;
  --hover: #00bfe7;
}

body.dark{
  --area: #2f363d;
  --card: #2f363d;
  --bg: #24292e;
  --colorFont: #ffffff;
  --hover: #00bfe7;
}

a {
  text-decoration: none;
  color: var(--colorFont);
}

a:hover, .active {
  color: var(--hover);
}

footer{
  position: relative;
  margin-top: 3rem;
}

nav,
footer {
  background: var(--area);
}

.badge {
  margin: 1px;
}

.datatime {
  font-size: 1rem;
  color: var(--colorFont);
  padding-left: 0;
}

.materialize {
  background-color: #ee6e73;
  color: #ffffff;
}

.javascript {
  background-color: #F7DF1E;
  color: #000;
}

.wordpress {
  background-color: #21759B;
  color: #ffffff;
}

.bootstrap {
  background-color: #563D7C;
  color: #ffffff;
}

.nodejs {
  background-color: #339933;
  color: #ffffff;
}

.gatsby {
  background-color: #663399;
  color: #fff;
}

.react {
  background-color: #61DAFB;
  color: #000;
}

.expo {
  background-color: #000020;
  color: #fff;
}

.native {
  background-color: #0088CC;
  color: #fff;
}

.mysql{
  background-color: #4479A1;
  color: #fff;
}

.html {
  background-color: #E34F26;
  color: #ffffff;
}

.css {
  background-color: #1572B6;
  color: #ffffff;
}

.sass {
  background-color: #CC6699;
  color: #ffffff;
}

.git {
  background-color: #F05032;
  color: #ffffff;
}

.github{
  background-color: #181717;
  color: #ffffff;
}

.php {
  background-color: #777BB4;
  color: #ffffff;
}

.web {
  background-color: #0d6efd;
  color: #ffffff;
}

.imagens {
  background-color: #17a2b8;
  color: #ffffff;
}

.outros {
  background-color: #836FFF;
  color: #ffffff;
}

.filmes {
  background-color: #1f2225;
  color: #ffffff;
}

.series {
  background-color: #00cc66;
  color: #ffffff;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  color: var(--colorFont);
}

.navbar-toggler:focus {
  box-shadow: none;
}

.blogGrid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
}

.grid-row {
  margin: 5px;
}

.grid-row:nth-child(1) {
  grid-row: 1 / 3;
}

.post {
  min-height: 100vh;
}

.postDate{
  font-size: 0.8rem;
  color: var(--colorFont);
  padding-left: 0;
}

.postTitleCard{
  font-size: 1.3rem;
  font-weight: bold;
  padding-bottom: 3px;
}

.postImage img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  background: linear-gradient(180deg, rgba(27, 28, 30, 0) 0%, rgba(27, 28, 30, 0.8) 90%);
}

.skills {
  font-size: 1.125rem;
}

.scrollTop{
  display: block;
  position: fixed;
  height: 45px;
  background: var(--colorFont);
  border-radius: 10px 0 0 10px;
  border: 1px solid var(--colorFont);
  top: 75%;
  right: 0;
  color: var(--bg);
  z-index: 1;
}

.scrollTop:hover{
  color: var(--colorFont);
  background: var(--area);
  border: 1px solid var(--colorFont);
}

`
export default GlobalStyles