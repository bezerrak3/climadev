import styled from "styled-components"
import BackgroundWithSpaceChildren from "../src/components/layout/backgroundImageWithChildren/backgroundWithSpaceChildren"
import Logo from "../src/components/logo/Logo"

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.white};
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 40px;
    box-sizing: border-box; // faz com que o padding use todo o espaço disponível, sem interferir o espaço de outro componente

    @media (max-width: 500px){
        min-width: 100%;                       // utilizado para poder sumir a barra embaixo
    }
`


export default function HomePage(){
    return(
        <BackgroundWithSpaceChildren>
            <StyledDiv>
              <Logo showImage={true} type='vertical'/>
              <input/>
            </StyledDiv>
        </BackgroundWithSpaceChildren>
    )
}