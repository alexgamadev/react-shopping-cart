import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import ResponsiveGrid from '../components/ResponsiveGrid';

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);
    
    useEffect(() => {
        setShopItems(["Hi", "Bye", "Eye", "Spy", "Shoop", "Hi", "Bye", "Eye", "Spy", "Hello", "Blem"]);   
    }, []);

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <StyledSection>
                {shopItems && 
                    <ResponsiveGrid>
                        {shopItems?.map(item => (<ShopCard />))}
                    </ResponsiveGrid>                
                }
                
            </StyledSection>
        </>
    )
}