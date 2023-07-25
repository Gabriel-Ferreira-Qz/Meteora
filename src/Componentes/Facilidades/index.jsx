import styled from "styled-components"

import troca from "../../Assets/Vector.svg"
import pix from "../../Assets/x-diamond.svg"
import sustentabilidade from "../../Assets/flower1.svg"

import FacilidadesComponentes from "./Facildades-Componentes"


const Section = styled.section`
    background-color: #000;
    color: #FFF;
    padding: 2rem 2.5rem;
`

const Titulo = styled.h2`
    text-align: center;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px){
        margin-bottom: 2.25rem;
    }
`

const Container = styled.div`
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

export default function Facilidades() {

    const item = [
        {
            "src": pix,
            "alt": "Desenho de um logo do pix",
            "texto": "Ganhe 5% OFF em pagamentos via PIX",
            "titulo": "PAGUE PELO PIX"
        },
        {
            "src": troca,
            "alt": "Desenho de duas setas em espiral",
            "texto": "Fique livre para trocar em até 30 dias.",
            "titulo": "TROCA GRÁTIS"
        },
        {
            "src": sustentabilidade,
            "alt": "Desenho de uma flor",
            "texto": "Moda responsável, que respeita o meio ambiente.",
            "titulo": "SUSTENTABILIDADE"
        },
    ]

    return (
        <Section>
            <Titulo>Conheça todas as nossas facilidades</Titulo>
            <Container>
                {item.map((item, k) =>
                    <div key={k}>
                        <FacilidadesComponentes
                            src={item.src}
                            alt={item.alt}
                            texto={item.texto}
                            titulo={item.titulo}
                        />
                    </div>
                )}
            </Container>
        </Section>
    )
}