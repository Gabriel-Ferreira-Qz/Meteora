import { Cards, Imagem, Section, Titulo, Cartao, TituloCard } from "./style.jsx";

export default function Categorias({ setFiltro, apiCategorias }) {

    function handleClick(e) {
        const btnId = e.target.offsetParent.id
        setFiltro(btnId)
    }

    return (
        <Section>
            <Titulo>Busque por categoria:</Titulo>
            <Cards>
                {apiCategorias.map((item, k) =>
                    <div
                        key={k}
                        onClick={(e) => handleClick(e)}
                    >
                        <Cartao id={item.id}>
                            <Imagem variant="top" src={item.src} alt={item.alt} />
                            <TituloCard>{item.nome}</TituloCard>
                        </Cartao>
                    </div>
                )}
            </Cards>
        </Section>
    )
}