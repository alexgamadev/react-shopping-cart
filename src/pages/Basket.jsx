import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const orderTotal = (items) => {
    return items.reduce((prev, item) => prev += (item.price * item.quantity), 0);
}

const basketMock = {
    items: [
        {
            id: 0,
            name: 'Shoes',
            price: 18.99,
            quantity: 1,
        },
        {
            id: 1,
            name: 'Hat',
            price: 24.99,
            quantity: 2,
        }, 
        {
            id: 2,
            name: 'Coat',
            price: 97.99,
            quantity: 4,
        }, 
        {
            id: 3,
            name: 'Socks',
            price: 0.69,
            quantity: 3,
        },   
    ]
}

export default function Basket() {
    console.log(orderTotal(basketMock.items));
    return (
        <>
            <Navbar pageTitle={"Basket"}/>
            <Wrapper>
                <BasketList>
                    {basketMock.items.map(item => {
                        return <BasketItem>{item.name} - £{item.price} x {item.quantity} = £{item.price * item.quantity}</BasketItem>
                    })}
                </BasketList>
                <OrderTotal>Order Total: £{orderTotal(basketMock.items).toFixed(2)}</OrderTotal>
                <BuyButton>Pay Now</BuyButton>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`;

const BasketList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    margin-top: 40px;
    padding: 0;
    text-align: center;
`;

const BasketItem = styled.li`
    width: 100%;
    padding: 15px 5px;
    font-size: 18px;
    font-weight: 400;
    background-color: ${props => props.theme.backgroundLighter};
    &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.background};
    }
`;

const OrderTotal = styled.h2`
    font-weight: 400;
`;

const BuyButton = styled.a`
    background-color: ${props => props.theme.success};
    padding: 10px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;

    &:hover, :active {
        cursor: pointer;
    }
`;

