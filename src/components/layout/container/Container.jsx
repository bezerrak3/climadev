import styled from "styled-components";

const StyledContainer = styled.div`
    padding: 0 15px;
    margin: 0 auto;  // o auto faz os componentes centralizarem, sem bugar (que é algo que pode acontecer com o flex)
    width: 100%;

    @media (min-width: 768px){
        width: 90%;
    }

    @media (min-width: 1500px){
        width: 1440px;
    }
`

const Container = ({children}) => <StyledContainer>{children}</StyledContainer>


export default Container