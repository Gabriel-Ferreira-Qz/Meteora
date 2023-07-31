import Carousel from 'react-bootstrap/Carousel';
import { CustomCarrossel } from './style';

import banner1 from '../../Assets/img-carrossel/Banner-carrossel-1.svg'
import bannerTablet1 from '../../Assets/img-carrossel/Banner-carrossel-tablet-1.svg'
import bannerMobile1 from '../../Assets/img-carrossel/Banner-carrossel-mobile-1.svg'

import banner2 from '../../Assets/img-carrossel/Banner-carrossel-2.svg'
import bannerTablet2 from '../../Assets/img-carrossel/Banner-carrossel-tablet-2.svg'
import bannerMobile2 from '../../Assets/img-carrossel/Banner-carrossel-mobile-2.svg'

import banner3 from '../../Assets/img-carrossel/Banner-carrossel-3.svg'
import bannerTablet3 from '../../Assets/img-carrossel/Banner-carrossel-tablet-3.svg'
import bannerMobile3 from '../../Assets/img-carrossel/Banner-carrossel-mobile-3.svg'



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
          <picture>
            <source srcSet={img.desktop} media="(min-width: 1220px" />
            <source srcSet={img.tablet} media="(min-width: 768px" />
            <img
              className="d-block w-100"
              src={img.mobile}
              alt={img.alt}
            />
          </picture>
        </Carousel.Item>
      )}
    </CustomCarrossel>
  );
}
