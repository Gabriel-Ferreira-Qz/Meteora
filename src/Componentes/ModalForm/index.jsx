import Modal from 'react-bootstrap/Modal';

import { ModalBody, ModalHeader, ModalTitulo } from './style';

import CirculoCheck from '../../Assets/check-circle.svg'

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
