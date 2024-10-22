import styled from "styled-components";
import AppContainer from '../component/AppContainer';
import Header from '../component/Header';

const Titulo = styled.div`
    display: flex;
    justify-content: center;
    color: white;
    background-color: #072549FF;
    padding: 20px;
`;

const Card = styled.div`
    width: 150px;
    font-size: 30px;
    background-color: #E0D6FFFF;
    border-radius: 8px;
    margin: 30px;
    padding: 15px;
    text-align: center;
    transition: background-color 0.4s;
    font-weight: bold;
    box-shadow: 10px 10px;

    
    &:hover {
        background-color: #E98F29FF;
        transform: translateY(-2px);
        cursor: pointer;
    }
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
    gap: 50px
`;

const Categorias = () => {
  return (
    <AppContainer>
      <Header />
      <Titulo>
        <h1>Qual categoria de livros você procura?</h1>
      </Titulo>
      <CardContainer>
        <Card><p>JavaScript</p></Card>
        <Card><p>CSS</p></Card>
        <Card><p>HTML</p></Card>
        <Card><p>SASS</p></Card>
      </CardContainer>
    </AppContainer>
  );
};

export default Categorias;
