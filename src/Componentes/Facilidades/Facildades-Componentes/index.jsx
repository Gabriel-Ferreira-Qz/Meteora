import styled from "styled-components"

const Beneficios = styled.div`
    display: flex;
    gap: 24px;
    img {
        width: 72px;
        height: 72px;
    }

    @media screen and (min-width: 768px){
        justify-content: start;
    }

    @media screen and (min-width: 1220px){
        width: auto;
    }
`

const Descricao = styled.div`
    color: #DAFF01;
    h3{
        font-size: 1rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    p{
        color: #FFF;   
        font-size: .812rem;
    }
`

export default function FacilidadesComponentes({ src, alt, texto, titulo }) {
    return (
        <Beneficios>
            <img src={src} alt={alt} />
            <Descricao>
                <h3>{titulo}</h3>
                <p>{texto}</p>
            </Descricao>
        </Beneficios>
    )
}