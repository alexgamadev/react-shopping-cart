import React, { useRef } from 'react'
import styled from 'styled-components';
import {Search} from '@styled-icons/boxicons-regular/Search';

export default function SearchBar(props) {
    const {searchFunc} = props;
    const searchInput = useRef(null);

    function search(e) {
        e.preventDefault();
        if(searchFunc) searchFunc(searchInput.current.value);
    }

    return (
        <FormWrapper onSubmit={search}>
            <StyledSearch type="text" ref={searchInput}/>
            <SearchIcon size={35} role={"img"} onClick={search}/>
        </FormWrapper>
    )
}

const FormWrapper = styled.form`
    display: flex;
    justify-content: center;
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

    &:focus, &:active {
        border-radius: 5px;
        border: 1px solid #888;
        outline: none;
    }
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