import { useState } from "react";
import styled from "styled-components";

import ProdutosCard from "./Produtos-card";
import ModalProdutos from "../ModalProdutos";

const Section = styled.section`
    width: 90%;
    margin: 0 auto 3rem;
    h2 {
        text-align: center;
        font-size: 2rem;
        font-weight: 500;
        margin-bottom: 1.875rem;
    }

    @media screen and (min-width: 1220px){
        width: 80%;
        margin: 0 auto 4rem;
    }
`

const Cartoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(0px, 1fr));
        justify-content: center;
    }

    @media screen and (min-width: 1220px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export default function Produtos({ api, pesquisaFiltrada }) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [produtoModal, setProdutoModal] = useState(
        {   
            imagem: '', 
            alt: '', 
            titulo: '', 
            descricao: '', 
            preco: '',
        }
    )


    return (
        <Section>
            <h2>Produtos que estão bombando!</h2>
            <Cartoes>
            {pesquisaFiltrada.map((produto, k) =>
                    <div key={k}>
                        <ProdutosCard
                            descricao={produto.descricao}
                            imagem={produto.imagem}
                            preco={produto.preco}
                            titulo={produto.titulo}
                            alt={produto.alt}
                            id={produto.id}
                            setProduto={setProdutoModal}
                            produtos={api}
                            handleShow={handleShow}
                        />
                    </div>
                )}
            </Cartoes>
            <ModalProdutos
                show={show}
                handleClose={handleClose}
                descricao={produtoModal.descricao}
                imagem={produtoModal.imagem}
                preco={produtoModal.preco}
                titulo={produtoModal.titulo}
                alt={produtoModal.alt}
            />
        </Section>
    )
}