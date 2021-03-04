import React, { useState } from 'react'
import styled from 'styled-components';
import { Basket as BasketIcon } from '@styled-icons/ionicons-outline/Basket';
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
            <StyledMenuIcon size={35} onClick={() => setMenuOpen(true)} />
            <StyledTitle>{pageTitle}</StyledTitle>
            <Link to='/basket'>
                <StyledBasketIcon size={35}/>
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
    background-color: #fff;
    overflow: hidden;
    height: 40px;
`;

const StyledTitle = styled.h1`
	font-weight: 500;
`;

const StyledMenuIcon = styled(MenuIcon)`
    ${Icon}
`;

const StyledBasketIcon = styled(BasketIcon)`
    ${Icon}
`;
