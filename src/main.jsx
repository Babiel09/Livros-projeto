import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle `

body {
    margin: 0;
}

  li{
list-style: none;
}
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle/>
    <App />
  </StrictMode>,
)
