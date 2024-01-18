import styled from 'styled-components';
import { Card, Col }  from 'reactstrap';

const Jumbotron = styled(Card)`
  background-color: transparent;
  height: auto;
  margin:auto;
  width: 75%;
  border:none;
  padding: 15px;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  text-decoration: underline;
  font-family: 'Poppins', sans-serif;

`;


const Text = styled.p`
  color: white;
  text-align: center; 
  font-family: 'Poppins', sans-serif;
  display: inline;
  letter-spacing:0.7px;
  white-space: break-spaces;
  
  @media all and (max-width:800px){
    font-size:0.8rem;
  }
`;

const TextNormal = styled.p`
  color: white;
  text-align:; 
  font-family: 'Poppins', sans-serif;
  display: inline;
  letter-spacing:0.7px;
  font-size:1rem;
 

  @media all and (max-width:800px){
    font-size:0.8rem;
  }
`;

const TextNormalIndent = styled.p`
  color: white;
  text-align:; 
  font-family: 'Poppins', sans-serif;
  display: inline;
  letter-spacing:0.7px;
  text-indent: 50px;

  @media all and (max-width:800px){
    font-size:0.8rem;
  }
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
  padding: 10px;
  margin: 10px;
  justify-content: center;
  &.row {
    flex-direction: row;
  }
  
`;


const Styled = {
    Jumbotron,
    Image,
    Text,
    TextNormal,
    Title,
    PageCol,
    Container,
    TextNormalIndent
}

export default Styled;
