import styled from "styled-components";
import Input from '../input/index.jsx'

const ParentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #0c4ba1, #2269bd);
`;


const LoginConatainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    padding: 20px;
    background-color: #2269bd;
    border-radius: 25px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);


`


function ParteLogin(){
        return(
            <ParentContainer>
            <LoginConatainer>
                <h1>Login</h1>
                <br/>
                <Input/>
            </LoginConatainer>
            </ParentContainer>
            
        )
}

export default ParteLogin