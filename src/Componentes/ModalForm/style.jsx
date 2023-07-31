import { Modal } from "react-bootstrap"
import { styled } from "styled-components"

import BtnX from '../../Assets/btn-x.svg'

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
  padding: 1rem 1rem 2rem 1rem;

  p{
    margin: 0;
  }

`