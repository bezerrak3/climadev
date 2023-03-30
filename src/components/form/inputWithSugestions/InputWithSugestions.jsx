import styled from "styled-components"
import Input from "../input/Input"

const SugestionsContainer = styled.div`
    margin-top: 10px;
    background-color: ${props => props.theme.colors.white};
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Suggestions = styled.div`
    padding: 10px;
    cursor: pointer;

    &:hover{
        background-color: #F6F6F6;
    }

`

export default function InputWithSugestions({suggestions, ...props}){
    return (
        <>
            <Input {...props}/>
            <SugestionsContainer>
                {
                    suggestions.map((suggestion, pos)=>
                        <Suggestions 
                        key={`suggestion-${pos}`} 
                        onClick={suggestion.onClick}
                        >
                            {suggestion.text}
                        </Suggestions>
                    )
                }
            </SugestionsContainer>
        </>
    )
}

InputWithSugestions.defaultProps = {
    suggestions: [
        {text: 'Sugestão', onClick: () => {} },
        { text: 'Sugestão 2', onClick: () => {} },
    ]   
}