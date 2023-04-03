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
    text-transform: uppercase;
`

const HorizontalText = styled.h1`
    font-size: 40px;
`


export default function Logo({showImage, type}){
    return(
        <div>
            {showImage && <Img src="/woman.svg" />}
            {type === 'vertical' && 
              <VerticalText>
                Clima <br/><PrimaryColor>Dev</PrimaryColor>
              </VerticalText>
            }
            {
                type === 'horizontal' &&
                <HorizontalText>Clima<PrimaryColor>dev</PrimaryColor></HorizontalText>
            }
        </div>
    )
}

Logo.defaultProps = {
    type: 'horizontal'
}