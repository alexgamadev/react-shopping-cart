import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import Spinner from '../components/Spinner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products');

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            {data ? 
            (  
                <StyledSection>
                    {data && 
                        <ResponsiveGrid>
                            {data?.map((item) => (<ShopCard key={item.id} data={item} />))}
                        </ResponsiveGrid>                
                    }   
                </StyledSection>
            ) :
            (
                <Spinner cover/>
            )}
        </>
    )
}
