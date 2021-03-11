import React from 'react';
import styled from 'styled-components';
import Card, {CardDetails, CardImage, CardMedia, CardTitle} from '../components/Card';

export default function ShopCard(props) {
    const { item, addToBasket } = props;

    return (
        <Card>
            <CardMedia>
                <CardImage imageSrc={item.image}/>
            </CardMedia>
            <CardDetails>
                <CardTitle text={item.title} maxLines={2} />
                <StyledDescription>{item.category}</StyledDescription>
                <StyledActions>
                    <StyledPrice>{`£${item.price.toFixed(2)}`}</StyledPrice>
                    <BasketButton onClick={() => addToBasket(item)}>Add To Basket</BasketButton>
                </StyledActions>
            </CardDetails> 
        </Card>
    )
}

const StyledDescription = styled.div`
    color: ${props => props.theme?.textLighter};
    text-transform: capitalize;
    font-size: 14px;
`;
const StyledActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: auto;
`;

const StyledPrice = styled.div`
color: ${props => props.theme?.textLighter};
    font-size: 24px;
    font-weight: 300;
`;

const BasketButton = styled.button`
    background-color: ${props => props.theme?.success};
    border: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    letter-spacing: 0px;

    &:hover {
        cursor: pointer;
    }
`;
