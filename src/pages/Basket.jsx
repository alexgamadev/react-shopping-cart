import React, {useContext} from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { BasketContext } from '../reducers/BasketStore';
import ShopCard from '../components/ShopCard';

const orderTotal = (items) => {
    return items.reduce((prev, item) => prev += (item.price * item.quantity), 0);
}

const Pay = total => {
    alert(`Paid £${total} for items`);
}

export default function Basket() {
    const [basket] = useContext(BasketContext);
    const totalPrice = orderTotal(basket).toFixed(2);
    console.log(basket);
    
    return (
        <>
            <Navbar pageTitle={"Basket"}/>
            <Wrapper>
            {basket.length > 0 ? (
                <>
                    <BasketList>
                        {basket.map(item => <ShopCard key={item.id} item={item}></ShopCard>)}
                    </BasketList>
                    <OrderTotal>Order Total: £{totalPrice}</OrderTotal>
                    <BuyButton onClick={() => Pay(totalPrice)}>Pay Now</BuyButton>
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
    justify-content: flex-start;
    align-items: center;
    flex-grow: 1;
`;

const BasketList = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 90%;
    min-width: 60%;
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

