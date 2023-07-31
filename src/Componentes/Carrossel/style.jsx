import { Carousel } from "react-bootstrap";
import { styled } from "styled-components";

export const CustomCarrossel = styled(Carousel)`
  padding-top: 10rem;

  @media screen and (min-width: 768px){
    padding-top: 4rem;
  }
  
  @media screen and (min-width: 1220px){
    padding-top: 4.35rem;
  }
`