import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Card from '../components/Card';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [shopItems, setShopItems] = useState([]);
    const [data, isProcessing, error] = useFetchAPI('https://fakestoreapi.com/products');

    console.log(data);
    console.log(isProcessing);

    useEffect(() => {
        setShopItems(["Hi", "Bye", "Eye", "Spy", "Shoop", "Hi", "Bye", "Eye", "Spy", "Hello", "Blem"]);   
    }, []);

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <StyledSection>
                {data && 
                    <ResponsiveGrid>
                        {shopItems?.map(item => (<Card />))}
                    </ResponsiveGrid>                
                }
                
            </StyledSection>
        </>
    )
}