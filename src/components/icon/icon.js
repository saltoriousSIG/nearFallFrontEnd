import React from "react";
import Styled from './icon.style';
import {
    faSocial
} from '@fortawesome/free-solid-svg-icons';

export const IconType = {

}
const Icon = (props) => {
    const { type, color } = props;
    return (
        <Styled.Icon icon={type} color={color}>
        </Styled.Icon>
    )
}

export default Icon;