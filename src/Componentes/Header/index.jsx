import Navbar from 'react-bootstrap/Navbar';

import LogoDesktop from '../../Assets/img-header/Logo.svg'
import LogoTablet from '../../Assets/img-header/Logo-tablet.svg'
import LogoMobile from '../../Assets/img-header/Logo-mobile.svg'

import { BtnForm, BtnNavBar, Cabecalho, Caixa, Formulario, InputForm, Navegacao, NavegacaoLink } from './style';

export default function Header({ setFiltro }) {

    const handleClick = (e) => {
        e.preventDefault()

        const valorInput = e.target.form[0].value
        setFiltro(valorInput)
    }

    const handleKey = (e) => {
        if (e.key === "Enter") {
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
                        <Navegacao $navbarScroll>
                            {links.map((link, k) =>
                                <NavegacaoLink
                                    href={link.href}
                                    onClick={(e) => e.windows.reload()}
                                    key={k}
                                >
                                    {link.nome}
                                </NavegacaoLink>
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

