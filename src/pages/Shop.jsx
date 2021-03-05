import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [data, isProcessing, error] = useFetchAPI('https://fakestoreapi.com/products');

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <StyledSection>
                {data && 
                    <ResponsiveGrid>
                        {data?.map((item) => (<ShopCard key={item.id} data={item} />))}
                    </ResponsiveGrid>                
                }
                
            </StyledSection>
        </>
    )
}