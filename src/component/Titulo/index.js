import styled from "styled-components"

export const Titulo = styled.h2`
    width: 80%;
    padding: 30px;
    border-radius: 40px;
    background-color: #0909DBFF;
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.tamanhoFonte || '18px;'};
    text-align: ${props => props.alinhamento || 'center'};
    margin: 20px 0;
`