import { Col, Row } from 'react-bootstrap';
import { device } from 'src/utils/constants';
import styled from 'styled-components';

export const BookCol = styled(Col)`
    display: flex;
    justify-content: center;
    margin: 20px 0;
`;

export const PaginationWrapper = styled(Row)`
    display: flex;
    justify-content: center;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & ul li {
        margin: 0 3px;
        display: flex;

        & a {
            padding: 5px 15px;
            text-decoration: none;
            color: black;
            font-size: 20px;
            font-weight: bold;

            &.active {
                border-radius: 50%;
                border: 1px solid #212529;
                background-color: #212529;
                color: white;
            }
        }
        &.disabled {
            a {
                color: gray;
            }
        }
    }
`;

export const TopArrow = styled.div`
    padding: 5px 12px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: white;
    font-size: 24px;
    border-radius: 50%;
    border: 1px solid #212529;
    background-color: #212529;
    box-shadow: 4px 4px 10px black;
    cursor: pointer;

    @media ${device.tabletBreakpoint} {
        bottom: 40px;
        right: 40px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`;
