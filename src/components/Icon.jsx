import { css } from 'styled-components';

const Icon = css`
color: #121212;
padding: 2px;
border-radius: 50%;

&:active, &:hover {
    cursor: pointer;
    background-color: #eee;
}`;

export default Icon;