import React from 'react';
import styled from 'styled-components';
import {useSpring, animated, config} from 'react-spring';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import { Close as CloseIcon } from '@styled-icons/ionicons-solid/Close';

export default function Menu(props) {
    const { menuOpen, closeMenu } = props;

    //React-spring animation for menu open
    const openAnim = useSpring({
        transform: menuOpen ? `translateX(0)` : 'translateX(-100vw)',
        config: {...config.stiff, clamp: true}
    })

    return (
        <StyledMenu $menuOpen={menuOpen} style={openAnim}>
            <MenuList>
                <StyledCloseIcon size={40} onClick={() => closeMenu()}/>
                <MenuLink to='/' onClick={() => closeMenu()}>Home</MenuLink>
                <MenuLink to='/shop' onClick={() => closeMenu()}>Shop</MenuLink>
                <MenuLink to='/about' onClick={() => closeMenu()}>About</MenuLink>
            </MenuList>
        </StyledMenu>
    )
}


const StyledMenu = styled(animated.div)`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 80vw;
    background-color: ${props => props.theme.primary};
    transform: ${props => props.$menuOpen ? 'translateX(0)' : 'translateX(-100vw)'};
`;

const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px;
    padding-top: 10px;
`;

const MenuLink = styled(Link)`
    color: ${props => props.theme.background};
    text-decoration: none;
    padding: 20px;
    font-size: 25px;
    text-align: center;
    user-select: none;

    &:hover, &:active {
        cursor: pointer;
        background-color: ${props => props.theme.primaryLighter};
    }
`;

const StyledCloseIcon = styled(CloseIcon)`
    ${Icon}
    margin-left: 10px;
    color: ${props => props.theme.background};
    &:hover, &:active {
        background-color: ${props => props.theme.primaryLighter};
    }
`;
