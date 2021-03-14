import React from 'react'
import styled from 'styled-components';

export function Card(props) {
    const {children, theme, className} = props;
    return (
        <CardContainer className={className} theme={theme} radius={0}>
            {children}
        </CardContainer>
    );
}

export function CardMedia(props) {
    const {children, width, className} = props;
    return (
        <StyledMedia className={className} width={width}>
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

export function MediaOverlay(props) {
    const {children, className} = props;
    return (
        <StyledMediaOverlay className={className}>{children}</StyledMediaOverlay>
    )
}

export function CardDetails(props) {
    const {children, theme} = props;
    return (
        <StyledDetails theme={theme}>
            {children}    
        </ StyledDetails>
    );
}

export function CardTitle(props) {
    const {text, maxLines, theme} = props;
    return (
        <StyledTitle theme={theme} maxLines={maxLines}>
            {text}
        </StyledTitle>
    );
}

const CardContainer = styled.div`
    display: flex;
    background: ${props => props.theme?.backgroundLighter ?? 'white'};
    color: ${props => props.theme?.text ?? 'black'};
    box-shadow: 0px 2px 5px -1px ${props => props.theme.shadow};
    border-radius: ${props => props.radius}px;
    overflow: hidden;
`;

const StyledImage = styled.img`
    object-fit: fill;
    max-width: 100%;
    max-height: 100%;
`;

const StyledMedia = styled.div`
    position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ?? '50%'};
    flex-shrink: 0;
    border-right: 1px solid ${props => props.theme?.backgroundDarker};
`;

const StyledMediaOverlay = styled.div`
    position: absolute;
`;

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 5px;
    background-color: ${props => props.theme?.background ?? '#fafafa'};
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
    color: ${props => props.theme?.textLighter ?? '#212121'};
`;
