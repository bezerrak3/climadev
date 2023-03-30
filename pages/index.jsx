import styled from "styled-components"
import BackgroundWithSpaceChildren from "../src/components/layout/backgroundImageWithChildren/backgroundWithSpaceChildren"


const StyledDiv = styled.div`
    background-color: red;
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