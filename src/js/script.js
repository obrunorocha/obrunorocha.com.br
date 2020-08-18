// pega o valor no localStorage
const nightModeStorage = localStorage.getItem('gmtNightMode')
const nightMode = document.querySelector('#nightMode')
// pega o valor do meta tag
const metaThemeColor = document.querySelector('meta[name=theme-color]')

// caso tenha o valor no localStorage
if (nightModeStorage) {
  // ativa o night mode
  document.documentElement.classList.add('nightMode')
  // pinta o theme color na meta tag
  metaThemeColor.setAttribute('content', '#2f363d')
  // já deixa o input marcado como ativo
  nightMode.checked = true
}

// ao clicar mudaremos as cores
nightMode.addEventListener('click', () => {
  // adiciona a classe `night-mode` ao html
  document.documentElement.classList.toggle('nightMode')

  // se tiver a classe night-mode
  if (document.documentElement.classList.contains('nightMode')) {
    // salva o tema no localStorage
    localStorage.setItem('gmtNightMode', true)
    // pinta o theme color na meta tag
    metaThemeColor.setAttribute('content', '#2f363d')
    return
  }
  // senão remove
  localStorage.removeItem('gmtNightMode')
  // senão bota a cor original
  metaThemeColor.setAttribute('content', '#f0f0f3')
})