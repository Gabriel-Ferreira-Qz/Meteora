import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

import styled from 'styled-components';

import LogoDesktop from './img/Logo.svg'
import LogoTablet from './img/Logo-tablet.svg'
import LogoMobile from './img/Logo-mobile.svg'
import Hamburger from './img/Menu-hamburger.svg'

import HeaderLink from './HeaderLink';


const Cabecalho = styled(Navbar)`
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

const Caixa = styled(Container)`
    padding: 1.25rem ;

    @media screen and (min-width: 768px){
        width: auto;
        padding: 1.25rem 0;
        margin: 0;
    }

`

const BtnNavBar = styled(Navbar.Toggle)`
    span{
        background-image: url(${Hamburger});
        width: 18px;
        height: 18px;
    }
`

const Navegacao = styled.nav`
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

const Formulario = styled.form`
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

const InputForm = styled(Form.Control)`
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

const BtnForm = styled(Button)`
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

export default function Header({ setFiltro }) {

    const handleClick = (e) => {
        e.preventDefault()

        const valorInput = e.target.form[0].value
        setFiltro(valorInput)
    }

    const handleKey= (e) => {
        if(e.key === "Enter"){
            e.preventDefault()
            setFiltro(e.target.value)
        }
    }

    const links = [
        {
            nome: 'Home',
            href: "/"
        },
        {
            nome: 'Nossas lojas',
            href: "/"
        },
        {
            nome: 'Novidades',
            href: "/"
        },
        {
            nome: 'Promoções',
            href: "/"
        }
    ]

    return (
        <header>

            <Cabecalho expand="md" >
                <Caixa fluid>
                    <picture>
                        <source srcSet={LogoDesktop} media='(min-width: 1220px)' />
                        <source srcSet={LogoTablet} media='(min-width: 768px)' />
                        <img src={LogoMobile} alt="Logo da Montana" />
                    </picture>
                    <BtnNavBar aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Navegacao navbarScroll>
                            {links.map((link, k) =>
                                <HeaderLink
                                    nome={link.nome}
                                    key={k}
                                    href={link.href}
                                />
                            )}
                        </Navegacao>
                    </Navbar.Collapse>
                </Caixa>
                <Formulario>
                    <InputForm
                        type="search"
                        placeholder="Digite o produto"
                        aria-label="Search"
                        onKeyDown={(e) => handleKey(e)}
                    />
                    <BtnForm 
                        variant="outline-success" 
                        onClick={(e) => handleClick(e)}
                    >
                        Search
                    </BtnForm>
                </Formulario>
            </Cabecalho>
        </header>
    );
}

