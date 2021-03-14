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
import { useLocation, useHistory } from 'react-router';

const StyledSection = styled.section`
    margin: 20px;
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Shop() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products');
    const {dispatch} = useContext(BasketContext);
    const notyf = useContext(NotyfContext);
    const history = useHistory();
    const urlQuery = useQuery();

    function addToBasket(item) {
        dispatch({type: 'add-to-basket', payload: {item: item}})
        window.localStorage.setItem('basket', JSON.stringify(item));
        notyf.success('Added to basket!');
    }

    function search(input) {
        console.log(input);
        const searchQuery = input.length > 0 ? `?search=${input}` : '';
        history.push(`/shop${searchQuery}`);
    }


    function displayItems(item) {
        const searchTerm = urlQuery.get('search');
        if(searchTerm !== null) {
            if(item.title.toUpperCase().includes(searchTerm.toUpperCase()) ||
             item.category.toUpperCase().includes(searchTerm.toUpperCase())){
                return (<ShopCard key={item.id} item={item}>
                        <BasketButton onClick={() => addToBasket(item)}>Add To Basket</BasketButton>
                        </ShopCard>
                )
            }
        } else {
            return (<ShopCard key={item.id} item={item}>
                <BasketButton onClick={() => addToBasket(item)}>Add To Basket</BasketButton>
                </ShopCard>)
        }
    }

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <SearchBar searchFunc={search}/>
            {data ? 
            (  
                <StyledSection>
                    {data && 
                        <ResponsiveGrid>
                            {data?.map(displayItems)}
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