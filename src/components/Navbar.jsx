import React, { useState } from 'react'
import styled from 'styled-components';
import { ShoppingBasket as BasketIcon } from '@styled-icons/material-outlined/ShoppingBasket';
import { MenuAltLeft as MenuIcon } from '@styled-icons/boxicons-regular/MenuAltLeft';
import { Link } from 'react-router-dom';
import Icon from './Icon';
import Menu from './Menu';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    console.log(menuOpen);
    return (
        <NavContainer>
            <StyledMenuIcon size={40} onClick={() => setMenuOpen(true)} />
            <Link to='/basket'>
                <StyledBasketIcon size={40}/>
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

const StyledMenuIcon = styled(MenuIcon)`
    ${Icon}
`;

const StyledBasketIcon = styled(BasketIcon)`
    ${Icon}
`;
