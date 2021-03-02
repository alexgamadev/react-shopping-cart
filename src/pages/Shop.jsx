import React from 'react';
import ShopCard from '../components/ShopCard';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    grid-gap: 20px;
`;

const StyledSection = styled.section`
    margin: 20px;
`

export default function Shop() {
    return (
        <>
            <h1>
                Shop
            </h1>
            <StyledSection>
                <ItemWrapper>
                    <ItemWrapper>
                        <ShopCard />
                        <ShopCard />
                    </ItemWrapper>
                    <ItemWrapper>
                        <ShopCard />
                        <ShopCard />
                    </ItemWrapper>
                </ItemWrapper>
            </StyledSection>
        </>
    )
}
