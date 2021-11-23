import styled from 'styled-components';
import { Container as ContainerComponent } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { device } from 'src/utils/constants';

export const Link = styled(NavLink)`
    position: relative;
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
export const Container = styled(ContainerComponent)`
    & span:first-child {
        cursor: pointer;
    }
`;
export const CartItemsQuantity = styled.div`
    position: absolute;
    top: 10px;
    left: 77px;
    background-color: tomato;
    color: white;
    width: 18px;
    height: 18px;
    border-radius: 50%;

    @media ${device.tabletBreakpoint} {
        top: 10px;
        right: -12px;
        left: unset;
    }

    & p {
        padding: 0 1px 2px 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
    }
`;
