import { useState } from "react";
import { Card } from "react-bootstrap";

import { Botao, CardTitulo, Cartao, Cartoes, Descricao, ErroDeBusca, Preco, Section, Titulo } from "./style";

import ManequimError from "../../Assets/dummy-error.png"

import ModalProdutos from "../ModalProdutos";


export default function Produtos({ apiProdutos, pesquisaFiltrada, valorDaBusca }) {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const handleClick = (e) => {
        const alvo = e.target.id
        const valor = apiProdutos.filter((produto) => produto.id === alvo)
        setProdutoModal(valor[0])
        handleShow()
    }

    const [produtoModal, setProdutoModal] = useState(
        {
            imagem: '',
            alt: '',
            titulo: '',
            descricao: '',
            preco: '',
        }
    )

    const isError = pesquisaFiltrada[0] === undefined

    return (
        <Section>
            <h2>
                {isError ? "OPS!" : "Produtos que estão bombando!"}
            </h2>
            <Cartoes $isError={isError}>
                {isError ? (
                    <ErroDeBusca>
                        <img src={ManequimError} alt="Desenho do um manequim" />

                        <p>Sua busca por <span>{valorDaBusca}</span> não gerou resultados.<br></br>Nossas categorias podem ter o que você procura!</p>
                    </ErroDeBusca>
                ) :
                    pesquisaFiltrada.map((produto, k) =>
                        <Cartao key={k}>
                            <Card.Img
                                variant="top"
                                src={produto.imagem}
                                alt={produto.alt} />
                            <CardTitulo>
                                <Titulo>{produto.titulo}</Titulo>
                                <Descricao>{produto.descricao}</Descricao>
                                <Preco>{produto.preco}</Preco>

                                <Botao
                                    variant="primary"
                                    id={produto.id}
                                    onClick={(e) => handleClick(e)}
                                >
                                    Ver mais
                                </Botao>
                            </CardTitulo>
                        </Cartao>
                    )
                }
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