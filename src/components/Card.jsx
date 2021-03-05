import React from 'react'
import styled from 'styled-components';

export default function Card(props) {
    const {children} = props;
    return (
        <CardContainer radius={10}>
            {children}
        </CardContainer>
    );
}

export function CardImage() {
    return (
        <StyledImage src={"https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340"}/>
    );
}

export function CardDetails(props) {
    const {children} = props;
    return (
        <StyledDetails>
            {children}
        </ StyledDetails>
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
    flex-shrink: 0;
    margin: 10px;
    background: #eee;
    border: none;
`;

const StyledDetails = styled.div`
    margin: 10px 0px;
    font-size: 12px;
`;
