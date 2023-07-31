import { styled } from "styled-components"

export const Section = styled.section`
    background-color: #000;
    color: #FFF;
    padding: 2rem 2.5rem;
`

export const Titulo = styled.h2`
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px){
        margin-bottom: 2.25rem;
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 85%;
    gap: 32px;

    @media screen and (min-width: 768px){
        width: 40%;
        margin: 0 auto;
    }

    @media screen and (min-width: 1220px){
        flex-direction: row;
        width: auto;
        justify-content: center;
        gap: 40px;
    }
`

export const Beneficios = styled.div`
    display: flex;
    gap: 24px;
    img {
        width: 72px;
        height: 72px;
    }

    @media screen and (min-width: 768px){
        justify-content: start;
    }

    @media screen and (min-width: 1220px){
        width: auto;
    }
`

export const Descricao = styled.div`
    color: #DAFF01;
    h3{
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    p{
        color: #FFF;   
        font-size: .812rem;
    }
`
