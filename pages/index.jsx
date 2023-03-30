import styled from "styled-components"
import BackgroundWithSpaceChildren from "../src/components/layout/backgroundImageWithChildren/backgroundWithSpaceChildren"


const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.white};
    min-width: 500px;

    @media (max-width: 500px){
        min-width: 100%;
    }
`


export default function HomePage(){
    return(
        <BackgroundWithSpaceChildren>
            <StyledDiv>
                Pagina inicial
            </StyledDiv>
        </BackgroundWithSpaceChildren>
    )
}