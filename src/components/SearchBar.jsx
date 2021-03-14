import React from 'react'
import styled from 'styled-components';
import {Search} from '@styled-icons/boxicons-regular/Search'

export default function SearchBar() {
    return (
        <Wrapper>
            <StyledSearch type="text" />
            <SearchIcon size={35} role={"img"}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 10px;
`;
const StyledSearch = styled.input`
    padding: 7px 10px;
    border-radius: 5px;
    width: 70%;
    border: 1px solid ${props => props.theme.backgroundDarker};
    background-color: ${props => props.theme.backgroundLighter};
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const SearchIcon = styled(Search)`
    color: ${props => props.theme.textLighter};
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
    &:active {
        cursor: pointer;
        background-color: ${props => `${props.theme?.textLighter}11`};
    }
`;