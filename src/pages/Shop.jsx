import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import Spinner from '../components/Spinner';
import ResponsiveGrid from '../components/ResponsiveGrid';
import useFetchAPI from '../hooks/useFetchAPI';
import { BasketContext } from '../reducers/BasketStore'
import NotyfContext from '../context/NotyfContext';

const StyledSection = styled.section`
    margin: 20px;
`;

export default function Shop() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products');
    const [basket, dispatch] = useContext(BasketContext);
    const notyf = useContext(NotyfContext);

    function addToBasket(item) {
        dispatch({type: 'addToBasket', payload: {item: item}})
        window.localStorage.setItem('basket', JSON.stringify(item));
        notyf.success('Added to basket!');
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
