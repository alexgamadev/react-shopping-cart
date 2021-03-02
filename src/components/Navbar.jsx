import React, { useState } from 'react'
import styled from 'styled-components';
import { Basket as BasketIcon } from '@styled-icons/ionicons-solid/Basket';
import { Menu as MenuIcon } from '@styled-icons/ionicons-solid/Menu';
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
            <Menu isOpen={menuOpen} closeMenu={closeMenu}/>
        </NavContainer>
    )
}

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background-color: #0f1520;
    overflow: hidden;
    height: 40px;
`;

const StyledMenuIcon = styled(MenuIcon)`
    ${Icon}
`;

const StyledBasketIcon = styled(BasketIcon)`
    ${Icon}
`;
