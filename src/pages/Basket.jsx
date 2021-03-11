import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { BasketContext } from '../reducers/BasketStore'

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

const Pay = total => {
    alert(`Paid £${total} for items`);
}

export default function Basket() {
    const [basket] = useContext(BasketContext);
    const totalPrice = orderTotal([basket]).toFixed(2);
    
    return (
        <>
            <Navbar pageTitle={"Basket"}/>
            <Wrapper>
                <BasketList>
                    <BasketItem>{basket.title} - £{basket.price} x {basket.quantity} = £{basket.price * basket.quantity}</BasketItem>
                </BasketList>
                <OrderTotal>Order Total: £{totalPrice}</OrderTotal>
                <BuyButton onClick={() => Pay(totalPrice)}>Pay Now</BuyButton>
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
    width: 60%;
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

