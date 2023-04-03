import styled from "styled-components";

import Container from "../../../src/components/layout/container/Container";
import Navbar from "../../../src/components/navbar/Navbar"

const Body = styled.div`
    background-color: ${props => props.theme.colors.grey};
    min-height: 100vh;
`

export default function InfoPage(){
    return(
        <>
           <Navbar />
           <Body>
            <Container>
             Conteudo
            </Container>
           </Body>
        </>
    )
}