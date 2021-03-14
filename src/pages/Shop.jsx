import React, { useContext, useState, useEffect, useCallback } from 'react';
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

export default function Shop() {
    const [data] = useFetchAPI('https://fakestoreapi.com/products');
    const [items, setItems] = useState(0);
    const [searchParams, setSearchParams] = useState('');
    const {dispatch} = useContext(BasketContext);
    const notyf = useContext(NotyfContext);
    const history = useHistory();
    const location = useLocation();
    const useQuery = useCallback(() => new URLSearchParams(searchParams), [searchParams]);
    const urlQuery = useQuery();

    function addToBasket(item) {
        dispatch({type: 'add-to-basket', payload: {item: item}})
        window.localStorage.setItem('basket', JSON.stringify(item));
        notyf.success('Added to basket!');
    }

    function search(input) {
        const searchQuery = input.length > 0 ? `?search=${input}` : '';
        history.push(`/shop${searchQuery}`);
    }

    useEffect(() => {
        setSearchParams(location.search);
    }, [location.search]);

    useEffect(() => {
        setItems(data?.flatMap(getItems));
    }, [data, searchParams]);

    function getItems(item) {
        const searchTerm = urlQuery.get('search');
        const categoryTerm = urlQuery.get('category');

        if(searchTerm !== null){
            if(item.title.toUpperCase().includes(searchTerm.toUpperCase()) ||
             item.category.toUpperCase().includes(searchTerm.toUpperCase())) {
                return item;
            }
        } else if(categoryTerm !== null){
            if(item.category === categoryTerm){
                return item;
            }
        } else {
            return item;
        }

        return [];
    }

    return (
        <>
            <Navbar pageTitle={"Shop"}/>
            <SearchBar searchFunc={search}/>
            {data ? 
            (  
                <StyledSection>
                    {items?.length > 0 ? (
                        <ResponsiveGrid>
                            {items?.map(item => {
                                return (
                                    <ShopCard key={item.id} item={item}>
                                        <BasketButton onClick={() => addToBasket(item)}>Add To Basket</BasketButton>
                                    </ShopCard>
                                );
                            })}
                        </ResponsiveGrid>   
                    ) : (
                        <h1>No results found</h1>
                    )}
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