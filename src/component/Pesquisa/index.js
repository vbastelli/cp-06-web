import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const ResultadosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={evento => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    if (textoDigitado === '') {
                        setLivrosPesquisados([]);
                    } else {
                        const resultadoPesquisa = livros.filter(livro => 
                            livro.nome.toLowerCase().includes(textoDigitado)
                        );
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <ResultadosContainer>
            {livrosPesquisados.map(livro => (
                <Resultado key={livro.id}>
                    <img src={livro.src} alt={livro.nome} />
                    <p>{livro.nome}</p>
                </Resultado>
            )) }
            </ResultadosContainer>
        </PesquisaContainer>
    )
}

export default Pesquisa