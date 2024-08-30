import styled from 'styled-components'


const DirecionaContainer = styled.ul `
    display: flex;
    font-size: 16px;
    min-width: 120px;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0, 5px; 
    cursor: pointer;
    gap: 5rem;
    color: #black;

`

const Listacontainer = styled.li `
list-style: none;
`


const textos = ['CATEGORIAS', 'MiNHA ESTANTE', 'FAVORITOS']

function Direciona(){
    return(
        <DirecionaContainer>
            {textos.map( (texto)=> (
                <Listacontainer><p>{texto}</p></Listacontainer>
            ) )}
        </DirecionaContainer>
    )
}

export default Direciona