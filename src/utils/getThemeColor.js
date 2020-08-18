const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if(theme === 'light') return '#f6f8fa'
  if(theme === 'dark') return '#24292e'
}

export default getThemeColor