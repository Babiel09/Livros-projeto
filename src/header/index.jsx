import Logo from '../componentes/logo/index.jsx'
import Direciona from '../componentes/direcionamentos/index.jsx'
import Cones from '../componentes/cones/index.jsx'
import styled from 'styled-components'

const HeaderContainer = styled.header`
background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`


function Header(){
    return(
        <HeaderContainer>
        <Logo/>
        <Direciona/>
        <Cones/>
        </HeaderContainer>
    )
}

export default Header 