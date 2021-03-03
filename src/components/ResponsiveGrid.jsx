import React from 'react'
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    grid-gap: 20px;
    margin-bottom: ${props => props.gutter};

    @media(min-width:1300px){
        grid-template-columns: repeat(4, 1fr);
    }
`;

export default function ResponsiveGrid(props) {
    const { children } = props;

    return (
        <GridWrapper gutter="20px">
                {children}
        </GridWrapper>
    );
}


