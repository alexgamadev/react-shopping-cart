import React, {useContext} from 'react'
import styled from 'styled-components';
import { BasketContext } from '../reducers/BasketStore'

export default function QuantityDisplay(props) {
    const {dispatch} = useContext(BasketContext);
    const {quantity, id} = props;

    function adjustQuantity(change) {
        dispatch({type:'adjust-quantity', payload: {change, id}});
    }

    return (
        <Wrapper>
            <StyledButton onClick={() => adjustQuantity(-1)}>-</StyledButton>
            {quantity}
            <StyledButton onClick={() => adjustQuantity(1)}>+</StyledButton>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 5px;
`;

const StyledButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.backgroundDarker};

    &:hover {
        cursor:pointer;
    }
    &:active {
        cursor: pointer;
        background-color: ${props => props.theme?.background};
    }
`;

