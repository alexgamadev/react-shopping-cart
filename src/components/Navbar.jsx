import React, { useState } from 'react'
import styled from 'styled-components';
import { ShoppingBasket as BasketIcon } from '@styled-icons/material-sharp/ShoppingBasket';
import { MenuAltLeft as MenuIcon } from '@styled-icons/boxicons-regular/MenuAltLeft';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Menu from './Menu';

export default function Navbar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const { pageTitle } = props;

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <NavContainer>
            <StyledMenuIcon size={40} role={"img"} onClick={() => setMenuOpen(true)} />
            <StyledTitle>{pageTitle}</StyledTitle>
            <Link to='/basket'>
                <StyledBasketIcon size={40} role={"img"}/>
            </Link>
            <Menu menuOpen={menuOpen} closeMenu={closeMenu}/>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background-color: ${props => props.theme.background};
    overflow: hidden;
    height: 40px;
`;

const StyledTitle = styled.h1`
	font-weight: 600;
    font-size: 30px;
    color: ${props => props.theme.text};
`;

const StyledMenuIcon = styled(MenuIcon)`
    ${Icon}
    color: ${props => props.theme.text};

    &:active, &:hover {
        background-color: ${props => props.theme.backgroundLighter};
    };
`;

const StyledBasketIcon = styled(BasketIcon)`
    ${Icon}
    color: ${props => props.theme.text};
    
    &:active, &:hover {
        background-color: ${props => props.theme.backgroundLighter};
    }
`;
