import styled from 'styled-components'
import Login from './componentes/login part/index.jsx'
import './main.jsx'

const AppContainer = styled.div`

width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);

`


function App() {
  return(
    <AppContainer>
      <header>
      <Login/>
      </header>
    </AppContainer>

  )
}

export default App
