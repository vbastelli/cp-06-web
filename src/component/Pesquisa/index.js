import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
`;

const Titulo = styled.h2`
    font-size: 36px;
    margin-bottom: 10px;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

const ResultadosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
`;

const Resultado = styled.div`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 15px;
    width: 220px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;
    
    &:hover {
        transform: scale(1.05);
        border: 1px solid white;
    }
`;

const LivroImagem = styled.img`
    width: 100%;
    border-radius: 4px;
`;

const TituloLivro = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    text-align: center;
`;

const Resumo = styled.p`
    font-size: 14px;
    color: #ddd;
    margin-top: 5px;
    text-align: center;
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

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
                            livro.titulo.toLowerCase().includes(textoDigitado)
                        );
                        setLivrosPesquisados(resultadoPesquisa);
                    }
                }}
            />
            <ResultadosContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado key={livro.id}>
                        <LivroImagem src={livro.imagem} alt={livro.titulo} />
                        <TituloLivro>{livro.titulo}</TituloLivro>
                        <Resumo>{livro.resumo}</Resumo>
                    </Resultado>
                ))}
            </ResultadosContainer>
        </PesquisaContainer>
    );
}

export default Pesquisa;
