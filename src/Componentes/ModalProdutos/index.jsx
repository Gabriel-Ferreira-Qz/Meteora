import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Image } from 'react-bootstrap';
import styled from 'styled-components';

import CirculoCheck from '../../Assets/check-circle.svg'
import BtnX from '../../Assets/btn-x.svg'


const CustomModal = styled(Modal)`
  @media screen and (min-width: 576px){
    .modal-dialog{
      max-width: 98% !important;
    }
  }

  @media screen and (min-width: 1220px){
    .modal-dialog{
      max-width: 800px !important;
    }
  }

`

const ModalHeader = styled(Modal.Header)`
  background-color: #000;
  gap: 20px;
  border-radius: 4px 4px 0 0;

  button {
    background-image: url(${BtnX})
  }

`

const ModalTitulo = styled(Modal.Title)`
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 500;

`

const ModalBody = styled(Modal.Body)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 576px){
    display: grid;
    gap: 16px;
    grid-template-columns: 47% 50%;
    grid-template-rows: 1fr;
    justify-content: center;
    padding: 1rem 1rem 2rem 1rem;
  
    img {
      object-fit: cover;
      width: 100%;
    }
  }

`

const ModalDescricao = styled.section`
  padding: 1.5rem 1rem 1rem;

  @media screen and (min-width: 576px){
    padding: 0;
  }

`

const Div = styled.div`
  &:nth-child(-n + 3){  
    display: flex;
    flex-direction: column;
    gap: 24px;

    h5{
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
    }

    p{
      color: #212529;
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }

  &:nth-child(3){
    margin: 24px 0;

    h5{
      color: #212529;
      font-size: 20px;
      font-weight: 500;
    }

    p{
      margin: 0;
      color: #ADB5BD;
      font-size: .813rem;
      font-weight: 400;
    }
  }

  &:nth-child(n + 4){
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 16px 0;

    h6{
      color: #212529;
      font-size: .813rem;
      font-weight: 700;
    }

    form{
      display: flex;
      gap:18px;
      
      div{
        text-align: center;

        label{
          color: #212529;
          font-size: .813rem;
          font-weight: 400;
          cursor: pointer;
        }
      }
    }
  }

  &:last-child{
    margin: 1rem 0 0 0; 
  }
`

const InputCheck = styled(Form.Check)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  
  input{
    cursor: pointer;

    &:checked {
      background-color: #9353FF;
      border-color: #9353FF;
      box-shadow: 0 0 5px 2px #9353FF;
  }
  }
`

const QuebraLinha = styled.hr`
  margin: 0;

  &:nth-child(2){
    background-color: #000;
    opacity: 1;
  }
`

const ModalFooter = styled.div`
  grid-column: 2;
`

const Botao = styled(Button)`
  border-radius: 0;
  background-color: #9353FF;
  border: none;
  padding: .563rem 1rem;
  margin-left: 1rem;

  @media screen and (min-width: 576px){
    margin: 0;
  }
`

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

