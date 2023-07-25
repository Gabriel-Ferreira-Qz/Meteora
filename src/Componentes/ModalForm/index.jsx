import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

import CirculoCheck from '../../Assets/check-circle.svg'
import BtnX from '../../Assets/btn-x.svg'


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
  padding: 1rem 1rem 2rem 1rem;

  p{
    margin: 0;
  }

`

export default function ModalForm({ show, handleClose }) {

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <ModalHeader closeButton>
          <img src={CirculoCheck} alt="Imagem de um circulo marcado com um sinal positivo" />
          <ModalTitulo>E-mail cadastrado com sucesso!</ModalTitulo>
        </ModalHeader>
        <ModalBody>
          <p>Em breve você receberá novidades exclusivas da Meteora.</p>
        </ModalBody>
      </Modal>
    </>
  );
}
