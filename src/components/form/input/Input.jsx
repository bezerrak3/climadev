import styled from "styled-components"


const StyledInput = styled.input`
    background-color: #F6F6F6;
    border: 0;
    outline: none;  // border: 0 & outline: none | pra tirar a borda e deixar o input mais professional
    padding: 20px;  // aumentar o TAMANHO do objeto
    color: #9C9C9C;
    font-weight: bold; // negrito
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`

function Input(props){
    return(
        <StyledInput {...props}/>
    )
}

export default Input