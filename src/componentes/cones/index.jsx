import perfil from '../ima/perfil.svg'
import sacola from '../ima/sacola.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul `
    display: flex;
    cursor: pointer;
    align-items: center;
    .nenones{
}
`

const ListinhaIco = styled.li `
list-style: none;
margin-right: 40px;
`



const cones= [perfil, sacola]


function Icones(){
    return(
        <IconesContainer>
            { cones.map( (cone)=> (
            <ListinhaIco><img src={cone}/></ListinhaIco> )) }
        </IconesContainer>
    )
}

export default Icones