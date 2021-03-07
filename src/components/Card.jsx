import React from 'react'
import styled from 'styled-components';

export default function Card(props) {
    const {children} = props;
    return (
        <CardContainer radius={0}>
            {children}
        </CardContainer>
    );
}

export function CardMedia(props) {
    const {children} = props;
    return (
        <StyledMedia>
            {children}
        </StyledMedia>
    );
}

export function CardImage(props) {
    const {imageSrc} = props;
    return (
        <StyledImage src={imageSrc}/>
    );
}

export function CardDetails(props) {
    const {children} = props;
    return (
        <StyledDetails maxLines={2}>
            {children}    
        </ StyledDetails>
    );
}

export function CardTitle(props) {
    const {text, maxLines} = props;
    return (
        <StyledTitle maxLines={maxLines}>
            {text}
        </StyledTitle>
    );
}

const CardContainer = styled.div`
    display: flex;
    background: white;
    color: black;
    max-width: 600px;
    min-width: 300px;
    height: 150px;
    box-shadow: 0px 2px 5px -1px #ccc;
    border-radius: ${props => props.radius}px;
    overflow: hidden;
`;

const StyledImage = styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
`;

const StyledMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    padding: 10px;
    flex-shrink: 0;
    border-right: 1px solid #eee;
`;

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 5px;
    background-color: #fafafa;
`;

const StyledTitle = styled.h2`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${props => props.maxLines ?? 'none'};
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    padding: 0;
    font-size: 14px;
    color: #212121;
`;
