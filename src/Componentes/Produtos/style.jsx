import { Button, Card } from "react-bootstrap"
import styled from "styled-components"

export const Section = styled.section`
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

export const Cartoes = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr;
        display: ${props => (props.$isError ? 'flex' : 'grid')};
        grid-template-rows: repeat(auto-fill, minmax(0px, 1fr));
        justify-content: center;
    }

    @media screen and (min-width: 1220px){
        grid-template-columns: 1fr 1fr 1fr;
    }
`

export const ErroDeBusca = styled.div`
    text-align: center;

    img {
        width: 55%;
    }
    p {
        margin: 0.75rem 0 0;
        line-height: 32px;
        font-size: 14px;
        span{
            font-weight: bold;
        }
    }

    @media screen and (min-width: 768px){
        img {
            width: 30%;
        }
        p {
            font-size: 1rem;
        }
    }

    @media screen and (min-width: 1220px){
        img {
            width: 20%;
        }
        p {
            font-size: 1rem;
        }
    }
`

export const Cartao = styled(Card)`
  border: 1px solid rgba(0, 0, 0, 0.13);
  border-radius: 6px 6px 0 0;
`

export const CardTitulo = styled(Card.Title)`
  font-size: 0.813rem;
  margin: 0.813rem 1rem;
  color: #212529;
`

export const Titulo = styled(Card.Title)`
  font-size: 1rem;
  font-weight: 700;
`

export const Descricao = styled(Card.Text)`
  font-size: 0.8125rem;
  font-family: Inter;
  line-height: 23px;
  margin: 0;
`

export const Preco = styled(Card.Text)`
  font-size: 1rem;
  font-weight: 700;
  margin: 0.625rem 0 1rem;
`

export const Botao = styled(Button)`
  padding: 0.563rem 1rem;
  background-color: #9353FF;
  border: none;
  border-radius: 0;
`
