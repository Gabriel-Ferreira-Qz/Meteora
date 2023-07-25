import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const Cartao = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 6px 6px 0 0;
`

const CardTitulo = styled(Card.Title)`
  font-size: 0.813rem;
  margin: 0.813rem 1rem;
  color: #212529;
`

const Titulo = styled(Card.Title)`
  font-size: 1rem;
  font-weight: 700;
`

const Descricao = styled(Card.Text)`
  font-size: 0.8125rem;
  font-family: Inter;
  line-height: 23px;
  margin: 0;
`

const Preco = styled(Card.Text)`
  font-size: 1rem;
  font-weight: 700;
  margin: 0.625rem 0 1rem;
`

const Botao = styled(Button)`
  padding: 0.563rem 1rem;
  background-color: #9353FF;
  border: none;
  border-radius: 0;
`


export default function ProdutosCard({ imagem, alt, titulo, descricao, preco, id, setProduto, handleShow, produtos }) {

  const handleClick = (e) => {
    const alvo = e.target.id
    const valor = produtos.filter((produto) => produto.id === alvo)
    setProduto(valor[0])
    handleShow()
  }

  return (
    <Cartao>
      <Card.Img variant="top" src={imagem} alt={alt} />
      <CardTitulo>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
        <Preco>{preco}</Preco>

        <Botao 
          variant="primary" 
          id={id} 
          onClick={(e) => handleClick(e)}
        >
          Ver mais
        </Botao>
      </CardTitulo>
    </Cartao>
  );
}
