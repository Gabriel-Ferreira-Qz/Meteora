import { Button, Form, Modal } from "react-bootstrap"
import styled from "styled-components"

import BtnX from '../../Assets/btn-x.svg'

export const CustomModal = styled(Modal)`
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

export const ModalHeader = styled(Modal.Header)`
  background-color: #000;
  gap: 20px;
  border-radius: 4px 4px 0 0;

  button {
    background-image: url(${BtnX})
  }

`

export const ModalTitulo = styled(Modal.Title)`
  color: #FFF;
  font-size: 1.25rem;
  font-weight: 500;

`

export const ModalBody = styled(Modal.Body)`
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

export const ModalDescricao = styled.section`
  padding: 1.5rem 1rem 1rem;

  @media screen and (min-width: 576px){
    padding: 0;
  }

`

export const Div = styled.div`
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

export const InputCheck = styled(Form.Check)`
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

export const QuebraLinha = styled.hr`
  margin: 0;

  &:nth-child(2){
    background-color: #000;
    opacity: 1;
  }
`

export const ModalFooter = styled.div`
  grid-column: 2;
`

export const Botao = styled(Button)`
  border-radius: 0;
  background-color: #9353FF;
  border: none;
  padding: .563rem 1rem;
  margin-left: 1rem;

  @media screen and (min-width: 576px){
    margin: 0;
  }
`