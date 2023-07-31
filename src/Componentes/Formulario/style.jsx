import { Button, Form, InputGroup } from "react-bootstrap";
import { styled } from "styled-components";

export const Section = styled.section`
    width: 85%;
    margin: 1.75rem auto;
    padding: 1.5rem 1rem;
    border: 2px solid #000;

    p {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #212529;
        font-size: 1.25rem;

        span {
            font-weight: 500;
        }
    }

    @media screen and (min-width: 768px){
        width: 90%;
        padding: 2.5rem 4rem;
    }

    @media screen and (min-width: 1220px){
        width: 50%;
    }
`

export const CampoForm = styled(InputGroup)`
    width: 80%;
    margin: 0 auto;
`

export const Email = styled(Form.Control)`
    border-radius: 0;
    border: 1px solid #000;
    
    ::placeholder {
        color: #6C757D;
    }
`

export const Botao = styled(Button)`
    border-radius: 0;
    border: 1px solid #9353FF;
    background-color: #9353FF;
    color: #FFF;
    padding: .56rem 1rem;

    &:hover{
        background-color: #0b5ed7;
    }
`

export const ErrorMsg = styled.div`
    text-align: center;
    color: #FF0000;
    margin-top: .25rem;
`;
