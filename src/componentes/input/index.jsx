import styled from "styled-components";

const SectionInput = styled.section `
    text-align: center;
    padding: 40px;
    background-color: #1e63d6;
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;

`


const InputContainerPass = styled.input `
width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 2px solid #43dffb;
    border-radius: 25px;
    background-color: #0c4ba1;
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &::placeholder {
        color: #b3c0d9;
    }

    &:focus {
        outline: none;
        border-color: #1ecae0;
        box-shadow: 0 0 10px #1ecae0;
    }

`



const InputContainer = styled.input `
width: 100%;
    padding: 10px;
    margin: 8px 0;
    border: 2px solid #43dffb;
    border-radius: 25px;
    background-color: #0c4ba1;
    color: white;
    font-size: 16px;
    box-sizing: border-box;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &::placeholder {
        color: #b3c0d9;
    }

    &:focus {
        outline: none;
        border-color: #1ecae0;
        box-shadow: 0 0 10px #1ecae0;
    }

`

const ButãoContainer = styled.button`

width: 100%;
    padding: 12px;
    background-color: #43dffb;
    border: none;
    border-radius: 25px;
    color: #0c4ba1;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    margin-top: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
        background-color: #1ecae0;
        transform: scale(1.05);
    }

    &:active {
        background-color: #0aa6c1;
        transform: scale(1);
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(67, 223, 251, 0.5);
    }

`



function Input(){
    return(
        <SectionInput>
            <InputContainer
            placeholder="Digite seu email"
            type="email"
            required
            
            >
            </InputContainer>
            <br/>
            <InputContainerPass
            placeholder="Digite sua senha"
            type="password"
            required
            >            
            </InputContainerPass>
            <br/>
            <ButãoContainer >Efetuar o Login</ButãoContainer>
        </SectionInput>
    )
}

export default Input