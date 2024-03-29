import React, {useContext, useEffect} from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { BasketContext } from '../reducers/BasketStore';
import ShopCard from '../components/ShopCard';
import QuantityDisplay from '../components/QuantityDisplay';

const orderTotal = (items) => {
    return items?.reduce((prev, item) => prev += (item.price * item.quantity), 0);
}

const Pay = (total, dispatch) => {
    alert(`Paid £${total} for items`);
    dispatch({type: 'clear-basket'});
}

export default function Basket() {
    const {basket, dispatch} = useContext(BasketContext);
    const totalPrice = orderTotal(basket)?.toFixed(2);

    useEffect(() => {
        dispatch({type: 'fetch-basket-storage'});
    // eslint-disable-next-line
    }, []);
    
    return (
        <>
            <Navbar pageTitle={"Basket"}/>
            <Wrapper>
            {basket?.length > 0 ? (
                <>
                    <BasketList>
                        {basket.map(item => {
                            return (
                            <ShopCard key={item.id} item={item}>
                                <QuantityDisplay quantity={item.quantity} id={item.id}/>
                            </ShopCard>
                        )})}
                    </BasketList>
                    <OrderTotal>Order Total: £{totalPrice}</OrderTotal>
                    <ClearButton onClick={() => dispatch({type: 'clear-basket'})}>Clear Basket</ClearButton>
                    <BuyButton onClick={() => Pay(totalPrice, dispatch)}>Pay Now</BuyButton>
                </>
            ) : (
                <h2>Basket empty</h2>
            )}
            </Wrapper>
            
        </>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const BasketList = styled.ul`
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
    min-width: 60%;
    list-style: none;
    margin-top: 40px;
    padding: 0;
    text-align: center;
`;

const OrderTotal = styled.h2`
    font-weight: 400;
`;

const ClearButton = styled.a`
    background-color: ${props => props.theme.error};
    padding: 10px;
    font-size: 20px;
    font-weight: 400;
    margin-top: 40px;

    &:hover, :active {
        cursor: pointer;
    }
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

