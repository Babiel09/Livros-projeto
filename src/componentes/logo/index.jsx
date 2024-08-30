import logo from '../ima/logo.svg'
import styled  from 'styled-components'

const LogoContainer = styled.div `
    display: flex;
    font-size: 50px;


`

const ImagemContainer = styled.img `
    margin: 20px;
    width: 70px;
    padding: 0, 5px;
    cursor: pointer;

`

function Logo(){
    return(
        <LogoContainer>
            <ImagemContainer src= {logo} alt='Alura Books logo'></ImagemContainer>
            <p><b>Alura</b> Books</p>
        </LogoContainer>
    )
}

export default Logo
