import React from 'react'
import styled, { css } from 'styled-components';
import BasketIcon from './BasketIcon';
import MenuIcon from './MenuIcon';
import Menu from './Menu';

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    background-color: #212121;
    overflow: hidden;
    height: 40px;
`;


export default function Navbar() {
    return (
        <NavContainer>
            <MenuIcon />
            <BasketIcon />
            <Menu />
        </NavContainer>
    )
}
