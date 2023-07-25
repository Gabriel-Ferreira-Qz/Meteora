import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';

import banner1 from './img/Banner-carrossel-1.svg'
import bannerTablet1 from './img/Banner-carrossel-tablet-1.svg'
import bannerMobile1 from './img/Banner-carrossel-mobile-1.svg'

import banner2 from './img/Banner-carrossel-2.svg'
import bannerTablet2 from './img/Banner-carrossel-tablet-2.svg'
import bannerMobile2 from './img/Banner-carrossel-mobile-2.svg'

import banner3 from './img/Banner-carrossel-3.svg'
import bannerTablet3 from './img/Banner-carrossel-tablet-3.svg'
import bannerMobile3 from './img/Banner-carrossel-mobile-3.svg'

import CarrosselBanner from './Carrossel-Banner';

const CustomCarrossel = styled(Carousel)`
  padding-top: 10rem;

  @media screen and (min-width: 768px){
    padding-top: 4rem;
  }
  
  @media screen and (min-width: 1220px){
    padding-top: 4.35rem;
  }
`

export default function Carrossel() {

  const imagem = [
    {
      id: 'imagem-banner1',
      desktop: banner1,
      tablet: bannerTablet1,
      mobile: bannerMobile1,
      alt: 'Primeira imagem do carrossel'
    },
    {
      id: 'imagem-banner2',
      desktop: banner2,
      tablet: bannerTablet2,
      mobile: bannerMobile2,
      alt: 'Segunda imagem do carrossel'
    },
    {
      id: 'imagem-banner3',
      desktop: banner3,
      tablet: bannerTablet3,
      mobile: bannerMobile3,
      alt: 'Terceira imagem do carossel'
    },
  ]

  return (
    <CustomCarrossel>
      {imagem.map((img, k) =>
        <Carousel.Item key={k}>
          <CarrosselBanner
            className="d-block w-100"
            desktop={img.desktop}
            tablet={img.tablet}
            mobile={img.mobile}
            alt={img.alt}
          />
        </Carousel.Item>
      )}
    </CustomCarrossel>
  );
}
