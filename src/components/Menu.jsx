import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    background-color: green;
`;

const MenuList = styled.ul`
    list-style: none;
    padding: 0px;
`;

const MenuLink = styled.li`
    padding: 5vh;
    font-size: 30px;
`;


export default function Menu() {
    return (
        <StyledMenu>
            <MenuList>
                <MenuLink>Home</MenuLink>
                <MenuLink>Shop</MenuLink>
                <MenuLink>About</MenuLink>
            </MenuList>
        </StyledMenu>
    )
}
