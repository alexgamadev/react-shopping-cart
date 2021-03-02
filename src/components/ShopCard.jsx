import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div`
    background: #212121;
    color: white;
    max-width: 600px;
    min-width: 300px;
    height: 150px;
`;

export default function ShopCard() {
    return (
        <StyledCard>
            I am a card 
        </StyledCard>
    )
}
