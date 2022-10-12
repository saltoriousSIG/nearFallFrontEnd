import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
  color: ${(props) => {
        if (props.color) return props.color;
        return 'black';
    }
    };
`;

const Styled = {
    Icon,
};

export default Styled;
