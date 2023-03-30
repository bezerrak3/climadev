import styled from "styled-components"

const Img = styled.img`

`



const VerticalText = styled.h1`
    color: ${props => props.theme.colors.black};    
    font-size: 80px;
    line-height: 70px;           //propriedade para aproximar as linhas do texto
    margin-left: 150px;
    margin-top: -80px;

`
const PrimaryColor = styled.span`
    color: ${props => props.theme.colors.primary};

`


export default function Logo({showImage, type}){
    return(
        <div>
            {showImage && <Img src="/woman.svg" />}
            {type === 'vertical' && 
              <VerticalText>
                Clima <br/><PrimaryColor>Dev</PrimaryColor>
              </VerticalText>}
        </div>
    )
}