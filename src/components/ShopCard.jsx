import React from 'react';
import styled from 'styled-components';
import {Card, CardDetails, CardImage, CardMedia, CardTitle} from '../components/Card';

export default function ShopCard(props) {
    const { item, children } = props;

    return (
        <StyledCard>
            <StyledCardMedia width={'33%'}>
                <CardImage imageSrc={item.image}/>
            </StyledCardMedia>
            <CardDetails>
                <CardTitle text={item.title} maxLines={2} />
                <StyledDescription>{item.category}</StyledDescription>
                <StyledActions>
                    <StyledPrice>{`£${item.price.toFixed(2)}`}</StyledPrice>
                    {children}
                </StyledActions>
            </CardDetails> 
        </StyledCard>
    )
}

const StyledCardMedia = styled(CardMedia)`
    padding: 10px;
`;

const StyledCard = styled(Card)`
    max-width: 600px;
    min-width: 300px;
    height: 150px;
`;

const StyledDescription = styled.div`
    color: ${props => props.theme?.textLighter};
    text-transform: capitalize;
    font-size: 14px;
`;
const StyledActions = styled.div`
    display: flex;
    gap: 30px;
    justify-content: space-between;
    margin-top: auto;
`;

const StyledPrice = styled.div`
color: ${props => props.theme?.textLighter};
    font-size: 24px;
    font-weight: 300;
`;
