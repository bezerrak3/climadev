import styled from "styled-components"
import BackgroundWithSpaceChildren from "../src/components/layout/backgroundImageWithChildren/backgroundWithSpaceChildren"
import Logo from "../src/components/logo/Logo"
import InputWithSugestions from "../src/components/form/inputWithSugestions/InputWithSugestions"

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

const StyledInput = styled(InputWithSugestions)`
    width: 100%;
    box-sizing: border-box;

`
const InputContainer = styled.div`
    width: 150%;
    z-index: 100;

    @media (max-width: 710px){
        width: 100%;
    }
`

export default function HomePage(){
    return(
        <BackgroundWithSpaceChildren>
            <StyledDiv>
              <Logo showImage={true} type='vertical'/>
              <InputContainer>
                <StyledInput placeholder="Digite o nome da cidade" />
              </InputContainer>
            </StyledDiv>
        </BackgroundWithSpaceChildren>
    )
}