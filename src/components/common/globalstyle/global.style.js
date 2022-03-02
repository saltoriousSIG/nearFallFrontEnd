import styled from 'styled-components';
import { Card, Col }  from 'reactstrap';

const Jumbotron = styled(Card)`
  background-color: rgba(10,10,10, 0.6);
  height: auto;
  margin: 50px auto;
  width: 75%;
  box-shadow: 1px 5px 5px black;
  padding: 15px;
  margin-bottom: 50px;
`;
const Title = styled.h1`
  text-align: center;
  color: white;
  color: black;
  text-decoration: underline;
`;



const Text = styled.p`
  color: white;
  text-align: center; 
  font-family: 'Lato', sans-serif;
`;
const PageCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  border-radius: 10px;
  margin: 10px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const Styled = {
    Jumbotron,
    Image,
    Text,
    Title,
    PageCol,
    Container
}

export default Styled;