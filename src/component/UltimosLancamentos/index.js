import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imgs/Angula.png' 
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #E98F29FF;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NovosLivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 150px;
        padding: 10px;
    }
`

const TituloContainer = styled.div`
    display: flex;
    justify-content: center;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <TituloContainer>
                <Titulo
                    cor="#EB9B00"
                    tamanhoFonte="36px"
                    >
                    ÚLTIMOS LANÇAMENTOS
                </Titulo>    
            </TituloContainer>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img src={livro.src} alt=''/>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por:"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos