import styled from "styled-components"
import { livros } from "../pesquisa/dadoslancamentos/index.jsx"
import {Titulo} from '../Titulo/index.jsx'
import Recomendados from "../Recomendados/index.jsx"
import LivroRecomendo from'../ima/react daora.jpg'

const UltimosLancamentosContainer = styled.section`
    background-color: white;
    padding-bottom: 20px;
    widht: 100px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: white; 
`




function UltiosLancamentos(){
return(
    <UltimosLancamentosContainer>
        <NovosLivrosContainer>
    <Titulo cor='black'>Útimos Lançamentos:</Titulo>
    { livros.map( livro => (
        <img src={livro.src}/>
    ) ) }
    </NovosLivrosContainer>
    <Recomendados
    titulo="Você também pode gostar:"
    imagem={LivroRecomendo}
    
    
    
    />
</UltimosLancamentosContainer>
)

}

export default UltiosLancamentos