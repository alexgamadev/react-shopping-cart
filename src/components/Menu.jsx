import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close';

const StyledMenu = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 80vw;
    background-color: #0f1520;

    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(-100vw)'};
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0px;
`;

const MenuLink = styled.li`
    color: white;
    padding: 20px;
    font-size: 30px;
    text-align: center;

    &:hover, &:active {
        background-color: #182640;
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    ${Icon}
    &:hover, &:active {
        background-color: #182640;
    }
`;


export default function Menu(props) {
    const { isOpen, closeMenu } = props;
    console.log(props);
    return (
        <StyledMenu isOpen={isOpen}>
            <MenuList>
                <StyledCloseIcon size={40} onClick={() => closeMenu()}/>
                <MenuLink>Home</MenuLink>
                <MenuLink>Shop</MenuLink>
                <MenuLink>About</MenuLink>
            </MenuList>
        </StyledMenu>
    )
}
