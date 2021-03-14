import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import ShopCard from '../components/ShopCard';
import SearchBar from '../components/SearchBar';
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
    const {dispatch} = useContext(BasketContext);
    const notyf = useContext(NotyfContext);

    function addToBasket(item) {
        dispatch({type: 'add-to-basket', payload: {item: item}})
        window.localStorage.setItem('basket', JSON.stringify(item));
        notyf.success('Added to basket!');
    }

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <SearchBar />
            {data ? 
            (  
                <StyledSection>
                    {data && 
                        <ResponsiveGrid>
                            {data?.map((item) => {
                                return (<ShopCard key={item.id} item={item}>
                                    <BasketButton onClick={() => addToBasket(item)}>Add To Basket</BasketButton>
                                    </ShopCard>
                            )})}
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

const BasketButton = styled.button`
    background-color: ${props => props.theme?.success};
    color: ${props => props.theme?.textLighter};
    border: none;
    margin:
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    letter-spacing: 0px;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
    &:active {
        cursor: pointer;
        background-color: ${props => props.theme?.success}88;
    }
`;