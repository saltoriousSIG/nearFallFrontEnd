import GlobalStyle from '../common/globalstyle/global.style';
import styled from 'styled-components';


const Container = styled(GlobalStyle.Container)`
  margin-top: 150px;
`;


const ContainerVert = styled(GlobalStyle.Container)`
  flex-direction: column;
`;

const Title = styled(GlobalStyle.Title)``;
const Text = styled(GlobalStyle.Text)``;

const FormContainer = styled(GlobalStyle.Container)`
  width: fit-content;
  border: 1px solid black;
  border-radius: 50px;
  padding: 40px;
  background: rgba(255,255,255, 0.45);
`;


const Styled = {
    Container,
    Title,
    Text,
    FormContainer,
    ContainerVert
}

export default Styled;