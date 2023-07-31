import { Beneficios, Container, Descricao, Section, Titulo } from "./style"

import troca from "../../Assets/Vector.svg"
import pix from "../../Assets/x-diamond.svg"
import sustentabilidade from "../../Assets/flower1.svg"

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
                        <Beneficios>
                            <img src={item.src} alt={item.alt} />
                            <Descricao>
                                <h3>{item.titulo}</h3>
                                <p>{item.texto}</p>
                            </Descricao>
                        </Beneficios>
                    </div>
                )}
            </Container>
        </Section>
    )
}