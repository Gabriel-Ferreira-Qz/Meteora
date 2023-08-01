import styled, { keyframes } from "styled-components"

const spinAnimation = keyframes`
    to{
        transform: rotate(1turn);
    }
`

const Spinner = styled.div`
    margin: 10rem 0;
    display: flex;
    justify-content: center;

    div {
        width:50px;
        height:50px;
        border-radius:50%;
        background:conic-gradient(#0000 10%,#000000);
        -webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);
        animation: ${spinAnimation} 1s infinite linear;
        text-align: center;
    }
`

export default function Loading() {
    return (
        <Spinner>
            <div></div>
        </Spinner>
    )
}