import styled from "styled-components";

export const Titulo = styled.h2`
width: 100%;
padding: 30px 0;
background-image: linear-gradient(90deg, #002F52 35%, #326589)
border: solid-black;
color: ${props => props.cor || "white"};
font-size: ${props => props.fonte || "36px"};
text-align: ${props => props.alinhamento || "center"};
margin: 0;
`