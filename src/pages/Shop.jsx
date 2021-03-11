import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import Spinner from '../components/Spinner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';
import { BasketContext } from '../reducers/BasketStore'

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products');
    const [basket, dispatch] = useContext(BasketContext);

    function addToBasket(item) {
        item.quantity = 1;
        console.log(basket)
        dispatch({type: 'addToBasket', payload: {item: item}})
        window.localStorage.setItem('basket', JSON.stringify(item));
    }

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            {data ? 
            (  
                <StyledSection>
                    {data && 
                        <ResponsiveGrid>
                            {data?.map((item) => (<ShopCard key={item.id} item={item} addToBasket={addToBasket}/>))}
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
