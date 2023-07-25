import styled from "styled-components"

const Rodape = styled.footer`
    background-color: #000;
    color: #FFF;
    text-align: center;
    padding: 1rem 0;
    font-size: .81rem
`

export default function Footer(){
    return(
        <Rodape>
            2023 &copy; Desenvolvido por Gabriel Ferreira | Projeto fictício sem fins comerciais.
        </Rodape>
    )
}