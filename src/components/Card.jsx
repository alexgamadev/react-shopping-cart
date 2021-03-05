import React from 'react'
import styled from 'styled-components';

export default function Card() {
    return (
        <CardContainer radius={10}>
            <CardImage/>
            I am a card 
        </CardContainer>
    );
}

export function CardImage() {
    return (
        <StyledImage/>
    );
}

export function CardDetails() {
    return (
        <StyledDetails/>
    );
}

const CardContainer = styled.div`
    display: flex;
    background: white;
    color: black;
    max-width: 600px;
    min-width: 300px;
    height: 150px;
    box-shadow: 0px 5px 10px -1px #999;
    border-radius: ${props => props.radius}px;
`;

const StyledImage = styled.img`
    width: 33%;
`;

const StyledDetails = styled.div`
    
`;
