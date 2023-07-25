import styled from 'styled-components';

const NavegacaoLink = styled.a`
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

export default function HeaderLink({ nome, href }) {
    return (
        <>
            <NavegacaoLink href={href} onClick={(e) => e.preventDefault()}>{nome}</NavegacaoLink>
        </>
    )
}