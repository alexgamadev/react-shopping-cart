import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {LinkedinSquare} from '@styled-icons/boxicons-logos/LinkedinSquare';

export default function About() {
    return (
        <>
            <Navbar pageTitle={"About"}/>
            <Wrapper>
                <div>
                    <StyledLinkText href='https://github.com/alexgamadev'>
                        <Github size={30}/>
                        Find me on Github
                    </StyledLinkText>
                </div>
                <div>
                    <StyledLinkText href='https://www.linkedin.com/in/alexgama97/'>
                        <LinkedinSquare size={30}/>
                        Find me on LinkedIn
                    </StyledLinkText>
                </div>
                <Footertext>
                    Project made for TheOdinProject
                </Footertext>
            </Wrapper>
        </>
    )
}

const StyledLinkText = styled.a`
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.primaryDarker};
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`;

const Footertext = styled.div`
font-size: 20px;
    position: absolute;
    bottom: 20px;
`;
