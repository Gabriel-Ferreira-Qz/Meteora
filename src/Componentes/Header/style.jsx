import { Button, Container, Form, Navbar } from "react-bootstrap"
import styled from "styled-components"

import Hamburger from '../../Assets/img-header/Menu-hamburger.svg'

export const Cabecalho = styled(Navbar)`
    background-color: #000;
    padding: 0;
    position: fixed;
    z-index: 100;
    width: 100%;
    
    @media screen and (min-width: 768px){
        margin: 0;
        display: flex;
        padding: 0 1.25rem;
        justify-content: space-between;
    }
 
`

export const Caixa = styled(Container)`
    padding: 1.25rem ;

    @media screen and (min-width: 768px){
        width: auto;
        padding: 1.25rem 0;
        margin: 0;
    }

`

export const BtnNavBar = styled(Navbar.Toggle)`
    span{
        background-image: url(${Hamburger});
        width: 18px;
        height: 18px;
    }
`

export const Navegacao = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    font-size: 1rem;

    a {
        width: 100%;
        text-align: center;
    }

    @media screen and (min-width: 768px){
        font-size: .875rem;
        flex-direction: row;
        margin-left: 1.25rem;
        gap: 20px;

        a {
            width: auto; 
            text-align: center;
        }
    }

    @media screen and (min-width: 1220px){
        gap: 40px;
        margin-left: 2.25rem;
    }
`

export const NavegacaoLink = styled.a`
    color: #FFF;
    padding: .5rem 0;
    text-decoration: none;
    position: relative;

    @media screen and (min-width: 768px){
        padding: 0;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 2px;
        background-color: #FFF;
        transform: scaleX(0);
        transform-origin: center;
        transition: transform 0.3s ease 0s;
    }
    
    &:hover::after {
        transform: scaleX(1);
    }
`

export const Formulario = styled.form`
    display: flex;
    background-color: #FFF;
    width: 100%;
    padding: 1.5rem 0;
    justify-content: center;
    gap: 16px;

    @media screen and (min-width: 768px){
        background-color: #000;
        width: 36vw;
        padding: 0;
        justify-content: end;
        gap: 16px;
    }
`

export const InputForm = styled(Form.Control)`
    width: 60%;
    border: 1px solid #000;
    padding: 9px 12px;
    border-radius: 0;

    @media screen and (min-width: 1220px){
        width: 45%;
    }

    &:hover{
        outline: #198754 solid 1px;
        border: #198754 solid 1px;
    }

    &:focus {
        border: #198754 solid 1px;
        box-shadow: #198754 0px 0px 7px 1px;
    }

`

export const BtnForm = styled(Button)`
    border: 1px solid #000;
    border-radius: 0;
    background-color: #FFF;
    color: #000;
    
    &:hover {
        border: 1px solid #FFF;
        color: #FFF;
        background-color: #2b2a2a;
    }

    @media screen and (min-width: 768px){
        border: 1px solid #FFF;
        background-color: #000;
        color: #FFF;
    }
`
