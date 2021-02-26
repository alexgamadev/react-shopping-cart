import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import { Basket } from '@styled-icons/ionicons-solid/Basket';

const StyledIcon = styled(Basket)`
    ${Icon}
`;

export default function BasketIcon() {
    return (
        <StyledIcon size={40} />
    )
}
