import React from 'react';
import styled from 'styled-components';
import {Spinner3 as SpinnerIcon} from '@styled-icons/icomoon/Spinner3'

export default function Spinner(props) {
    const { cover } = props;
    return (
        <PageCover visible={cover ? true : false}>
            <StyledSpinner isCovered={cover ? true : false} size={48}/>
        </PageCover>
    )
}

const PageCover = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.visible ? '#12121299' : '#00000000'};
`;

const StyledSpinner = styled(SpinnerIcon)`
    color: ${props => props.isCovered ? 'white' : '#333'};
    animation: spin infinite 5s linear;

    @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;
