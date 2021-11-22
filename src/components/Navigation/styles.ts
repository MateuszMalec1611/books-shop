import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    padding: 7px 10px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.55);
    text-decoration: none;
    transition: color 0.3s;

    &:hover,
    &.active {
        color: #fff;
    }
`;
