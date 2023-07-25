import styled from "styled-components";
import CategoriaCard from "./Categoria-Card";

import camisetas from "../../Assets/Camiseta.svg"
import bolsas from "../../Assets/Bolsa.svg"
import calcados from "../../Assets/Calçados.svg"
import calcas from "../../Assets/Calças.svg"
import casacos from "../../Assets/Casacos.svg"
import oculos from "../../Assets/Oculos.svg"

const Section = styled.section`
    text-align: center;
    width: 90%;
    margin: 1.25rem auto 3.125rem ;

    @media screen and (min-width: 768px){
        margin: 2rem auto 2.812rem ;
    }

    @media screen and (min-width: 1220px){
        width: 80%;
    }

`

const Titulo = styled.h2`
    margin-bottom: 1.25rem;
    color: #212529;
    font-size: 1.75rem;
    font-weight: 500;

    @media screen and (min-width: 768px){
        margin-bottom: 2rem;
    }
`

const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    justify-content: center;
    gap: 30px;

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: 1220px){
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
`

export default function Categorias({ setFiltro }) {

    const cardItem = [
        {
            id: 'camiseta',
            src: camisetas,
            alt: 'Imagem de uma camiseta',
            nome: 'Camisetas'
        },
        {
            id: 'bolsa',
            src: bolsas,
            alt: 'Imagem de uma bolsa',
            nome: 'Bolsas'
        },
        {
            id: 'tenis',
            src: calcados,
            alt: 'Imagem de um tênis',
            nome: 'Calçados'
        },
        {
            id: 'calça',
            src: calcas,
            alt: 'Imagem de uma calça',
            nome: 'Calças'
        },
        {
            id: 'jaqueta',
            src: casacos,
            alt: 'Imagem de um casaco',
            nome: 'Casacos'
        },
        {
            id: 'oculos',
            src: oculos,
            alt: 'Imagem de um óculos',
            nome: 'Óculos'
        },
    ]

    function handleClick(e){
        const btnId = e.target.offsetParent.id
        setFiltro(btnId)
      }

    return (
        <Section>
            <Titulo>Busque por categoria:</Titulo>
            <Cards>
                {cardItem.map((item, k) =>
                <div 
                    key={k} 
                    onClick={(e) => handleClick(e)}
                >
                    <CategoriaCard
                        src={item.src}
                        alt={item.alt}
                        titulo={item.nome}
                        id={item.id}
                    />
                </div>
                )}
            </Cards>
        </Section>
    )
}