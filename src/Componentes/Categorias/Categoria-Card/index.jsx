import Card from 'react-bootstrap/Card';
import styled from 'styled-components';


const Cartao = styled(Card)`
  border: none;
  border-radius: 0;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`

const Imagem = styled(Card.Img)`
  background-color: #DAFF01;
  border-radius: 0;
  max-width: 100%;
	transition: all 0.3s;
`

const Titulo = styled(Card.Title)`
  background-color: #000;
  color: #FFF;
  padding: 8px 0 9px;
  margin: 0;
  font-size: 1rem;
  fornt-weight: 500;
  position: relative;
  z-index: 2;
`

export default function CategoriaCard({ src, alt, titulo, id}) {
  return (
    <Cartao id={id}>
      <Imagem variant="top" src={src} alt={alt} />
      <Titulo>{titulo}</Titulo>
    </Cartao>
  );
}
