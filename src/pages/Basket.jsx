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
                <OrderTotal>Total: £{orderTotal(basketMock.items).toFixed(2)}</OrderTotal>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    height: auto;
    width: 100%;
`;

const BasketList = styled.ul`
    list-style: none;
    padding: 0;
    margin-left: 20px;
`;

const BasketItem = styled.li`

`;

const OrderTotal = styled.h2`
    margin-left: 20px;
    font-weight: 400;
`;

