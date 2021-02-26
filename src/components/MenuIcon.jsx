import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';
import { Menu } from '@styled-icons/ionicons-solid/Menu';

const StyledIcon = styled(Menu)`
    ${Icon}
`;

export default function MenuIcon() {
    return (
        <StyledIcon size={40} />
    )
}