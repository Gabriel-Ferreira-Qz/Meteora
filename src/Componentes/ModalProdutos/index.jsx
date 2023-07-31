import { Image } from 'react-bootstrap';

import CirculoCheck from '../../Assets/check-circle.svg'
import { Botao, CustomModal, Div, InputCheck, ModalBody, ModalDescricao, ModalFooter, ModalHeader, ModalTitulo, QuebraLinha } from './style';

export default function ModalProdutos({ imagem, alt, titulo, descricao, preco, handleClose, show }) {

  const inputCheckCores = [
    {
      "id": "azulClaro",
      "label": "Azul claro"
    },
    {
      "id": "offwhite",
      "label": "Offwhite"
    },
    {
      "id": "preto",
      "label": "Preto"
    },
  ]

  const inputCheckTamanhos = [
    {
      "id": "TamanhoP",
      "label": "P"
    },
    {
      "id": "TamanhoPP",
      "label": "PP"
    },
    {
      "id": "TamanhoM",
      "label": "M"
    },
    {
      "id": "TamanhoG",
      "label": "G"
    },
    {
      "id": "TamanhoGG",
      "label": "GG"
    },
  ]

  return (
    <>
      <CustomModal  
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <img src={CirculoCheck} alt="Imagem de um circulo marcado com um sinal positivo" />
          <ModalTitulo>Confira detalhes sobre o produto</ModalTitulo>
        </ModalHeader>
        <ModalBody>
          <Image src={imagem} alt={alt} />

          <ModalDescricao>
            <Div>
              <h5>{titulo}</h5>
              <p>{descricao}</p>
            </Div>

            <QuebraLinha />

            <Div>
              <h5>{preco}</h5>
              <p>Vendido e entregue por Riachuelo</p>
            </Div>

            <QuebraLinha />

            <Div>
              <h6>Cores:</h6>
              <form>
                {inputCheckCores.map((cores, k) =>
                  <div key={k}>
                    <InputCheck                  
                      inline
                      type="radio"
                      id={cores.id}
                      name="cores"
                    />
                    <label htmlFor={cores.id}>{cores.label}</label>
                  </div>
                )}
              </form>
            </Div>

            <QuebraLinha />

            <Div>
              <h6>Tamanho:</h6>
              <form>
                {inputCheckTamanhos.map((tamanho, k) =>
                  <div key={k}>
                    <InputCheck
                      inline
                      type="radio"
                      id={tamanho.id}
                      name="tamanho"
                    />
                    <label htmlFor={tamanho.id}>{tamanho.label}</label>
                  </div>
                )}
              </form>
            </Div>
          </ModalDescricao>
          
          <ModalFooter>
            <Botao onClick={handleClose}>Adicionar à sacola</Botao>
          </ModalFooter>

        </ModalBody>
      </CustomModal>
    </>
  );
}

