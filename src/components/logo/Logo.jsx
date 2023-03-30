import styled from "styled-components"

const VerticalText = styled.h1`
    color: ${props => props.theme.colors.black};    
    font-size: 80px;
    line-height: 70px;           //propriedade para aproximar as linhas do texto
    margin-left: 150px;
    margin-top: -70px;

`
const HorizontalText = styled.h1`
    font-size: 80px;
    color: ${props => props.theme.colors.black};

`
const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};

`


export default function Logo({showImage, type}){
    return(
        <div>
            {showImage && <img src="/woman.svg" />}
            {type === 'vertical' && 
              <VerticalText>
                Clima <br/><PrimaryColor>Dev</PrimaryColor>
              </VerticalText>}
        </div>
    )
}