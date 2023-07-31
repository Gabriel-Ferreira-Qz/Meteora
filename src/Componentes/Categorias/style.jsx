import { Card } from "react-bootstrap"
import styled from "styled-components"

export const Section = styled.section`
    text-align: center;
    width: 90%;
    margin: 1.25rem auto 3.125rem ;

    @media screen and (min-width: 768px){
        margin: 2rem auto 2.812rem ;
    }

    @media screen and (min-width: 1220px){
        width: 80%;
    }

`

export const Titulo = styled.h2`
    margin-bottom: 1.25rem;
    color: #212529;
    font-size: 1.75rem;
    font-weight: 500;

    @media screen and (min-width: 768px){
        margin-bottom: 2rem;
    }
`

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    justify-content: center;
    gap: 30px;

    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: repeat(2, minmax(0, 1fr));
    }

    @media screen and (min-width: 1220px){
        display: flex;
        justify-content: space-between;
        gap: 30px;
    }
`

export const Cartao = styled(Card)`
  border: none;
  border-radius: 0;
  width: 100%;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`

export const Imagem = styled(Card.Img)`
  background-color: #DAFF01;
  border-radius: 0;
  max-width: 100%;
	transition: all 0.3s;
`

export const TituloCard = styled(Card.Title)`
  background-color: #000;
  color: #FFF;
  padding: 8px 0 9px;
  margin: 0;
  font-size: 1rem;
  fornt-weight: 500;
  position: relative;
  z-index: 2;
`