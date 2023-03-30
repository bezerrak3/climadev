import styled from "styled-components";

const StyledFlex = styled.div`
    display: flex;

`

const StyledImage = styled.div`
    background-image: url('${props => props.image}');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;          // faz com que a parte em branco não seja definida pelo tamanho da foto
    width: 100%;
    min-height: 100vh;

`


function BackgroundWithSpaceChildren({children, image}){
    return(
        <StyledFlex>
            {children}
          <StyledImage image={image}/>
        </StyledFlex>
    )
}

BackgroundWithSpaceChildren.defaultProps = {
    image: '/background.png'
}

export default BackgroundWithSpaceChildren